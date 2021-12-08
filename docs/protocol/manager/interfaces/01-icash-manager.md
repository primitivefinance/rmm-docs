---
description: Interface of CashManager contract
---

# ICashManager.sol





## Methods

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
| token | address | Address of the token to sweep
| amountMin | uint256 | Minimum amount to transfer
| recipient | address | Recipient of the tokens

### unwrap

Unwraps WETH to ETH and transfers to a recipient

```solidity title="Solidity"
function unwrap(uint256 amountMin, address recipient) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| amountMin | uint256 | Minimum amount to unwrap
| recipient | address | Address of the recipient

### wrap

Wraps ETH into WETH and transfers to the msg.sender

```solidity title="Solidity"
function wrap(uint256 value) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | Amount of ETH to wrap




## Events

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

### OnlyWETHError

Thrown when the sender is not WETH

```solidity title="Solidity"
error OnlyWETHError()
```






