---
description: Interface of ERC1155Permit contract
---

# IERC1155Permit.sol





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

### balanceOf



```solidity title="Solidity"
function balanceOf(address account, uint256 id) external view returns (uint256)
```


:::note Details
Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address.
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
xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.
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

### isApprovedForAll



```solidity title="Solidity"
function isApprovedForAll(address account, address operator) external view returns (bool)
```


:::note Details
Returns true if `operator` is approved to transfer ``account``&#39;s tokens. See {setApprovalForAll}.
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
function nonces(address owner) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address to inspect

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Current nonce of an address

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

### safeBatchTransferFrom



```solidity title="Solidity"
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) external nonpayable
```


:::note Details
xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.
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
Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must be have been approved to spend ``from``&#39;s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.
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
Grants or revokes permission to `operator` to transfer the caller&#39;s tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller.
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
Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined



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





### SigExpiredError

Thrown when the signature has expired

```solidity title="Solidity"
error SigExpiredError()
```






