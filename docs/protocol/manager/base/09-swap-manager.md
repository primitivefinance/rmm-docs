---
description: SwapManager contract
---

# SwapManager.sol



:::note Details
Manages the swaps
:::


## Methods

### WETH9

Returns the address of WETH9

```solidity title="Solidity"
function WETH9() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

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
| recipient | address | Address receiving the funds in their margin
| risky | address | Address of the risky token
| stable | address | Address of the stable token
| delRisky | uint256 | Amount of risky token to deposit
| delStable | uint256 | Amount of stable token to deposit

### depositCallback

Triggered when depositing tokens to an Engine

```solidity title="Solidity"
function depositCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to deposit to risky margin balance
| delStable | uint256 | Amount of stable tokens required to deposit to stable margin balance
| data | bytes | Calldata passed on deposit function call

### factory

Returns the address of the factory

```solidity title="Solidity"
function factory() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### margins

Returns the margin of an account for a specific Primitive Engine

```solidity title="Solidity"
function margins(address, address) external view returns (uint128 balanceRisky, uint128 balanceStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| balanceRisky | uint128 | undefined
| balanceStable | uint128 | undefined

### positionRenderer

Returns the address of the PositionRenderer

```solidity title="Solidity"
function positionRenderer() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### refundETH

Transfers the ETH balance of the contract to the caller

```solidity title="Solidity"
function refundETH() external payable
```





### swap

Swaps an exact amount of risky OR stable tokens for some risky OR stable tokens

```solidity title="Solidity"
function swap(ISwapManager.SwapParams params) external payable
```


:::note Details
Funds are swapped from a specific pool located into a specific engine
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| params | ISwapManager.SwapParams | A struct of type SwapParameters

### swapCallback

Triggered when swapping tokens in an Engine

```solidity title="Solidity"
function swapCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to pay the swap with
| delStable | uint256 | Amount of stable tokens required to pay the swap with
| data | bytes | Calldata passed on swap function call

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

### withdraw

Withdraws funds from the margin of a Primitive Engine

```solidity title="Solidity"
function withdraw(address recipient, address engine, uint256 delRisky, uint256 delStable) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address receiving the funds in their wallet
| engine | address | Primitive Engine to withdraw from
| delRisky | uint256 | Amount of risky token to withdraw
| delStable | uint256 | Amount of stable token to withdraw

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

### Deposit

Emitted when funds are deposited

```solidity title="Solidity"
event Deposit(address indexed payer, address indexed recipient, address indexed engine, address risky, address stable, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| engine `indexed` | address | undefined |
| risky  | address | undefined |
| stable  | address | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |

### Swap

Emitted when a swap occurs

```solidity title="Solidity"
event Swap(address indexed payer, address recipient, address indexed engine, bytes32 indexed poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut, bool fromMargin, bool toMargin)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| recipient  | address | undefined |
| engine `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| riskyForStable  | bool | undefined |
| deltaIn  | uint256 | undefined |
| deltaOut  | uint256 | undefined |
| fromMargin  | bool | undefined |
| toMargin  | bool | undefined |

### Withdraw

Emitted when funds are withdrawn

```solidity title="Solidity"
event Withdraw(address indexed payer, address indexed recipient, address indexed engine, address risky, address stable, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| engine `indexed` | address | undefined |
| risky  | address | undefined |
| stable  | address | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |



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

### DeadlineReachedError

Thrown when the deadline is reached

```solidity title="Solidity"
error DeadlineReachedError()
```





### EngineNotDeployedError

Thrown when the target Engine is not deployed

```solidity title="Solidity"
error EngineNotDeployedError()
```





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





### ZeroDelError

Thrown when trying to deposit or withdraw 0 risky and stable

```solidity title="Solidity"
error ZeroDelError()
```
