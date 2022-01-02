---
description: Primitive Swap Callback

---

# IPrimitiveSwapCallback.sol









## Methods


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












