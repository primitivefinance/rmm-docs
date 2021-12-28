---
description: Multicall contract
---

# Multicall.sol

Enables calling multiple methods in a single call to the contract



## Methods

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
| data | bytes[] | Encoded function data for each of the calls to make to this contract

#### Returns

| Name | Type | Description |
|---|---|---|
| results | bytes[] |  Results from each of the calls passed in via data
