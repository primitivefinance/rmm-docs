---
description: Technical explanation of margin related functions.
---

# Technical: Internal Balances

### Margin Data Struct

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/main/contracts/libraries/Margin.sol)

```go
    // Every margin position in an Engine has this data structure, optimized for 1 storage slot.
    struct Data {
        uint128 balanceRisky; // Balance of the risky token, aka underlying asset
        uint128 balanceStable; // Balance of the stable token, aka "quote" asset
    }
```

### Margin Engine Functions

#### Deposit

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/0fdb11272fcb423b32be5a260f73e36977c43c86/contracts/PrimitiveEngine.sol#L149-L160)

```javascript
    /// @notice             Adds risky and/or stable tokens to a `recipient`'s internal balance account
    /// @param  recipient   Recipient margin account of the deposited tokens
    /// @param  delRisky    Amount of risky tokens to deposit
    /// @param  delStable   Amount of stable tokens to deposit
    /// @param  data        Arbitrary data that is passed to the depositCallback function
    function deposit(
        address recipient,
        uint256 delRisky,
        uint256 delStable,
        bytes calldata data
    ) external;
```

Calling the deposit function will increase the internal balance of `recipient` by the amount of risky `delRisky` and amount of stable `delStable`. This function must be called by another smart contract which implements the `IPrimitiveDepositCallback.depositCallback(delRisky, delStable, data)` function.

```javascript
/// @title  Primitive Deposit Callback
/// @author Primitive
interface IPrimitiveDepositCallback {
    /// @notice              Triggered when depositing tokens to an Engine
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
    /// @inheritdoc IPrimitiveEngineActions
    function deposit(
        address recipient,
        uint256 delRisky,
        uint256 delStable,
        bytes calldata data
    ) external override lock {
        if (delRisky == 0 && delStable == 0) revert ZeroDeltasError();
        margins[recipient].deposit(delRisky, delStable); // state update

        uint256 balRisky;
        uint256 balStable;
        if (delRisky > 0) balRisky = balanceRisky();
        if (delStable > 0) balStable = balanceStable();
        IPrimitiveDepositCallback(msg.sender).depositCallback(delRisky, delStable, data); // agnostic payment
        if (delRisky > 0) checkRiskyBalance(balRisky + delRisky);
        if (delStable > 0) checkStableBalance(balStable + delStable);
        emit Deposit(msg.sender, recipient, delRisky, delStable);
    }
```



The process of the deposit function is as follows:

1. Increase state balance of margin of `recipient`.
2. Store `risky` and `stable` token balances in memory.
3. Trigger `depositCallback` function.
4. Check the current `risky` and `stable` balance, and compare it against the balance in memory.
5. If the check failed, revert with `BalanceError`.
6. Emit the Deposit event.

#### Withdraw

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/505326e95d49c4a07f09a664a2f8374c044af41b/contracts/PrimitiveEngine.sol#L217-L228)

```javascript
function withdraw(uint256 delRisky, uint256 delStable) external;
```

Withdraw can be called by an Externally Owned Account, or a smart contract. It will fetch the `margin` account of `msg.sender`, then reduce the balance of their account, and finally it will transfer out the requested tokens to `msg.sender` and emit the `Withdraw` event.
