---
description: Pool and Engine Creation
---

# Creating New Pools

Two types of creation occurs in the Primitive Protocol for RMM-01: new token pairs (Engines), and new pools (Curves).

### Primitive Engine <\> Token Pair

Whenever a new token pair wants to be created, a new Primitive Engine contract must be deployed from the Primitive Factory. The Engine allows pools to be created for that token pair.

### Pool <\> AMM Curve

Each Engine has the ability to create new pools, which use the parameters of a covered call to replicate its payoff. Creating a new pool uses the parameters `strike`, `sigma` (implied volatility), and `maturity` as its arguments. These get stored in the Engine contract and are accessed using a  `poolId`, the hash of the Engine address and the arguments above. 

The amount of initial liquidity must also be specified and paid for in the Engine's two tokens. For this reason, only a smart contract is capable of calling the low-level `create` function directly, because the `create` call will call back to the `msg.sender` asking for tokens.

#### Important

The most critical argument during pool creation is `riskyPerLp`. This defines the initial risky token reserves of the pool, and thus determines an implied spot price. If the spot price of the newly created pool is less than the market price, the pool will be arbitraged to match the reference market price. This can be a loss scenario for the initial pool creator.

### Why create new pools?

Anyone can create new pools, this makes it good opportunity for anyone to get any covered call payoff they desire. If a pool with desired parameters (e.g. a higher strike price) is not available, a new pool can be created and provided liquidity to. 

### Whats the catch?

However, the caveat is that if the pool is not large enough, then the rebalancing may not occur as often. The effect of this is potentially a failed replication, where the value of the portfolio did not track the theoretical value of the covered call. In this case, no trading occurs, and thus no swap fees are generated for the liquidity providers.

### How much do new pools cost to create?

The estimated gas cost of creating a new pool is within the 200k-300k gas range.
