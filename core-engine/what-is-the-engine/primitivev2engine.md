---
description: Core smart contract of the Primitive protocol
---

# PrimitiveV2Engine

## Simple Architecture

### Underlying Token, Strike Token, Strike Price, Volatility, and Maturity

The protocol has many parameters to choose from when creating option payoffs: strike price, volatilities, maturities, and tokens. The structure to support these different parameters in a permissionless way is implemented in two contracts: Factory and Engine.

### Choose your tokens

First, two tokens must be chosen to build a curve from. These tokens should be a risky and a stable, but they can be anything. The risky is the `underlying` asset of the option, while the `stable` is the quote token, i.e. the strike is paid in it.

A token pair remains a token pair throughout its life, and that is why these parameters are immutable variables in the Engine contract. The Factory contract is used to deploy new token pairs, Engines.

### Choose Curve Parameters

The next variables, strike, volatility, and maturity, are _curve parameters_, and they are chosen when a new pool is created. New pools can be created in the Engine contract, with no limit to which parameters are used. On pool creation, an initial amount of liquidity must be minted which requires the `msg.sender` to pay the Engine's risky and stable tokens as initially provided liquidity.

## What can I do to interact with the curves?

### Provide Liquidity to the Curve

Once a curve is available, its `poolId` is a hash of the Factory address, and its curve parameters. Tokens can be supplied to the curve and in exchange a `position` is created. 

### Positions

Instead of liquidity being directly tokenized, it exists as state in the Engine contract. Each position is controlled by the `owner`, which is a parameter passed into the liquidity provision function.

{% code title="Position.sol" %}
```text
struct Data {
        uint128 float;
        uint128 liquidity;
        uint128 debt;
    }
```
{% endcode %}

### Borrowing Positions

Liquidity positions can be borrowed and automatically converted into their underlying tokens \(remove all liquidity\), allowing users to get call option payoffs. Users who borrow will be converting their borrowed liquidity into the risky token, effectively shorting the LP. For each 1 unit of liquidity borrowed, there must be 1 unit of risky tokens stored in the Engine smart contract. In many cases, selling the LP for the risky token will not yield a full 1 unit of risky, therefore the user must pay the remainder as a deposit.

To exit the position, the user must pay back the debt of 1 unit of LP share, using the 1 unit of risky token, and their own tokens if any remaining tokens are needed.

### Swapping Between Tokens

The curve defines a trading rule which allows swaps between the risky and stable token. An `amountIn` of token must be specified, along with a direction of swapping tokens. The low-level swap has one critical check, in which the invariant is compared pre and post the swap. If the invariant has not stayed in the same, or grown after the swap, then the swap will fail.



### Source Code

