---
description: Overview of RMM protocol core smart contracts.
---

# RMM Core

## PrimitiveEngine.sol
### How is the Engine Used?

The Engine is a low-level contract with the primary tasks of:

* Creating new pools, "curves".
* Allocating and removing liquidity from pools.
* Accept deposits into an internal balance to optimize gas.
* Allow swaps between the two tokens defined in the Engine, using the CFMM trading invariant function.

### Underlying Token, Strike Token, Strike Price, Volatility, Maturity, and Swap Fee

The protocol has many parameters to choose from when creating RMM-01 pools: strike price, volatilities, maturities, swap fees, and tokens. The structure to support these different parameters in a permissionless way is implemented in two contracts: the Factory and Engine.

### Choose your tokens

First, two tokens must be chosen to build a curve from. These tokens should be a risky and a stable, but they can be anything. The `risky` is the `underlying` token, while the `stable` is the `quote` token, i.e. the strike is paid in it.

A token pair remains a token pair throughout its life, and that is why these addresses are immutable variables in the Engine contract. The Factory contract is used to deploy new Engines for different token pairs.

### Choose Pool Parameters

The next variables, strike, volatility, maturity, and gamma, are curve parameters, called a `Calibration`, and they are chosen when a new pool is created. New pools can be created in the Engine contract, with reasonable limits to which parameters are used. On pool creation, an initial amount of liquidity must be minted which requires the `msg.sender` to pay the Engine's risky and stable tokens as the first provided liquidity.

## What can I do to interact with the curves?

### Allocate Liquidity to the Curve

Once a curve is available, its `poolId` is a hash of the Engine address, and its curve parameters. Tokens can be supplied to the curve and in exchange a `liquidity position` is created. Liquidity scales linearly with the units of replication. When the pool is initially created, it is made such that `delLiquidity` units of liquidity corresponds to a `delLiquidity` units of replication (e.g. 1 `delLiquidity` = 1 covered call payoff).&#x20;

Therefore, adding liquidity multiplies that by a linear amount, so providing two liquidity is replicating two covered call payoffs, etc...

### Liquidity Position

Instead of liquidity being directly tokenized, it exists as state in the Engine contract. Each liquidity position is controlled by an address.

```
mapping(address => mapping(bytes32 => uint256)) public override liquidity;
```

### Swapping Between Tokens

The curve defines a trading rule which allows swaps between the risky and stable token. Both the amount in and amount out to swap are arguments, along with a direction of swapping tokens. The low-level swap has one critical check, in which the invariant is compared pre and post the swap. If the invariant has not stayed in the same, or grown when compared immediately before and after the swap, then the swap will fail.

## Protocol Actors

### Periphery Smart Contract: Entry point for Users

A high-level smart contract primarily used by end-users.

* Deposits tokens into the internal balance of the Engine with `deposit()`, with the expectation to use them for payments in the future.
* Mints new liquidity positions from the Engine with `allocate()`.
* Uses the Engine to swap between tokens with `swap()`.

### Arbitrageur

* Exclusively uses `swap()` to receive output tokens that are valued more than the input tokens when compared to a reference market price.
* Takes action for profit, net of swap and gas fees.
* Pays a swap fee to liquidity providers.



### Source Code

[https://github.com/primitivefinance/rmm-core/blob/main/contracts/PrimitiveEngine.sol](https://github.com/primitivefinance/rmm-core/blob/main/contracts/PrimitiveEngine.sol)


# PrimitiveFactory.sol

Canonical deployer contract for the RMM-01 PrimitiveEngine.

### Deploy

```
    /// @notice         Deploys a new Engine contract and sets the `getEngine` mapping for the tokens
    /// @param  risky   Risky token, the underlying token
    /// @param  stable  Stable token, the quote token
    function deploy(address risky, address stable) external returns (address engine);
```

Creates a new Engine contract with immutable parameters `risky` and `stable`, using `new`, and passing in a salt of: `salt: keccak256(abi.encode(risky, stable))`.

The Factory's `getEngine` mapping is updated with the deployed Engine address. Using `getEngine(risky, stable)` will return the Engine address.

The event `Deployed` is emitted with the parameters, `from`, `risky`, `stable`, and `engine`.

### Note

The Engine contract does not take constructor parameters, as this would modify the runtime bytecode. Additionally, the `risky` and `stable` are immutable state variables of the Engine, which means they cannot be set outside of the constructor. To set these values in the constructor, but not through the constructor arguments, the new Engine contract will call the Factory's `args` state variable to get the `risky` and `stable`. The `args` state variable in the Factory is set prior to the deployment of the new Engine, and deleted after.

### Source Code

[https://github.com/primitivefinance/rmm-core/blob/main/contracts/PrimitiveFactory.sol](https://github.com/primitivefinance/rmm-core/blob/main/contracts/PrimitiveEngine.sol)

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

# Libraries

The core contracts make use of several libraries, including ABDK64x64, a fixed point math library.

### Math libraries:

* ABDKMath64x64
* CumulativeNormalDistribution: Implements a CDF and Inverse CDF (Quantile) function using approximations and the ABDK Math Library.
* ReplicationMath: Implements the AMM specific math, like the trading function and invariant calculation.

### Accounting libraries:

* Margin: Handles data struct and manipulation of internal token balance accounts.
* Reserve: Handles data struct and manipulation of the pool reserves, as well as the TWAP oracle data.

### Utility libraries:

* SafeCast: UInt256 are often casted down to UInt128s, to pack struct data into a single storage slot. This library will perform checks when casting down to ensure the values stay the same.
* Transfers: Implements a `safeTransfer` helper function to be used in place of `erc20.transfer`, which checks the returnData on calls.
* Units: Helper functions to convert between 64x64 fixed point numbers and units.
