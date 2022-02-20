---
description: Primitive Factory
---

# PrimitiveFactory.sol

No access controls are available to deployer

:::note Details
Deploy new PrimitiveEngine contracts
:::


## Methods

### MIN_LIQUIDITY_FACTOR()

Used to scale the minimum amount of liquidity to lowest precision

```solidity title="Solidity"
function MIN_LIQUIDITY_FACTOR() external view returns (uint256)
```


:::note Details
E.g. if the lowest decimal token is 6, min liquidity w/ 18 decimals                 cannot be 1000 wei, therefore the token decimals                 divided by the min liquidity factor is the amount of minimum liquidity                 MIN_LIQUIDITY = 10 ^ (Decimals / MIN_LIQUIDITY_FACTOR)
:::



#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### args()

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

### deploy(address,address)

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

### deployer()

Deployer does not have any access controls to wield

```solidity title="Solidity"
function deployer() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | Deployer of this factory contract |

### getEngine(address,address)

Fetches engine address of a token pair which has been deployed from this factory

```solidity title="Solidity"
function getEngine(address, address) external view returns (address)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | engine  Engine address for a risky and stable token |



## Events

### DeployEngine

Created a new engine contract!

```solidity title="Solidity"
event DeployEngine(address indexed from, address indexed risky, address indexed stable, address engine)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| risky `indexed` | address | undefined |
| stable `indexed` | address | undefined |
| engine  | address | undefined |



## Errors

### DecimalsError

Thrown on attempting to deploy a pool using a token with unsupported decimals

```solidity title="Solidity"
error DecimalsError(uint256 decimals)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| decimals | uint256 | undefined |

### DeployedError

Thrown on attempting to deploy an already deployed Engine

```solidity title="Solidity"
error DeployedError()
```





### SameTokenError

Thrown when the risky and stable tokens are the same

```solidity title="Solidity"
error SameTokenError()
```





### ZeroAddressError

Thrown when the risky or the stable token is 0x0...

```solidity title="Solidity"
error ZeroAddressError()
```






