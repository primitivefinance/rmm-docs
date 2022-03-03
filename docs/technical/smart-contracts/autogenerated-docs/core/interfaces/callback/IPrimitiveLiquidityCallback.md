---
description: Primitive Liquidity Callback
---

# IPrimitiveLiquidityCallback.sol





## Methods

### allocateCallback(uint256,uint256,bytes)

Triggered when providing liquidity to an Engine

```solidity title="Solidity"
function allocateCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to provide to risky reserve |
| delStable | uint256 | Amount of stable tokens required to provide to stable reserve |
| data | bytes | Calldata passed on allocate function call |



