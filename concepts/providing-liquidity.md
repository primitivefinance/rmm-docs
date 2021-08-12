---
description: Overview of Liquidity provision and Liquidity positions
---

# Providing Liquidity

Primitive V2 Pools are composed of the risky and stable tokens which can be provided as liquidity. Each curve in the pool is a covered call, in which the parameters `strike` `volatility` and `maturity` all affect the payoff. In the abstract, each curve can be thought of a tick in volatility space.

Pools can be deployed permissionlessly for any token pair through the Primitive V2 Factory contract.

### Why provide liquidity? Do I earn rewards?

Supplying tokens to the chosen covered call option pool will give you a position in a portfolio that tracks the value of the covered call, such that when liquidity is redeemed it will be valued at the value of the covered call its tracking. Covered calls naturally accrue value \(called _theta_\) from premiums paid by option buyers, and swap fees generated from swaps between the two underlying pool tokens.

### Are there liquidity mining incentives?

The protocol does not have liquidity mining incentives.

### What happens when tokens are provided as liquidity?

Providing liquidity will increase the reserves of both tokens, while also increasing the total supply of liquidity. This liquidity is not tokenized, its stored as state in the contract that gives the owner of the provided tokens the _right_ to remove their liquidity on a pro-rata basis.

### Can liquidity be removed at any time?



