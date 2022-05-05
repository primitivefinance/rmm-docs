---
description: Primitive Factory Interface
---

# IPrimitiveFactory.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-core/blob/main/contracts/interfaces/IPrimitiveFactory.sol)





## Methods

### MIN_LIQUIDITY_FACTOR

Used to scale the minimum amount of liquidity to lowest precision

```solidity title="Solidity"
function MIN_LIQUIDITY_FACTOR() external pure returns (uint256)
```


:::note Details
E.g. if the lowest decimal token is 6, min liquidity w/ 18 decimals                 cannot be 1000 wei, therefore the token decimals                 divided by the min liquidity factor is the amount of minimum liquidity                 MIN_LIQUIDITY = 10 ^ (Decimals / MIN_LIQUIDITY_FACTOR)
:::



#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### args

Called within Engine constructor so Engine can set immutable                            variables without constructor args

```solidity title="Solidity"
function args() external view returns (address factory, address risky, address stable, uint256 scaleFactorRisky, uint256 scaleFactorStable, uint256 minLiquidity)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| factory | address |            Smart contract deploying the Engine contract |
| risky | address |              Risky token |
| stable | address |             Stable token |
| scaleFactorRisky | uint256 |   Scale factor of the risky token, 10^(18 - riskyTokenDecimals) |
| scaleFactorStable | uint256 |  Scale factor of the stable token, 10^(18 - stableTokenDecimals) |
| minLiquidity | uint256 |       Minimum amount of liquidity on pool creation |

### deploy

Deploys a new Engine contract and sets the `getEngine` mapping for the tokens

```solidity title="Solidity"
function deploy(address risky, address stable) external nonpayable returns (address engine)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| risky | address | Risky token, the underlying token |
| stable | address | Stable token, the quote token |

#### Returns

| Name | Type | Description |
|---|---|---|
| engine | address | undefined |

### deployer

Deployer does not have any access controls to wield

```solidity title="Solidity"
function deployer() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | Deployer of this factory contract |

### getEngine

Fetches engine address of a token pair which has been deployed from this factory

```solidity title="Solidity"
function getEngine(address risky, address stable) external view returns (address engine)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| risky | address | Risky token, the underlying token |
| stable | address | Stable token, the quote token |

#### Returns

| Name | Type | Description |
|---|---|---|
| engine | address |  Engine address for a risky and stable token |



## Events

### DeployEngine

Created a new engine contract!

```solidity title="Solidity"
event DeployEngine(address indexed from, address indexed risky, address indexed stable, address engine)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | Calling `msg.sender` of deploy |
| risky `indexed` | address | Risky token of Engine to deploy |
| stable `indexed` | address | Stable token of Engine to deploy |
| engine  | address | Deployed engine address |



