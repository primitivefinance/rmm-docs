---
description: Errors for the Primitive Engine contract
---

# IPrimitiveEngineErrors.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/tree/develop/contracts/interfaces/engine/IPrimitiveEngineErrors.sol)

Custom errors are encoded with their selector and arguments

:::note Details
Peripheral smart contracts should try catch and check if data matches another custom error
:::




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






