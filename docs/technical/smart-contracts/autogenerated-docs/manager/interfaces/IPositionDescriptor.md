---
description: Interface of PositionDescriptor contract
---

# IPositionDescriptor.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/blob/main/contracts/interfaces/IPositionDescriptor.sol)





## Methods

### getMetadata

Returns the metadata of a position token

```solidity title="Solidity"
function getMetadata(address engine, uint256 tokenId) external view returns (string)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| engine | address | Address of the PrimitiveEngine contract |
| tokenId | uint256 | Id of the position token (pool id) |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | Metadata as a base64 encoded JSON string |

### positionRenderer

Returns the address of the PositionRenderer contract

```solidity title="Solidity"
function positionRenderer() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |




