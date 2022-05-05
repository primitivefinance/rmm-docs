---
description: Events of the Primitive Engine contract
---

# IPrimitiveEngineEvents.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-core/blob/main/contracts/interfaces/engine/IPrimitiveEngineEvents.sol)






## Events

### Allocate

Adds liquidity of risky and stable tokens to a specified `poolId`

```solidity title="Solidity"
event Allocate(address indexed from, address indexed recipient, bytes32 indexed poolId, uint256 delRisky, uint256 delStable, uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | Method caller `msg.sender` |
| recipient `indexed` | address | Address that receives liquidity |
| poolId `indexed` | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |
| delRisky  | uint256 | Amount of risky tokens deposited |
| delStable  | uint256 | Amount of stable tokens deposited |
| delLiquidity  | uint256 | Amount of liquidity granted to `recipient` |

### Create

Creates a pool with liquidity

```solidity title="Solidity"
event Create(address indexed from, uint128 strike, uint32 sigma, uint32 indexed maturity, uint32 indexed gamma, uint256 delRisky, uint256 delStable, uint256 delLiquidity)
```


:::note Details
Keccak256 hash of the engine address, strike, sigma, maturity, and gamma
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | Calling `msg.sender` of the create function |
| strike  | uint128 | Marginal price of the pool&#39;s risky token at maturity, with the same decimals as the stable token, valid [0, 2^128-1] |
| sigma  | uint32 | AKA Implied Volatility in basis points, determines the price impact of swaps, valid for (1, 10_000_000) |
| maturity `indexed` | uint32 | Timestamp which starts the BUFFER countdown until swaps will cease, in seconds, valid for (block.timestamp, 2^32-1] |
| gamma `indexed` | uint32 | Multiplied against swap in amounts to apply fee, equal to 1 - fee % but units are in basis points, valid for (9000, 10_000) |
| delRisky  | uint256 | Amount of risky tokens deposited |
| delStable  | uint256 | Amount of stable tokens deposited |
| delLiquidity  | uint256 | Amount of liquidity granted to `recipient` |

### Deposit

Added stable and/or risky tokens to a margin account

```solidity title="Solidity"
event Deposit(address indexed from, address indexed recipient, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | Method caller `msg.sender` |
| recipient `indexed` | address | Margin account recieving deposits |
| delRisky  | uint256 | Amount of risky tokens deposited |
| delStable  | uint256 | Amount of stable tokens deposited |

### Remove

Adds liquidity of risky and stable tokens to a specified `poolId`

```solidity title="Solidity"
event Remove(address indexed from, bytes32 indexed poolId, uint256 delRisky, uint256 delStable, uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | Method caller `msg.sender` |
| poolId `indexed` | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |
| delRisky  | uint256 | Amount of risky tokens deposited |
| delStable  | uint256 | Amount of stable tokens deposited |
| delLiquidity  | uint256 | Amount of liquidity decreased from `from` |

### Swap

Swaps between `risky` and `stable` assets

```solidity title="Solidity"
event Swap(address indexed from, address indexed recipient, bytes32 indexed poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | Method caller `msg.sender` |
| recipient `indexed` | address | Address that receives `deltaOut` amount of tokens |
| poolId `indexed` | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |
| riskyForStable  | bool | If true, swaps risky to stable, else swaps stable to risky |
| deltaIn  | uint256 | Amount of tokens added to reserves |
| deltaOut  | uint256 | Amount of tokens removed from reserves |

### UpdateLastTimestamp

Updates the time until expiry of the pool with `poolId`

```solidity title="Solidity"
event UpdateLastTimestamp(bytes32 indexed poolId)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId `indexed` | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |

### Withdraw

Removes stable and/or risky from a margin account

```solidity title="Solidity"
event Withdraw(address indexed from, address indexed recipient, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | Method caller `msg.sender` |
| recipient `indexed` | address | Address that tokens are sent to |
| delRisky  | uint256 | Amount of risky tokens withdrawn |
| delStable  | uint256 | Amount of stable tokens withdrawn |



