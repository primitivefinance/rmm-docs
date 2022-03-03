---
description: IERC20
---

# IERC20.sol





## Methods

### allowance(address,address)



```solidity title="Solidity"
function allowance(address owner, address spender) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve(address,uint256)



```solidity title="Solidity"
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf(address)



```solidity title="Solidity"
function balanceOf(address account) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### decimals()



```solidity title="Solidity"
function decimals() external view returns (uint8)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### totalSupply()



```solidity title="Solidity"
function totalSupply() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer(address,uint256)



```solidity title="Solidity"
function transfer(address recipient, uint256 amount) external nonpayable returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom(address,address,uint256)



```solidity title="Solidity"
function transferFrom(address sender, address recipient, uint256 amount) external nonpayable returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| sender | address | undefined |
| recipient | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### Approval



```solidity title="Solidity"
event Approval(address indexed owner, address indexed spender, uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### Transfer



```solidity title="Solidity"
event Transfer(address indexed from, address indexed to, uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |


