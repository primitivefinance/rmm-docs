---
description: Interface of PositionRenderer contract
---

# IPositionRenderer.sol





## Methods

### render

Returns a SVG representation of the token

```solidity title="Solidity"
function render(address engine, uint256 tokenId) external view returns (string)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| engine | address | Address of the engine
| tokenId | uint256 | Id of the token (same as pool id)

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | SVG image as a string




