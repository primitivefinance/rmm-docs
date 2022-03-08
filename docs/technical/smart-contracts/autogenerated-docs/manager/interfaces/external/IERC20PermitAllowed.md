---
description: Interface for permit
---

# IERC20PermitAllowed.sol
> [Read code on GitHub](https://github.com/primitivefinance/rmm-manager/tree/develop/contracts/interfaces/external/IERC20PermitAllowed.sol)

Interface used by DAI/CHAI for permit



## Methods

### permit

Approve the spender to spend some tokens via the holder signature

```solidity title="Solidity"
function permit(address holder, address spender, uint256 nonce, uint256 expiry, bool allowed, uint8 v, bytes32 r, bytes32 s) external nonpayable
```


:::note Details
This is the permit interface used by DAI and CHAI
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| holder | address | Address of the token holder, the token owner |
| spender | address | Address of the token spender |
| nonce | uint256 | Holder&#39;s nonce, increases at each call to permit |
| expiry | uint256 | Timestamp at which the permit is no longer valid |
| allowed | bool | Boolean that sets approval amount, true for type(uint256).max and false for 0 |
| v | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s` |
| r | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s` |
| s | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v` |




