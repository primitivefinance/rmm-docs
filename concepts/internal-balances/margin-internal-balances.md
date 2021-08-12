---
description: Technical explanation of margin related functions.
---

# Technical: Internal Balances

### Margin Data Struct

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/main/contracts/libraries/Margin.sol)

```go
// Every margin position in an Engine has this data structure, optimized for 1 storage slot.
    struct Data {
        uint128 balanceRisky; // Balance of the RISKY, aka underlying asset.
        uint128 balanceStable; // Balance of the STABLE, aka "quote" asset, a stablecoin.
    }
```

### Margin Engine Functions

#### Deposit

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/0fdb11272fcb423b32be5a260f73e36977c43c86/contracts/PrimitiveEngine.sol#L149-L160)

```javascript
function deposit(
        address owner,
        uint256 delRisky,
        uint256 delStable,
        bytes calldata data
 ) external;
```

Calling the deposit function will increase the internal balance of `owner` by the amount of risky `delRisky` and amount of stable `delStable`. This function must be called by another smart contract which implements the `IPrimitiveMarginCallback.depositCallback(delRisky, delStable)` function.

```javascript
interface IPrimitiveMarginCallback {
    /// @notice Triggered when depositing tokens to an Engine
    /// @param  delRisky     Amount of risky tokens required to deposit to risky margin balance
    /// @param  delStable    Amount of stable tokens required to deposit to stable margin balance
    /// @param  data         Calldata passed on deposit function call
    function depositCallback(
        uint256 delRisky,
        uint256 delStable,
        bytes calldata data
    ) external;
}
```

The deposit function code:

```javascript
function deposit(
        address owner,
        uint256 delRisky,
        uint256 delStable,
        bytes calldata data
    ) external override lock {
        uint256 balRisky = balanceRisky();
        uint256 balStable = balanceStable();
        IPrimitiveMarginCallback(msg.sender).depositCallback(delRisky, delStable, data); // receive tokens
        if (delRisky > 0) require(balanceRisky() >= balRisky + delRisky, "Not enough risky");
        if (delStable > 0) require(balanceStable() >= balStable + delStable, "Not enough stable");

        Margin.Data storage margin = margins[owner];
        margin.deposit(delRisky, delStable); // adds to risky and/or stable token balances
        emit Deposited(msg.sender, owner, delRisky, delStable);
    }
```



The process of the deposit function is as follows:

1. Store `risky` and `stable` token balances in memory.
2. Trigger `depositCallback` function.
3. Check the current `risky` and `stable` balance, and compare it against the balance in memory.
4. If the check passed, increase state balance of margin of `owner`.
5. Emit the Deposited event.

#### Withdraw

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/6b54e1e203ab6c4dd4d3e6def6eb971e897bc4af/contracts/PrimitiveEngine.sol#L169-L174)

```javascript
function withdraw(uint256 delRisky, uint256 delStable) external;
```

Withdraw can be called by an Externally Owned Account, or a smart contract. It will fetch the `margin` account of `msg.sender`, then reduce the balance of their account, and finally it will transfer out the requested tokens to `msg.sender` and emit the `Withdrawn` event.

