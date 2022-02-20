---
description: Primitive Engine Interface
---

# IPrimitiveEngine.sol





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

### allocate(bytes32,address,uint256,uint256,bool,bytes)

Allocates risky and stable tokens to a specific curve with `poolId`

```solidity title="Solidity"
function allocate(bytes32 poolId, address recipient, uint256 delRisky, uint256 delStable, bool fromMargin, bytes data) external nonpayable returns (uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 | Keccak256 hash of engine address, strike, sigma, maturity, and gamma |
| recipient | address | Address to give the allocated liquidity to |
| delRisky | uint256 | Amount of risky tokens to add |
| delStable | uint256 | Amount of stable tokens to add |
| fromMargin | bool | Whether the `msg.sender` pays with their margin balance, or must send tokens |
| data | bytes | Arbitrary data that is passed to the allocateCallback function |

#### Returns

| Name | Type | Description |
|---|---|---|
| delLiquidity | uint256 | Amount of liquidity given to `recipient` |

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

### create(uint128,uint32,uint32,uint32,uint256,uint256,bytes)

Initializes a curve with parameters in the `calibrations` storage mapping in the Engine

```solidity title="Solidity"
function create(uint128 strike, uint32 sigma, uint32 maturity, uint32 gamma, uint256 riskyPerLp, uint256 delLiquidity, bytes data) external nonpayable returns (bytes32 poolId, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| strike | uint128 | Marginal price of the pool&#39;s risky token at maturity, with the same decimals as the stable token, valid [0, 2^128-1] |
| sigma | uint32 | AKA Implied Volatility in basis points, determines the price impact of swaps, valid for (1, 10_000_000) |
| maturity | uint32 | Timestamp which starts the BUFFER countdown until swaps will cease, in seconds, valid for (block.timestamp, 2^32-1] |
| gamma | uint32 | Multiplied against swap in amounts to apply fee, equal to 1 - fee % but units are in basis points, valid for (9_000, 10_000) |
| riskyPerLp | uint256 | Risky reserve per liq. with risky decimals, = 1 - N(d1), d1 = (ln(S/K)+(r*σ^2/2))/σ√τ, valid for [0, 1e^(risky token decimals)) |
| delLiquidity | uint256 | Amount of liquidity units to allocate to the curve, wei value with 18 decimals of precision |
| data | bytes | Arbitrary data that is passed to the createCallback function |

#### Returns

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 |      Keccak256 hash of engine address, strike, sigma, maturity, and gamma |
| delRisky | uint256 |    Total amount of risky tokens provided to reserves |
| delStable | uint256 |   Total amount of stable tokens provided to reserves |

### deposit(address,uint256,uint256,bytes)

Adds risky and/or stable tokens to a `recipient`&#39;s internal balance account

```solidity title="Solidity"
function deposit(address recipient, uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Recipient margin account of the deposited tokens |
| delRisky | uint256 | Amount of risky tokens to deposit |
| delStable | uint256 | Amount of stable tokens to deposit |
| data | bytes | Arbitrary data that is passed to the depositCallback function |

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

### remove(bytes32,uint256)

Unallocates risky and stable tokens from a specific curve with `poolId`

```solidity title="Solidity"
function remove(bytes32 poolId, uint256 delLiquidity) external nonpayable returns (uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 | Keccak256 hash of engine address, strike, sigma, maturity, and gamma |
| delLiquidity | uint256 | Amount of liquidity to remove |

#### Returns

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 |      Amount of risky tokens received from removed liquidity |
| delStable | uint256 |     Amount of stable tokens received from removed liquidity |

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

### swap(address,bytes32,bool,uint256,uint256,bool,bool,bytes)

Swaps between `risky` and `stable` tokens

```solidity title="Solidity"
function swap(address recipient, bytes32 poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut, bool fromMargin, bool toMargin, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address that receives output token `deltaOut` amount |
| poolId | bytes32 | Keccak256 hash of engine address, strike, sigma, maturity, and gamma |
| riskyForStable | bool | If true, swap risky to stable, else swap stable to risky |
| deltaIn | uint256 | Amount of tokens to swap in |
| deltaOut | uint256 | Amount of tokens to swap out |
| fromMargin | bool | Whether the `msg.sender` uses their margin balance, or must send tokens |
| toMargin | bool | Whether the `deltaOut` amount is transferred or deposited into margin |
| data | bytes | Arbitrary data that is passed to the swapCallback function |

### updateLastTimestamp(bytes32)

Updates the time until expiry of the pool by setting its last timestamp value

```solidity title="Solidity"
function updateLastTimestamp(bytes32 poolId) external nonpayable returns (uint32 lastTimestamp)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 | Keccak256 hash of engine address, strike, sigma, maturity, and gamma |

#### Returns

| Name | Type | Description |
|---|---|---|
| lastTimestamp | uint32 | Timestamp loaded into the state of the pool&#39;s Calibration.lastTimestamp |

### withdraw(address,uint256,uint256)

Removes risky and/or stable tokens from a `msg.sender`&#39;s internal balance account

```solidity title="Solidity"
function withdraw(address recipient, uint256 delRisky, uint256 delStable) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address that tokens are transferred to |
| delRisky | uint256 | Amount of risky tokens to withdraw |
| delStable | uint256 | Amount of stable tokens to withdraw |



## Events

### Allocate

Adds liquidity of risky and stable tokens to a specified `poolId`

```solidity title="Solidity"
event Allocate(address indexed from, address indexed recipient, bytes32 indexed poolId, uint256 delRisky, uint256 delStable, uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |
| delLiquidity  | uint256 | undefined |

### Create

Creates a pool with liquidity

```solidity title="Solidity"
event Create(address indexed from, uint128 strike, uint32 sigma, uint32 indexed maturity, uint32 indexed gamma, uint256 delRisky, uint256 delStable, uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| strike  | uint128 | undefined |
| sigma  | uint32 | undefined |
| maturity `indexed` | uint32 | undefined |
| gamma `indexed` | uint32 | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |
| delLiquidity  | uint256 | undefined |

### Deposit

Added stable and/or risky tokens to a margin account

```solidity title="Solidity"
event Deposit(address indexed from, address indexed recipient, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |

### Remove

Adds liquidity of risky and stable tokens to a specified `poolId`

```solidity title="Solidity"
event Remove(address indexed from, bytes32 indexed poolId, uint256 delRisky, uint256 delStable, uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |
| delLiquidity  | uint256 | undefined |

### Swap

Swaps between `risky` and `stable` assets

```solidity title="Solidity"
event Swap(address indexed from, address indexed recipient, bytes32 indexed poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| riskyForStable  | bool | undefined |
| deltaIn  | uint256 | undefined |
| deltaOut  | uint256 | undefined |

### UpdateLastTimestamp

Updates the time until expiry of the pool with `poolId`

```solidity title="Solidity"
event UpdateLastTimestamp(bytes32 indexed poolId)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId `indexed` | bytes32 | undefined |

### Withdraw

Removes stable and/or risky from a margin account

```solidity title="Solidity"
event Withdraw(address indexed from, address indexed recipient, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |



## Errors

### BalanceError

Thrown when the balanceOf function is not successful and does not return data

```solidity title="Solidity"
error BalanceError()
```





### CalibrationError

Thrown when the parameters of a new pool are invalid, causing initial reserves to be 0

```solidity title="Solidity"
error CalibrationError(uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | undefined |
| delStable | uint256 | undefined |

### DeltaInError

Thrown when the deltaIn parameter is 0

```solidity title="Solidity"
error DeltaInError()
```





### DeltaOutError

Thrown when the deltaOut parameter is 0

```solidity title="Solidity"
error DeltaOutError()
```





### GammaError

Thrown when gamma, equal to 1 - fee %, is outside its bounds: 9_000 &lt;= gamma &lt;= 10_000; 1_000 = 10% fee

```solidity title="Solidity"
error GammaError(uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | undefined |

### InvariantError

Thrown when the invariant check fails

```solidity title="Solidity"
error InvariantError(int128 invariant, int128 nextInvariant)
```


:::note Details
Most important check as it verifies the validity of a desired swap
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| invariant | int128 | Pre-swap invariant updated with new tau |
| nextInvariant | int128 | Post-swap invariant after the swap amounts are applied to reserves |

### LockedError

Thrown on attempted re-entrancy on a function with a re-entrancy guard

```solidity title="Solidity"
error LockedError()
```





### MinLiquidityError

Thrown when liquidity is lower than or equal to the minimum amount of liquidity

```solidity title="Solidity"
error MinLiquidityError(uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | undefined |

### PoolDuplicateError

Thrown in create when a pool with computed poolId already exists

```solidity title="Solidity"
error PoolDuplicateError()
```





### PoolExpiredError

Thrown when calling an expired pool, where block.timestamp &gt; maturity, + BUFFER if swap

```solidity title="Solidity"
error PoolExpiredError()
```





### RiskyBalanceError

Thrown when the expected risky balance is less than the actual balance

```solidity title="Solidity"
error RiskyBalanceError(uint256 expected, uint256 actual)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| expected | uint256 | Expected risky balance |
| actual | uint256 | Actual risky balance |

### RiskyPerLpError

Thrown when riskyPerLp is outside the range of acceptable values, 0 &lt; riskyPerLp &lt;= 1eRiskyDecimals

```solidity title="Solidity"
error RiskyPerLpError(uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | undefined |

### SigmaError

Thrown when sigma is outside the range of acceptable values, 1 &lt;= sigma &lt;= 1e7 with 4 precision

```solidity title="Solidity"
error SigmaError(uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | undefined |

### StableBalanceError

Thrown when the expected stable balance is less than the actual balance

```solidity title="Solidity"
error StableBalanceError(uint256 expected, uint256 actual)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| expected | uint256 | Expected stable balance |
| actual | uint256 | Actual stable balance |

### StrikeError

Thrown when strike is not valid, i.e. equal to 0 or greater than 2^128

```solidity title="Solidity"
error StrikeError(uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | undefined |

### UninitializedError

Thrown when the pool with poolId has not been created

```solidity title="Solidity"
error UninitializedError()
```





### ZeroDeltasError

Thrown when the risky or stable amount is 0

```solidity title="Solidity"
error ZeroDeltasError()
```





### ZeroLiquidityError

Thrown when the liquidity parameter is 0

```solidity title="Solidity"
error ZeroLiquidityError()
```






