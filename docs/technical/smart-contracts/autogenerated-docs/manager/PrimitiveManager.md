---
description: PrimitiveManager contract
---

# PrimitiveManager.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/tree/develop/contracts/PrimitiveManager.sol)

Interacts with Primitive Engine contracts



## Methods

### DOMAIN_SEPARATOR

Returns the domain separator

```solidity title="Solidity"
function DOMAIN_SEPARATOR() external view returns (bytes32)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | Hash of the domain separator |

### WETH9

Returns the address of WETH9

```solidity title="Solidity"
function WETH9() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### allocate

Allocates liquidity into a pool

```solidity title="Solidity"
function allocate(address recipient, bytes32 poolId, address risky, address stable, uint256 delRisky, uint256 delStable, bool fromMargin, uint256 minLiquidityOut) external payable returns (uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address that receives minted ERC-1155 Primitive liquidity tokens |
| poolId | bytes32 | Id of the pool |
| risky | address | Address of the risky asset |
| stable | address | Address of the stable asset |
| delRisky | uint256 | Amount of risky tokens to allocate |
| delStable | uint256 | Amount of stable tokens to allocate |
| fromMargin | bool | True if the funds of the sender should be used |
| minLiquidityOut | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| delLiquidity | uint256 |  Amount of liquidity allocated into the pool |

### allocateCallback

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
| account | address | undefined |
| id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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
| accounts | address[] | undefined |
| ids | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### create

Creates a new pool using the specified parameters

```solidity title="Solidity"
function create(address risky, address stable, uint128 strike, uint32 sigma, uint32 maturity, uint32 gamma, uint256 riskyPerLp, uint256 delLiquidity) external payable returns (bytes32 poolId, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| risky | address | Address of the risky asset |
| stable | address | Address of the stable asset |
| strike | uint128 | Strike price of the pool to calibrate to, with the same decimals as the stable token |
| sigma | uint32 | Volatility to calibrate to as an unsigned 256-bit integer w/ precision of 1e4, 10000 = 100% |
| maturity | uint32 | Maturity timestamp of the pool, in seconds |
| gamma | uint32 | Multiplied against swap in amounts to apply fee, equal to 1 - fee %, an unsigned 32-bit integer, w/ precision of 1e4, 10000 = 100% |
| riskyPerLp | uint256 | Risky reserve per liq. with risky decimals, = 1 - N(d1), d1 = (ln(S/K)+(r*sigma^2/2))/sigma*sqrt(tau) |
| delLiquidity | uint256 | Amount of liquidity to allocate to the curve, wei value with 18 decimals of precision |

#### Returns

| Name | Type | Description |
|---|---|---|
| poolId | bytes32 |       Id of the new created pool (Keccak256 hash of the engine address, maturity, sigma and strike) |
| delRisky | uint256 |     Amount of risky tokens allocated into the pool |
| delStable | uint256 |    Amount of stable tokens allocated into the pool |

### createCallback

Triggered when creating a new pool for an Engine

```solidity title="Solidity"
function createCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to initialize risky reserve |
| delStable | uint256 | Amount of stable tokens required to initialize stable reserve |
| data | bytes | Calldata passed on create function call |

### deposit

Deposits funds into the margin of a Primitive Engine

```solidity title="Solidity"
function deposit(address recipient, address risky, address stable, uint256 delRisky, uint256 delStable) external payable
```


:::note Details
Since the PrimitiveManager contract keeps track of the margins, it                   will deposit the funds into the Primitive Engine using its own address
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address receiving the funds in their margin |
| risky | address | Address of the risky token |
| stable | address | Address of the stable token |
| delRisky | uint256 | Amount of risky token to deposit |
| delStable | uint256 | Amount of stable token to deposit |

### depositCallback

Triggered when depositing tokens to an Engine

```solidity title="Solidity"
function depositCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to deposit to risky margin balance |
| delStable | uint256 | Amount of stable tokens required to deposit to stable margin balance |
| data | bytes | Calldata passed on deposit function call |

### factory

Returns the address of the factory

```solidity title="Solidity"
function factory() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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
| account | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### margins

Returns the margin of an account for a specific Primitive Engine

```solidity title="Solidity"
function margins(address, address) external view returns (uint128 balanceRisky, uint128 balanceStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| balanceRisky | uint128 | undefined |
| balanceStable | uint128 | undefined |

### multicall

Call multiple functions in the current contract and return the data from all of them if they all succeed

```solidity title="Solidity"
function multicall(bytes[] data) external payable returns (bytes[] results)
```


:::note Details
`msg.value` should not be trusted for any method callable from Multicall
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| data | bytes[] | Encoded function data for each of the calls to make to this contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| results | bytes[] |  Results from each of the calls passed in via data |

### nonces

Returns the current nonce of an address

```solidity title="Solidity"
function nonces(address) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### permit

Grants or revokes the approval for an operator to transfer any of the owner&#39;s                  tokens using their signature

```solidity title="Solidity"
function permit(address owner, address operator, bool approved, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner |
| operator | address | Address of the operator |
| approved | bool | True if the approval should be granted, false if revoked |
| deadline | uint256 | Expiry of the signature, as a timestamp |
| v | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s` |
| r | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s` |
| s | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v` |

### positionDescriptor

Returns the address of the PositionDescriptor

```solidity title="Solidity"
function positionDescriptor() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### refundETH

Transfers the ETH balance of the contract to the caller

```solidity title="Solidity"
function refundETH() external payable
```





### remove

Removes liquidity from a pool

```solidity title="Solidity"
function remove(address engine, bytes32 poolId, uint256 delLiquidity, uint256 minRiskyOut, uint256 minStableOut) external nonpayable returns (uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| engine | address | Address of the engine |
| poolId | bytes32 | Id of the pool |
| delLiquidity | uint256 | Amount of liquidity to remove |
| minRiskyOut | uint256 | Minimum amount of risky tokens expected to be received |
| minStableOut | uint256 | Minimum amount of stable tokens expected to be received |

#### Returns

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 |     Amount of risky tokens removed from the pool |
| delStable | uint256 |    Amount of stable tokens removed from the pool |

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
| from | address | undefined |
| to | address | undefined |
| ids | uint256[] | undefined |
| amounts | uint256[] | undefined |
| data | bytes | undefined |

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
| from | address | undefined |
| to | address | undefined |
| id | uint256 | undefined |
| amount | uint256 | undefined |
| data | bytes | undefined |

### selfPermit

Permits this contract to spend a given token from `msg.sender`

```solidity title="Solidity"
function selfPermit(address token, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external payable
```


:::note Details
`owner` is always msg.sender and the `spender` is always address(this)
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the token spent |
| value | uint256 | Amount that can be spent of token |
| deadline | uint256 | A timestamp, the current blocktime must be less than or equal to this timestamp |
| v | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s` |
| r | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s` |
| s | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v` |

### selfPermitAllowed

Permits this contract to spend the sender&#39;s tokens for permit signatures that have the `allowed` parameter

```solidity title="Solidity"
function selfPermitAllowed(address token, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) external payable
```


:::note Details
`owner` is always msg.sender and the `spender` is always address(this)
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the token spent |
| nonce | uint256 | Current nonce of the owner |
| expiry | uint256 | Timestamp at which the permit is no longer valid |
| v | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s` |
| r | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s` |
| s | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v` |

### selfPermitAllowedIfNecessary

Permits this contract to spend the sender&#39;s tokens for permit signatures that have the `allowed` parameter

```solidity title="Solidity"
function selfPermitAllowedIfNecessary(address token, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) external payable
```


:::note Details
`owner` is always msg.sender and the `spender` is always address(this)                Can be used instead of #selfPermitAllowed to prevent calls from failing due to a frontrun of a call to #selfPermitAllowed
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the token spent |
| nonce | uint256 | Current nonce of the owner |
| expiry | uint256 | Timestamp at which the permit is no longer valid |
| v | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s` |
| r | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s` |
| s | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v` |

### selfPermitIfNecessary

Permits this contract to spend a given token from `msg.sender`

```solidity title="Solidity"
function selfPermitIfNecessary(address token, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external payable
```


:::note Details
`owner` is always msg.sender and the `spender` is always address(this)                  Can be used instead of #selfPermit to prevent calls from failing due to a frontrun of a call to #selfPermit
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the token spent |
| value | uint256 | Amount that can be spent of token |
| deadline | uint256 | A timestamp, the current blocktime must be less than or equal to this timestamp |
| v | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s` |
| r | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s` |
| s | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v` |

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
| operator | address | undefined |
| approved | bool | undefined |

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
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### swap



```solidity title="Solidity"
function swap(ISwapManager.SwapParams params) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| params | ISwapManager.SwapParams | undefined |

### swapCallback

Triggered when swapping tokens in an Engine

```solidity title="Solidity"
function swapCallback(uint256 delRisky, uint256 delStable, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| delRisky | uint256 | Amount of risky tokens required to pay the swap with |
| delStable | uint256 | Amount of stable tokens required to pay the swap with |
| data | bytes | Calldata passed on swap function call |

### sweepToken

Transfers the tokens in the contract to a recipient

```solidity title="Solidity"
function sweepToken(address token, uint256 amountMin, address recipient) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the token to sweep |
| amountMin | uint256 | Minimum amount to transfer |
| recipient | address | Recipient of the tokens |

### unwrap

Unwraps WETH to ETH and transfers to a recipient

```solidity title="Solidity"
function unwrap(uint256 amountMin, address recipient) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| amountMin | uint256 | Minimum amount to unwrap |
| recipient | address | Address of the recipient |

### uri

Returns the metadata of a token

```solidity title="Solidity"
function uri(uint256 tokenId) external view returns (string)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | Token id to look for (same as pool id) |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | Metadata of the token as a string |

### withdraw

Withdraws funds from the margin of a Primitive Engine

```solidity title="Solidity"
function withdraw(address recipient, address engine, uint256 delRisky, uint256 delStable) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient | address | Address receiving the funds in their wallet |
| engine | address | Primitive Engine to withdraw from |
| delRisky | uint256 | Amount of risky token to withdraw |
| delStable | uint256 | Amount of stable token to withdraw |

### wrap

Wraps ETH into WETH and transfers to the msg.sender

```solidity title="Solidity"
function wrap(uint256 value) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| value | uint256 | Amount of ETH to wrap |



## Events

### Allocate

Emitted when liquidity is allocated

```solidity title="Solidity"
event Allocate(address payer, address indexed recipient, address indexed engine, bytes32 indexed poolId, uint256 delLiquidity, uint256 delRisky, uint256 delStable, bool fromMargin)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer  | address | undefined |
| recipient `indexed` | address | undefined |
| engine `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| delLiquidity  | uint256 | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |
| fromMargin  | bool | undefined |

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

### Create

Emitted when a new pool is created

```solidity title="Solidity"
event Create(address indexed payer, address indexed engine, bytes32 indexed poolId, uint128 strike, uint32 sigma, uint32 maturity, uint32 gamma, uint256 delLiquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| engine `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| strike  | uint128 | undefined |
| sigma  | uint32 | undefined |
| maturity  | uint32 | undefined |
| gamma  | uint32 | undefined |
| delLiquidity  | uint256 | undefined |

### Deposit

Emitted when funds are deposited

```solidity title="Solidity"
event Deposit(address indexed payer, address indexed recipient, address indexed engine, address risky, address stable, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| engine `indexed` | address | undefined |
| risky  | address | undefined |
| stable  | address | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |

### Remove

Emitted when liquidity is removed

```solidity title="Solidity"
event Remove(address indexed payer, address indexed engine, bytes32 indexed poolId, uint256 delLiquidity, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| engine `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| delLiquidity  | uint256 | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |

### Swap

Emitted when a swap occurs

```solidity title="Solidity"
event Swap(address indexed payer, address recipient, address indexed engine, bytes32 indexed poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut, bool fromMargin, bool toMargin)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| recipient  | address | undefined |
| engine `indexed` | address | undefined |
| poolId `indexed` | bytes32 | undefined |
| riskyForStable  | bool | undefined |
| deltaIn  | uint256 | undefined |
| deltaOut  | uint256 | undefined |
| fromMargin  | bool | undefined |
| toMargin  | bool | undefined |

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

### Withdraw

Emitted when funds are withdrawn

```solidity title="Solidity"
event Withdraw(address indexed payer, address indexed recipient, address indexed engine, address risky, address stable, uint256 delRisky, uint256 delStable)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| payer `indexed` | address | undefined |
| recipient `indexed` | address | undefined |
| engine `indexed` | address | undefined |
| risky  | address | undefined |
| stable  | address | undefined |
| delRisky  | uint256 | undefined |
| delStable  | uint256 | undefined |



## Errors

### BalanceTooLowError

Thrown when the amount required is above balance

```solidity title="Solidity"
error BalanceTooLowError(uint256 balance, uint256 requiredAmount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| balance | uint256 | Actual ETH or token balance of the contract |
| requiredAmount | uint256 | ETH or token amount required by the user |

### DeadlineReachedError

Thrown when the deadline is reached

```solidity title="Solidity"
error DeadlineReachedError()
```





### EngineNotDeployedError

Thrown when the target Engine is not deployed

```solidity title="Solidity"
error EngineNotDeployedError()
```





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





### MinLiquidityOutError

Thrown when the received liquidity is lower than the expected

```solidity title="Solidity"
error MinLiquidityOutError()
```





### MinRemoveOutError

Thrown when the received risky / stable amounts are lower than the expected

```solidity title="Solidity"
error MinRemoveOutError()
```





### NotEngineError

Thrown when the sender is not a Primitive Engine contract

```solidity title="Solidity"
error NotEngineError()
```





### OnlyWETHError

Thrown when the sender is not WETH

```solidity title="Solidity"
error OnlyWETHError()
```





### SigExpiredError

Thrown when the signature has expired

```solidity title="Solidity"
error SigExpiredError()
```





### TransferError

Thrown when a transfer reverts

```solidity title="Solidity"
error TransferError()
```





### WrongConstructorParametersError

Thrown when the constructor parameters are wrong

```solidity title="Solidity"
error WrongConstructorParametersError()
```





### ZeroDelError

Thrown when trying to deposit or withdraw 0 risky and stable

```solidity title="Solidity"
error ZeroDelError()
```





### ZeroLiquidityError

Thrown when trying to add or remove zero liquidity

```solidity title="Solidity"
error ZeroLiquidityError()
```






