---
title: Creating Pairs and Pools
description: Frequently asked questions about creating new pools
---

# Creating Pairs and Pools

Two types of creation occur in RMM Protocol: new token pairs (Engines), and new pools (Curves).

### Who can create new token pairs and pools?

*Anyone* can deploy new pairs through the factory, or create new pools. RMM Protocol is completely permissionless.

### How are new token pairs created?

To create a token pair contract to create pools from, a new Primitive Engine contract must be deployed from the Primitive Factory. The Engine allows pools to be created for that token pair.

### How are new pools created?

Each Engine has the ability to create new pools, which use a custom trading function to replicate the payoff of a covered call. 

Creating a new pool uses the parameters `strike`, `sigma` (implied volatility), `maturity` , and `gamma` as its arguments. These get stored in the Engine contract and are accessed using a  `poolId`, the hash of the Engine address and the arguments above.&#x20;

The amount of initial liquidity must also be specified and paid for in the Engine's two tokens. For this reason, only a smart contract is capable of calling the low-level `create` function directly, because the `create` call will call back to the `msg.sender` asking for tokens.

### What are the risks to creating new pools?

A pool creator is responsible for specifying the amount of underlying token reserves. The pool will use the specified value to determine the other side of the pool, therefore implying a *spot* price of the underlying token. If this implied spot price is different from the actual spot price of the asset (e.g. on another DEX), then the pool will be arbitraged immediately. Depending on the discrepency, the value of liquidity could be reduced after creating the pool.

### Why create new pools?

Anyone can create new pools, this makes it good opportunity for anyone to get any covered call payoff they desire. If a pool with desired parameters (e.g. a higher strike price) is not available, a new pool can be created and liquidity can be provided to it.

### Whats the catch, is there a case in which a pool should not be used?

However, the caveat is that if the pool's liquidity is not large enough, then the rebalancing may not occur as often. The effect of this is potentially a failed replication, where the value of the portfolio did not track the theoretical value of the covered call. This means that no trading occurs, and thus no swap fees are generated for the liquidity providers.

### How much do new pools cost to create?

The estimated gas cost of creating a new pool is within the 200k-300k gas range.