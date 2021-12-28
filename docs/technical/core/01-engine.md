---
description: Core smart contract of the Primitive protocol
---

# PrimitiveEngine.sol

## How is the Engine Used?

The Engine is a low-level contract with the primary tasks of:

* Create new pools, "curves".
* Allow liquidity to be allocated and removed from the pools.
* Accept deposits into an internal balance to optimize gas.
* Allow swaps between the two tokens defined in the Engine, using the trading function.

### Underlying Token, Strike Token, Strike Price, Volatility, Maturity, and Swap Fee

The protocol has many parameters to choose from when creating RMM-01 pools: strike price, volatilities, maturities, swap fees, and tokens. The structure to support these different parameters in a permissionless way is implemented in two contracts: the Factory and Engine.

### Choose your tokens

First, two tokens must be chosen to build a curve from. These tokens should be a risky and a stable, but they can be anything. The `risky` is the `underlying` token, while the `stable` is the `quote` token, i.e. the strike is paid in it.

A token pair remains a token pair throughout its life, and that is why these addresses are immutable variables in the Engine contract. The Factory contract is used to deploy new Engines for different token pairs.

### Choose Pool Parameters

The next variables, strike, volatility, maturity, and gamma, are _curve parameters, _called a `Calibration`, and they are chosen when a new pool is created. New pools can be created in the Engine contract, with reasonable limits to which parameters are used. On pool creation, an initial amount of liquidity must be minted which requires the `msg.sender` to pay the Engine's risky and stable tokens as the first provided liquidity.

## What can I do to interact with the curves?

### Allocate Liquidity to the Curve

Once a curve is available, its `poolId` is a hash of the Engine address, and its curve parameters. Tokens can be supplied to the curve and in exchange a `liquidity position` is created. Liquidity scales linearly with the units of replication. When the pool is initially created, it is made such that `delLiquidity` units of liquidity corresponds to a `delLiquidity` units of replication (e.g. 1 `delLiquidity` = 1 covered call payoff).&#x20;

Therefore, adding liquidity multiplies that by a linear amount, so providing two liquidity is replicating two covered call payoffs, etc...

### Liquidity Position

Instead of liquidity being directly tokenized, it exists as state in the Engine contract. Each liquidity position is controlled by a `msg.sender` address.

```
mapping(address => mapping(bytes32 => uint256)) public override liquidity;
```

### Swapping Between Tokens

The curve defines a trading rule which allows swaps between the risky and stable token. Both the amount in and amount out to swap are arguments, along with a direction of swapping tokens. The low-level swap has one critical check, in which the invariant is compared pre and post the swap. If the invariant has not stayed in the same, or grown when compared immediately before and after the swap, then the swap will fail.

## Protocol Actors

### Periphery Smart Contract: Entry point for Users

A high-level smart contract primarily used by end-users.

* Deposits tokens into the internal balance of the Engine with `deposit()`, with the expectation to use them for payments in the future.
* Mints new liquidity positions from the Engine with `allocate()`.
* Uses the Engine to swap between tokens with `swap()`.

### Arbitrageur

* Exclusively uses `swap()` to receive output tokens that are valued more than the input tokens when compared to a reference market price.
* Takes action for profit, net of swap and gas fees.
* Pays a swap fee to liquidity providers.

### Keeper

* Uses the `swap()` function to update the time until expiry of the curve payoff, to make sure the curve is updated on a regular cadence.
* Similar to Arbitrageur, but will take action even at a loss.



### Source Code

[https://github.com/primitivefinance/primitive-v2-core/blob/main/contracts/PrimitiveEngine.sol](https://github.com/primitivefinance/primitive-v2-core/blob/main/contracts/PrimitiveEngine.sol)
