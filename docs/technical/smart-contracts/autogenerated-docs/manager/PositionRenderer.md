---
description: PositionRenderer contract
---

# PositionRenderer.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/tree/develop/contracts/PositionRenderer.sol)

Manages the visual representation of the Primitive protocol position tokens



## Methods

### render

Returns a SVG representation of a position token

```solidity title="Solidity"
function render(address, uint256) external pure returns (string)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | SVG image as a base64 encoded string |




