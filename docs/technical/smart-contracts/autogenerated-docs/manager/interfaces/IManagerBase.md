---
description: Interface of ManagerBase contract
---

# IManagerBase.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/blob/main/contracts/interfaces/IManagerBase.sol)





## Methods

### WETH9

Returns the address of WETH9

```solidity title="Solidity"
function WETH9() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### factory

Returns the address of the factory

```solidity title="Solidity"
function factory() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### positionDescriptor

Returns the address of the PositionDescriptor

```solidity title="Solidity"
function positionDescriptor() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |




## Errors

### NotEngineError

Thrown when the sender is not a Primitive Engine contract

```solidity title="Solidity"
error NotEngineError()
```





### WrongConstructorParametersError

Thrown when the constructor parameters are wrong

```solidity title="Solidity"
error WrongConstructorParametersError()
```






