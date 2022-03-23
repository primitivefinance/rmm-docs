---
description: CashManager contract
---

# CashManager.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/tree/develop/contracts/base/CashManager.sol)

Utils contract to manage ETH and token balances



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

### refundETH

Transfers the ETH balance of the contract to the caller

```solidity title="Solidity"
function refundETH() external payable
```





### sweepToken

Transfers the tokens in the contract to a recipient

```solidity title="Solidity"
function sweepToken(address token, uint256 amountMin, address recipient) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the token to sweep |
| amountMin | uint256 | Minimum amount to transfer |
| recipient | address | Recipient of the tokens |

### unwrap

Unwraps WETH to ETH and transfers to a recipient

```solidity title="Solidity"
function unwrap(uint256 amountMin, address recipient) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| amountMin | uint256 | Minimum amount to unwrap |
| recipient | address | Address of the recipient |

### wrap

Wraps ETH into WETH and transfers to the msg.sender

```solidity title="Solidity"
function wrap(uint256 value) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | Amount of ETH to wrap |




## Errors

### BalanceTooLowError

Thrown when the amount required is above balance

```solidity title="Solidity"
error BalanceTooLowError(uint256 balance, uint256 requiredAmount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| balance | uint256 | Actual ETH or token balance of the contract |
| requiredAmount | uint256 | ETH or token amount required by the user |

### LockedError

Thrown when a call to the contract is made during a locked state

```solidity title="Solidity"
error LockedError()
```





### NotEngineError

Thrown when the sender is not a Primitive Engine contract

```solidity title="Solidity"
error NotEngineError()
```





### OnlyWETHError

Thrown when the sender is not WETH

```solidity title="Solidity"
error OnlyWETHError()
```





### TransferError

Thrown when a transfer reverts

```solidity title="Solidity"
error TransferError()
```





### WrongConstructorParametersError

Thrown when the constructor parameters are wrong

```solidity title="Solidity"
error WrongConstructorParametersError()
```






