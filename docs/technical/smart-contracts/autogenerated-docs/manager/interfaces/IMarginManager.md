---
description: Interface of MarginManager contract
---

# IMarginManager.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/blob/main/contracts/interfaces/IMarginManager.sol)





## Methods

### deposit

Deposits funds into the margin of a Primitive Engine

```solidity title="Solidity"
function deposit(address recipient, address risky, address stable, uint256 delRisky, uint256 delStable) external payable
```


:::note Details
Since the PrimitiveManager contract keeps track of the margins, it                   will deposit the funds into the Primitive Engine using its own address
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address receiving the funds in their margin |
| risky | address | Address of the risky token |
| stable | address | Address of the stable token |
| delRisky | uint256 | Amount of risky token to deposit |
| delStable | uint256 | Amount of stable token to deposit |

### depositCallback

Triggered when depositing tokens to an Engine

```solidity title="Solidity"
function depositCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to deposit to risky margin balance |
| delStable | uint256 | Amount of stable tokens required to deposit to stable margin balance |
| data | bytes | Calldata passed on deposit function call |

### margins

Returns the margin of an account for a specific Primitive Engine

```solidity title="Solidity"
function margins(address account, address engine) external view returns (uint128 balanceRisky, uint128 balanceStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | Address of the account |
| engine | address | Address of the engine |

#### Returns

| Name | Type | Description |
|---|---|---|
| balanceRisky | uint128 |   Balance of risky in the margin of the user |
| balanceStable | uint128 |  Balance of stable in the margin of the user |

### withdraw

Withdraws funds from the margin of a Primitive Engine

```solidity title="Solidity"
function withdraw(address recipient, address engine, uint256 delRisky, uint256 delStable) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address receiving the funds in their wallet |
| engine | address | Primitive Engine to withdraw from |
| delRisky | uint256 | Amount of risky token to withdraw |
| delStable | uint256 | Amount of stable token to withdraw |



## Events

### Deposit

Emitted when funds are deposited

```solidity title="Solidity"
event Deposit(address indexed payer, address indexed recipient, address indexed engine, address risky, address stable, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | Address depositing the funds |
| recipient `indexed` | address | Address receiving the funds in their margin |
| engine `indexed` | address | Engine receiving the funds |
| risky  | address | Address of the risky token |
| stable  | address | Address of the stable token |
| delRisky  | uint256 | Amount of deposited risky |
| delStable  | uint256 | Amount of deposited stable |

### Withdraw

Emitted when funds are withdrawn

```solidity title="Solidity"
event Withdraw(address indexed payer, address indexed recipient, address indexed engine, address risky, address stable, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | Address withdrawing the funds |
| recipient `indexed` | address | Address receiving the funds in their wallet |
| engine `indexed` | address | Engine where the funds are withdrawn from |
| risky  | address | Address of the risky token |
| stable  | address | Address of the stable token |
| delRisky  | uint256 | Amount of withdrawn risky |
| delStable  | uint256 | Amount of withdrawn stable |



## Errors

### ZeroDelError

Thrown when trying to deposit or withdraw 0 risky and stable

```solidity title="Solidity"
error ZeroDelError()
```






