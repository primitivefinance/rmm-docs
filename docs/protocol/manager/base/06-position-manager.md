---
description: PositionManager contract
---

# PositionManager.sol

Wraps the positions into ERC1155 tokens



## Methods

### DOMAIN_SEPARATOR

Returns the domain separator

```solidity title="Solidity"
function DOMAIN_SEPARATOR() external view returns (bytes32)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | Hash of the domain separator

### WETH9

Returns the address of WETH9

```solidity title="Solidity"
function WETH9() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### balanceOf



```solidity title="Solidity"
function balanceOf(address account, uint256 id) external view returns (uint256)
```


:::note Details
See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined
| id | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### balanceOfBatch



```solidity title="Solidity"
function balanceOfBatch(address[] accounts, uint256[] ids) external view returns (uint256[])
```


:::note Details
See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| accounts | address[] | undefined
| ids | uint256[] | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined

### factory

Returns the address of the factory

```solidity title="Solidity"
function factory() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### isApprovedForAll



```solidity title="Solidity"
function isApprovedForAll(address account, address operator) external view returns (bool)
```


:::note Details
See {IERC1155-isApprovedForAll}.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined
| operator | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### nonces

Returns the current nonce of an address

```solidity title="Solidity"
function nonces(address) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### permit

Grants or revokes the approval for an operator to transfer any of the owner&#39;s                  tokens using their signature

```solidity title="Solidity"
function permit(address owner, address operator, bool approved, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner
| operator | address | Address of the operator
| approved | bool | True if the approval should be granted, false if revoked
| deadline | uint256 | Expiry of the signature, as a timestamp
| v | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s`
| r | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s`
| s | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v`

### positionRenderer

Returns the address of the PositionRenderer

```solidity title="Solidity"
function positionRenderer() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### safeBatchTransferFrom



```solidity title="Solidity"
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) external nonpayable
```


:::note Details
See {IERC1155-safeBatchTransferFrom}.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| ids | uint256[] | undefined
| amounts | uint256[] | undefined
| data | bytes | undefined

### safeTransferFrom



```solidity title="Solidity"
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) external nonpayable
```


:::note Details
See {IERC1155-safeTransferFrom}.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| id | uint256 | undefined
| amount | uint256 | undefined
| data | bytes | undefined

### setApprovalForAll



```solidity title="Solidity"
function setApprovalForAll(address operator, bool approved) external nonpayable
```


:::note Details
See {IERC1155-setApprovalForAll}.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined
| approved | bool | undefined

### supportsInterface



```solidity title="Solidity"
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```


:::note Details
See {IERC165-supportsInterface}.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### uri

Returns the metadata of a token

```solidity title="Solidity"
function uri(uint256 tokenId) external view returns (string)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | Token id to look for (same as pool id)

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | Metadata of the token as a string



## Events

### ApprovalForAll



```solidity title="Solidity"
event ApprovalForAll(address indexed account, address indexed operator, bool approved)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### TransferBatch



```solidity title="Solidity"
event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| ids  | uint256[] | undefined |
| values  | uint256[] | undefined |

### TransferSingle



```solidity title="Solidity"
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| id  | uint256 | undefined |
| value  | uint256 | undefined |

### URI



```solidity title="Solidity"
event URI(string value, uint256 indexed id)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value  | string | undefined |
| id `indexed` | uint256 | undefined |



## Events

### InvalidSigError

Thrown when the signature is invalid

```solidity title="Solidity"
error InvalidSigError()
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





### SigExpiredError

Thrown when the signature has expired

```solidity title="Solidity"
error SigExpiredError()
```





### WrongConstructorParametersError

Thrown when the constructor parameters are wrong

```solidity title="Solidity"
error WrongConstructorParametersError()
```
