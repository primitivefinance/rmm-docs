---
description: View functions of the Primitive Engine contract
---

# IPrimitiveEngineView.sol





## Methods

### BUFFER()



```solidity title="Solidity"
function BUFFER() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Amount of seconds after pool expiry which allows swaps, no swaps after buffer |

### MIN_LIQUIDITY()



```solidity title="Solidity"
function MIN_LIQUIDITY() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Amount of liquidity burned on `create()` calls |

### PRECISION()



```solidity title="Solidity"
function PRECISION() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Precision units to scale to when doing token related calculations |

### calibrations(bytes32)

Fetches `Calibration` pool parameters

```solidity title="Solidity"
function calibrations(bytes32 poolId) external view returns (uint128 strike, uint32 sigma, uint32 maturity, uint32 lastTimestamp, uint32 gamma)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |

#### Returns

| Name | Type | Description |
|---|---|---|
| strike | uint128 |          Marginal price of the pool&#39;s risky token at maturity, with the same decimals as the stable token, valid [0, 2^128-1] |
| sigma | uint32 |           AKA Implied Volatility in basis points, determines the price impact of swaps, valid for (1, 10_000_000) |
| maturity | uint32 |        Timestamp which starts the BUFFER countdown until swaps will cease, in seconds, valid for (block.timestamp, 2^32-1] |
| lastTimestamp | uint32 |   Last timestamp used to calculate time until expiry, aka &quot;tau&quot; |
| gamma | uint32 |           Multiplied against swap in amounts to apply fee, equal to 1 - fee % but units are in basis points, valid for (9_000, 10_000) |

### factory()



```solidity title="Solidity"
function factory() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### invariantOf(bytes32)

Fetches the current invariant, notation is usually `k`, based on risky and stable token reserves of pool with `poolId`

```solidity title="Solidity"
function invariantOf(bytes32 poolId) external view returns (int128 invariant)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |

#### Returns

| Name | Type | Description |
|---|---|---|
| invariant | int128 |   Signed fixed point 64.64 number, invariant of `poolId` |

### liquidity(address,bytes32)

Fetches position liquidity an account address and poolId

```solidity title="Solidity"
function liquidity(address account, bytes32 poolId) external view returns (uint256 liquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |
| poolId | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |

#### Returns

| Name | Type | Description |
|---|---|---|
| liquidity | uint256 |   Liquidity owned by `account` in `poolId` |

### margins(address)

Fetches the margin balances of `account`

```solidity title="Solidity"
function margins(address account) external view returns (uint128 balanceRisky, uint128 balanceStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | Margin account to fetch |

#### Returns

| Name | Type | Description |
|---|---|---|
| balanceRisky | uint128 |    Balance of the risky token |
| balanceStable | uint128 |   Balance of the stable token |

### reserves(bytes32)

Fetches the global reserve state for a pool with `poolId`

```solidity title="Solidity"
function reserves(bytes32 poolId) external view returns (uint128 reserveRisky, uint128 reserveStable, uint128 liquidity, uint32 blockTimestamp, uint256 cumulativeRisky, uint256 cumulativeStable, uint256 cumulativeLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 | Keccak256 hash of the engine address, strike, sigma, maturity, and gamma |

#### Returns

| Name | Type | Description |
|---|---|---|
| reserveRisky | uint128 |         Risky token balance in the reserve |
| reserveStable | uint128 |        Stable token balance in the reserve |
| liquidity | uint128 |            Total supply of liquidity for the curve |
| blockTimestamp | uint32 |       Timestamp when the cumulative reserve values were last updated |
| cumulativeRisky | uint256 |      Cumulative sum of risky token reserves of the previous update |
| cumulativeStable | uint256 |     Cumulative sum of stable token reserves of the previous update |
| cumulativeLiquidity | uint256 |  Cumulative sum of total supply of liquidity of the previous update |

### risky()



```solidity title="Solidity"
function risky() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### scaleFactorRisky()



```solidity title="Solidity"
function scaleFactorRisky() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Multiplier to scale amounts to/from, equal to 10^(18 - riskyDecimals) |

### scaleFactorStable()



```solidity title="Solidity"
function scaleFactorStable() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Multiplier to scale amounts to/from, equal to 10^(18 - stableDecimals) |

### stable()



```solidity title="Solidity"
function stable() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | Stable token address, a more accurate name is the quote token |




