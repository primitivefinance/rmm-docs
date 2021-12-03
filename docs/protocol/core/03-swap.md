---
description: Technical write-up of the swap function
---

# Swap

The swap function has seven parameters: a pool to trade in, the direction of the trade, the amount to swap in, the amount to get out, a choice of paying to pay using internal balances or being paid to an internal balance, a `recipient` that receives the output tokens, and an arbitrary `data` parameter that is passed in the callback function.

During the swap, if the internal balances are not being used to pay the balance, then the swap will make a call to the `msg.sender` asking for payment of the token being sent in using `IPrimitiveSwapCallback.swapCallback(delRisky, delStable, data)`. Therefore, this scenario must be triggered by a smart contract only, or it will fail.&#x20;

**Important**: An EOA can call the swap function directly (but shouldn't) by passing the parameter `fromMargin` in as true, if they have an internal token balance to pay for the swap.

After the token being transferred in are paid for, the output token will be transferred out to the `recipient.`

The final check will compare the invariant of the pool at the point after the swap and immediately prior to the swap. If the invariant did not grow or stay equal, than the trade was outside of the acceptable trading set, and is reverted.

## Swap function flow

### Step 0: Update the lastTimestamp of the pool

This is done by calling `_updateLastTimestamp`. If the `block.timestamp` has eclipsed the pool's `maturity`, then the `lastTimestamp` of the pool is set to the `maturity`. This step is _**CRITICAL**_. If the time until expiry is not updated, then the swap would occur on the wrong curve!

### Step 1: Calculating the invariant of the new curve with the updated lastTimestamp

The time until expiry of a pool is calculated by: `maturity - lastTimestamp`. Since the `lastTimestamp` was updated in the previous step, this will shift the curve, and the invariant of the pool will change. This is desired curve to swap on, and the invariant is a component of the swap math.

### Step 2: Calculate the new reserves

The next reserves can be calculated using the specified amounts to swap in and get out. The next reserves are then used to calculate a new invariant.

```
Swapping Risky to Stable
adjustedRisky  = currentRiskyReserve + amountIn * (1 - fee)
adjustedStable = currentStableReserve - amountOut
```

One caveat, is that the swap function is only defined for `1` unit of liquidity. So these reserve values are normalized before and after to `1` unit of liquidity.

```
Swapping Risky to Stable
adjustedRisky = (adjustedRisky * PRECISION) / reserve.liquidity;
adjustedStable = (adjustedStable * PRECISION) / reserve.liquidity;
```



### Step 3: Calculate the next invariant using the adjusted reserves  to make the invariant check

The invariant check is to make sure that immediately before and then after a swap, the invariant grows or stays the same. Since the time until expiry is updated in the swap function, the overall `swap()` call might have a more negative invariant. But this is why we store the invariant in memory _after_ we have updated the time until expiry.

**Important: **Notice how the adjustedRisky reserve is calculated using an amount in with a fee applied. This will have an effect on the invariant, so if there is not enough being swapped in to pay the fee, the invariant check will fail. The state update to the reserves will use the full amount in, as well as the required token payment. The (1 - fee) component is equal to the pool's `Calibration` `gamma` item, which was selected on pool creation.

### Step 4: Handle payments

The token that is being swapped out is transferred to the `msg.sender` optimistically, or deposited into the `msg.sender`'s internal balance. Then, the swap in token amount must be paid through an internal balance, or an external callback function.
