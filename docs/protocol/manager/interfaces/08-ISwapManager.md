---
description: Interface of SwapManager contract
---

# ISwapManager.sol





## Methods

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



## Events

### Swap

Emitted when a swap occurs

```solidity title="Solidity"
event Swap(address indexed payer, address recipient, address indexed engine, bytes32 indexed poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut, bool fromMargin, bool toMargin)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | Address of the payer |
| recipient  | address | Address of the recipient |
| engine `indexed` | address | Address of the engine |
| poolId `indexed` | bytes32 | Id of the pool |
| riskyForStable  | bool | True if swapping risky for stable |
| deltaIn  | uint256 | Sent amount |
| deltaOut  | uint256 | Received amount |
| fromMargin  | bool | True if the sent amount is taken from the margin |
| toMargin  | bool | True if the received amount is sent to the margin |



## Events

### DeadlineReachedError

Thrown when the deadline is reached

```solidity title="Solidity"
error DeadlineReachedError()
```






