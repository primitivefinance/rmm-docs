---
description: Primitive Create Callback
---

# IPrimitiveCreateCallback.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/tree/develop/contracts/interfaces/callback/IPrimitiveCreateCallback.sol)





## Methods

### createCallback

Triggered when creating a new pool for an Engine

```solidity title="Solidity"
function createCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to initialize risky reserve |
| delStable | uint256 | Amount of stable tokens required to initialize stable reserve |
| data | bytes | Calldata passed on create function call |




