---
description: Feature of Primitive RMM-01
---

# Internal Balances

### What are internal balances?

Tokens can be pre-emptively deposited in the Primitive Engine smart contract to save an additional minimum of 35k gas per transaction by eliminating this extra `transfer` operation.

When a transaction requires a payment of a token, it will often pull the tokens from the payer into the smart contract. This is perfectly acceptable for one, two, or many transactions, since each transfer is around 35k gas. However, the nature of expiring pools will cause continued rebalancing to fresh pools, effectively an on-going gas cost. Using the internal balances, most of these token transfer gas costs can be avoided, making rebalancing very cheap.

Additionally, arbitrageurs can make use of the internal balances, saving gas and tightening the window of arbitrage. With more profitable arbitrageurs, a successful replication is more likely to occur.

### Source code

[PrimitiveEngine.sol](https://github.com/primitivefinance/primitive-v2-core/blob/main/contracts/PrimitiveEngine.sol)
