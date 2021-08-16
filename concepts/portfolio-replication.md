---
description: Conceptual overview of RMMs
---

# Replicating Market Maker

**Primitive V2 is a Replicating Market Maker:** a two token AMM that replicates covered call payoffs. Anyone who supplies assets to a Primitive V2 pool will own a position with the right to claim the underlying tokens, which track the value of the replicated covered call.

## Portfolios

A portfolio is a composition of multiple assets packaged into a single position. For example, Uniswap protocol liquidity positions \(LPs\) are a portfolio of two assets with equal weights of 50% . Balancer protocol LPs can have multiple tokens, with different weight denominations \(% value of the portfolio\).

## Value of Portfolios

The value of an Uniswap LP is dependent on the value of its underlying assets and their performance over time. When the value of one asset with respect to the other asset changes, the portfolio must be rebalanced such that the composition of value is equally 50%/50% in each asset. This reblancing occurs by actors called "arbitrageurs" who put one asset in and take another asset out, updating the pool composition to equal 50%/50%.

## Rebalancing

When the rebalance occurs, whoever made the trade will have paid a trading fee. This trading fee is earned by all the liquidity providers of the Uniswap pool. Therefore, as more trades \(rebalancing\) occurs, their portfolio value will grow over time.

## Replication

Portfolio Replication is when a portfolio _targets a value_, using a composition of multiple assets. This targeting should occur in infinitesimal timesteps, where the portfolio value matches the theoretical value it tracks at every point of time.

## Why is portfolio replication used?

Replication is commonly used to construct perfect hedges, to counteract the exposure of other positions.

## Why use AMMs?

AMMs are powerful underlying portfolio technology because they are automatically rebalanced through trades. In addition, AMM positions are instantly convertible into the underlying tokens, there is no custody or credit risk, and they are often used as building blocks in other protocols. Fundamentally, AMMs represent a common standard familiar to users, developers, and

## I'd like to learn more

To learn more about how AMMs and portfolio replication go together, check out the research by Guillermo, Alex, and Tarun:

{% page-ref page="advanced/research.md" %}

