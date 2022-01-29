---
description: >-
  A checklist for building peripheral smart contracts or interacting with the rmm-core contracts.
---

# Integration Checklist

Integrating the Primitive rmm-core smart contracts requires several important checks to protect end users. The rmm-core is designed to be gas efficient and minimal, which comes at a cost of reducing protections. Peripheral contracts can then take it upon themselves to implement the protections, if they are needed (e.g. if its a public contract).

## Checklist

- [ ] If creating pools, account for engine.MIN_LIQUIDITY, which is burned when creating pools. Improperly assuming 100% of allocated liquidity on pool creation is returned to the caller could lead to accounting issues in peripheral contracts. Always verify periphery contracts are receiving the expected liquidity.

- [ ] Liquidity updates have slippage checks. Whenever adding tokens to the pool and expecting liquidity to be minted, there should be a slippage parameter `minLiquidity` to verify the expected amount of liquidity is received. Additionally, when removing tokens from the pool by burning LPs, both token amounts should be checked against a `minTokenAmountOut` to verify the expected amounts are being received. Without these slippage checks, front-running or back-running can potentially drain value from users.

- [ ] Swaps have slippage checks. When swapping, a `minAmountOut` or `maxAmountIn` check should be applied to the swap amounts to verify not too little tokens are received or not too many are spent.

- [ ] Callbacks verify the `msg.sender` is the appropriate engine contract. The PrimitiveEngine contract makes use of callback functions, which are dangerous external calls to allow a more agnostic payment flow when allocating, depositing, or swapping. Callbacks are implemented as external functions in the peripheral contracts to handle paying the engine its expected tokens. Given the function is external, it's critical to check that the `msg.sender` is the expected engine. Check out the PrimitiveManager contract as a reference [here](https://github.com/primitivefinance/rmm-manager/blob/2cf4750e978a22d44386e063b85a858d56e22ccb/contracts/PrimitiveManager.sol#L158-L159).

- [ ] Re-entrancy guards are on all mutable functions that are relevant. Given the extensive use of callbacks in the engine, re-entrancy of the peripheral contract is expected. This makes it critical to make sure there are appropriate re-entrancy checks.

- [ ] If computing the engine address, verify the contract has been deployed by checking if a contract exists at the address. The engine contracts are deployed using CREATE2, making them deterministic. It's often cheaper to compute the address rather than call to the factory. If computing the address, an address will be returned regardless if the engine has been deployed!

## Reference Implementations

- [PrimitiveManager](https://github.com/primitivefinance/rmm-manager/blob/2cf4750e978a22d44386e063b85a858d56e22ccb/contracts/PrimitiveManager.sol)