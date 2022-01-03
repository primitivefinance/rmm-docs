---
description: Action functions for the Primitive Engine contract

---

# IPrimitiveEngineActions.sol









## Methods


### allocate


Allocates risky and stable tokens to a specific curve with `poolId`


```solidity title="Solidity"
function allocate(bytes32 poolId, address recipient, uint256 delRisky, uint256 delStable, bool fromMargin, bytes data) external nonpayable returns (uint256 delLiquidity)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| poolId | bytes32 | Pool Identifier


| recipient | address | Address to give the allocated liquidity to


| delRisky | uint256 | Amount of risky tokens to add


| delStable | uint256 | Amount of stable tokens to add


| fromMargin | bool | Whether the `msg.sender` pays with their margin balance, or must send tokens


| data | bytes | Arbitrary data that is passed to the allocateCallback function





#### Returns

| Name | Type | Description |
|---|---|---|

| delLiquidity | uint256 | Amount of liquidity given to `recipient`





### create


Initializes a curve with parameters in the `settings` storage mapping in the Engine


```solidity title="Solidity"
function create(uint128 strike, uint32 sigma, uint32 maturity, uint32 gamma, uint256 riskyPerLp, uint256 delLiquidity, bytes data) external nonpayable returns (bytes32 poolId, uint256 delRisky, uint256 delStable)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| strike | uint128 | Strike price of the pool to calibrate to, with the same decimals as the stable token


| sigma | uint32 | Implied Volatility to calibrate to as an unsigned 32-bit integer w/ precision of 1e4, 10000 = 100%


| maturity | uint32 | Maturity timestamp of the pool, in seconds


| gamma | uint32 | Multiplied against swap in amounts to apply fee, equal to 1 - fee %, an unsigned 32-bit integer, w/ precision of 1e4, 10000 = 100%


| riskyPerLp | uint256 | Risky reserve per liq. with risky decimals, = 1 - N(d1), d1 = (ln(S/K)+(r*sigma^2/2))/sigma*sqrt(tau)


| delLiquidity | uint256 | Amount of liquidity to allocate to the curve, wei value with 18 decimals of precision


| data | bytes | Arbitrary data that is passed to the createCallback function





#### Returns

| Name | Type | Description |
|---|---|---|

| poolId | bytes32 |      Pool Identifier


| delRisky | uint256 |    Total amount of risky tokens provided to reserves


| delStable | uint256 |   Total amount of stable tokens provided to reserves





### deposit


Adds risky and/or stable tokens to a `recipient`&#39;s internal balance account


```solidity title="Solidity"
function deposit(address recipient, uint256 delRisky, uint256 delStable, bytes data) external nonpayable

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| recipient | address | Recipient margin account of the deposited tokens


| delRisky | uint256 | Amount of risky tokens to deposit


| delStable | uint256 | Amount of stable tokens to deposit


| data | bytes | Arbitrary data that is passed to the depositCallback function






### remove


Unallocates risky and stable tokens from a specific curve with `poolId`


```solidity title="Solidity"
function remove(bytes32 poolId, uint256 delLiquidity) external nonpayable returns (uint256 delRisky, uint256 delStable)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| poolId | bytes32 | Pool Identifier


| delLiquidity | uint256 | Amount of liquidity to remove





#### Returns

| Name | Type | Description |
|---|---|---|

| delRisky | uint256 |      Amount of risky tokens received from removed liquidity


| delStable | uint256 |     Amount of stable tokens received from removed liquidity





### swap


Swaps between `risky` and `stable` tokens


```solidity title="Solidity"
function swap(address recipient, bytes32 poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut, bool fromMargin, bool toMargin, bytes data) external nonpayable

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| recipient | address | Address that receives output token `deltaOut` amount


| poolId | bytes32 | Pool Identifier


| riskyForStable | bool | If true, swap risky to stable, else swap stable to risky


| deltaIn | uint256 | Amount of tokens to swap in


| deltaOut | uint256 | Amount of tokens to swap out


| fromMargin | bool | Whether the `msg.sender` uses their margin balance, or must send tokens


| toMargin | bool | Whether the `deltaOut` amount is transferred or deposited into margin


| data | bytes | Arbitrary data that is passed to the swapCallback function






### updateLastTimestamp


Updates the time until expiry of the pool by setting its last timestamp value


```solidity title="Solidity"
function updateLastTimestamp(bytes32 poolId) external nonpayable returns (uint32 lastTimestamp)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| poolId | bytes32 | Pool Identifier





#### Returns

| Name | Type | Description |
|---|---|---|

| lastTimestamp | uint32 | Timestamp loaded into the state of the pool&#39;s Calibration.lastTimestamp





### withdraw


Removes risky and/or stable tokens from a `msg.sender`&#39;s internal balance account


```solidity title="Solidity"
function withdraw(address recipient, uint256 delRisky, uint256 delStable) external nonpayable

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| recipient | address | Address that tokens are transferred to


| delRisky | uint256 | Amount of risky tokens to withdraw


| delStable | uint256 | Amount of stable tokens to withdraw












