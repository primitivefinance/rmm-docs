---
description: Interface of PositionRenderer contract
---

# IPositionRenderer.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/tree/develop/contracts/interfaces/IPositionRenderer.sol)





## Methods

### render

Returns a SVG representation of a position token

```solidity title="Solidity"
function render(address engine, uint256 tokenId) external view returns (string)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| engine | address | Address of the PrimitiveEngine contract |
| tokenId | uint256 | Id of the position token (pool id) |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | SVG image as a base64 encoded string |




