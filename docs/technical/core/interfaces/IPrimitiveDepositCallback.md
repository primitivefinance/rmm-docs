---
description: Primitive Deposit Callback

---

# IPrimitiveDepositCallback.sol









## Methods


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












