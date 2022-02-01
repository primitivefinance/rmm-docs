---
description: >-
  A checklist for building peripheral smart contracts or interacting with the rmm-core contracts.
---

# Integration Checklist

Integrating the Primitive rmm-core smart contracts requires several important checks to protect end users. The rmm-core is designed to be gas efficient and minimal, which comes at a cost of reducing protections. Peripheral contracts can then take it upon themselves to implement the protections, if they are needed (e.g. if its a public contract).

## Liquidity Rounding

Primitive uses division on-chain to compute amount of liquidity to grant and amount of tokens to remove from burned liquidity. In both steps, the division will cause the computed amounts to truncate, which has the effect of rounding down. Then, when that liquidity is removed, again the token amounts to receive are rounded down. This has the effect of losing the liquidity provider some small amount of tokens, which is by design. If this division rounding did not occur in a direction against the user, it would be possible to extract value from the pool by taking advantage of the rounding.

To summarize:
- Add liquidity, granted liquidity rounded down (decreasing tokens in position).
- Remove liquidity, amounts of tokens granted for the burned liquidity is rounded down (less tokens returned to user).

## Computing Swap Amounts

When altering the `risky` token reserves, whether through swapping in or swapping out, the `ReplicationMath.getStableGivenRisky` is the on-chain method to use to compute the `stable` reserve that will pass the invariant check.

However, for swaps that alter the `stable` token reserves, there is no simple on-chain method to compute the `risky` reserves that will allow the swap to pass the invariant check. This is because the invariant function is approximating transcendental functions (e.g. CDF) to work in the EVM. This `getStableGivenRisky` function is the forward direction and is using the approximations. To go backward, there is no easy formula for the reverse of the approximation of the transcendental function.

Therefore, swaps that change the `stable` reserves should be computed off-chain using a bisection method. The bisection could also be implemented on-chain, but it requires a for-loop, so it could be expensive. For reference, this [page describes what a bisection is and how to program one](https://www.geeksforgeeks.org/program-for-bisection-method/).

## Building Periphery Contracts Checklist

- [ ] If creating pools, account for engine.MIN_LIQUIDITY, which is burned when creating pools. Improperly assuming 100% of allocated liquidity on pool creation is returned to the caller could lead to accounting issues in peripheral contracts. Always verify periphery contracts are receiving the expected liquidity.

- [ ] Liquidity updates have slippage checks. Whenever adding tokens to the pool and expecting liquidity to be minted, there should be a slippage parameter `minLiquidity` to verify the expected amount of liquidity is received. Additionally, when removing tokens from the pool by burning LPs, both token amounts should be checked against a `minTokenAmountOut` to verify the expected amounts are being received. Without these slippage checks, front-running or back-running can potentially drain value from users.

- [ ] Swaps have slippage checks. When swapping, a `minAmountOut` or `maxAmountIn` check should be applied to the swap amounts to verify not too little tokens are received or not too many are spent.

- [ ] Callbacks verify the `msg.sender` is the appropriate engine contract. The PrimitiveEngine contract makes use of callback functions, which are dangerous external calls to allow a more agnostic payment flow when allocating, depositing, or swapping. Callbacks are implemented as external functions in the peripheral contracts to handle paying the engine its expected tokens. Given the function is external, it's critical to check that the `msg.sender` is the expected engine. Check out the PrimitiveManager contract as a reference [here](https://github.com/primitivefinance/rmm-manager/blob/2cf4750e978a22d44386e063b85a858d56e22ccb/contracts/PrimitiveManager.sol#L158-L159).

- [ ] Re-entrancy guards are on all mutable functions that are relevant. Given the extensive use of callbacks in the engine, re-entrancy of the peripheral contract is expected. This makes it critical to make sure there are appropriate re-entrancy checks.

- [ ] If computing the engine address, verify the contract has been deployed by checking if a contract exists at the address. The engine contracts are deployed using CREATE2, making them deterministic. It's often cheaper to compute the address rather than call to the factory. If computing the address, an address will be returned regardless if the engine has been deployed!

## Using Cumulative Distribution Math Library

Primitive uses Cumulative Distribution Function (CDF) and inverse CDF (a.k.a. quantile) functions for the swap math. The library which implements these functions has some quirks:
- While CDF can have an output between 0 and 1, it mathematically approaches those values but does not reach them. However, due to the limited precision environment in the EVM, eventually the output values of the CDF function will be rounded towards those values.
- The inverse CDF will revert if an input is at the bounds 0 or 1. Since this is an undefined input for the inverse CDF the revert will protect against using a value which should technically be undefined, since its possible for it to return a value beyond its defined values.

## Reference Implementations

- [PrimitiveManager](https://github.com/primitivefinance/rmm-manager/blob/2cf4750e978a22d44386e063b85a858d56e22ccb/contracts/PrimitiveManager.sol)