---
description: Pool and Engine Creation
---

# Creating New Pools

Two types of creation occurs in the Primitive protocol: new pairs, and new pools.

### Token Pair Contract: Engine

Whenever a new token pair wants to be created, a new Engine contract must be deployed from the Primitive V2 Factory. The Engine allows option pools to be created for that token pair.

### Option Pools

Each Engine has the ability to create new pools, which define the parameters of the covered call option to replicate. Creating a new pool takes a `strike`, `sigma` \(implied volatility\), and `maturity` as its parameters. These get stored in the Engine contract and are tied to a `poolId`, the hash of the Primitive V2 Factory address and the parameters. 

The amount of initial liquidity must also be specified and paid for in the Engine's two tokens. For this reason, only a smart contract is capable of calling the low-level `create` function directly, because the `create` call will call back to the `msg.sender` asking for tokens.

### Why create new pools?

Anyone can create new pools, this makes it good opportunity for anyone to get any covered call payoff they desire. If a pool with desired parameters \(e.g. a higher strike price\) is not available, a new pool can be created and provided liquidity to. However, the caveat is that if the pool is not large enough, then the rebalancing may not occur as often. The effect of this is potentially a failed replication, where the value of the portfolio did not track the theoretical value of the covered call.

### How much do new pools cost to create?

The estimated gas cost of creating a new pool is within the 200k-300k gas range.

### I want to create a pool! How can I?

Visit our easy tool to create any pools with any token pairs: \[here\]

