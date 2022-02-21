---
description: Conceptual overview of RMMs
---

# Replicating Market Maker

#### Primitive built the Replicating Market Maker ("RMM"): an AMM whose portfolio value matches a target payoff.

With the launch of Primitive's first RMM, "RMM-01", any user can provide liquidity to get a liquidity token with a payoff matching a covered call.&#x20;

The RMM uses a trading rule between two assets, such that the optimal trade is always rebalancing the liquidity position to match a covered call payoff. This allows swaps between the pair, like any other AMM.

## Automated Market Makers

### What is an AMM?

An Automated Market Maker, "AMM", is a trading rule that governs how two or more assets are exchanged for each other. In the context of DeFi, this rule is "automated" because it's enforced as immutable smart contract code on the Ethereum blockchain.

### How do AMMs work?

An AMM trading rule is an equation that defines a relationship between the reserves of two or more assets in the smart contract. Swaps from one asset to the other are allowed if the trading rule still holds after the desired swap is accounted for in the reserves.&#x20;

### Portfolios

A portfolio is a composition of multiple assets packaged into a single position. For example, Uniswap protocol liquidity positions (LPs) are a portfolio of two assets with equal weights of 50%. Balancer protocol LPs can have multiple tokens, with different weight denominations (% value of the portfolio).

### Value of Portfolios

The value of an Uniswap LP is dependent on the value of its underlying assets and their performance over time. When the value of one asset with respect to the other asset changes, the portfolio must be rebalanced such that the composition of value is equally 50%/50% in each asset. This rebalancing occurs by external actors called "arbitrageurs" who put one asset in and take another asset out, as to maintain the pool composition to equal 50%/50% value.

### Rebalancing

When the rebalance occurs, whoever made the trade will have paid a trading fee. This trading fee is earned by all the liquidity providers of the pool. Therefore, as more trades (rebalancing) occurs, their portfolio value will grow over time. Different fees are charged in the different AMM protocols. RMM-01 has a static 0.15% fee for all swaps.

## Replication

> In [mathematical finance](https://en.wikipedia.org/wiki/Mathematical\_finance), a **replicating portfolio** for a given asset or series of cash flows is a [portfolio](https://en.wikipedia.org/wiki/Portfolio\_\(finance\)) of assets with the same properties (especially cash flows). This is meant in two distinct senses: **static replication**, where the portfolio has the same cash flows as the reference asset (and no changes need to be made to maintain this), and **dynamic replication**, where the portfolio does not have the same cash flows, but has the same "[Greeks](https://en.wikipedia.org/wiki/Greeks\_\(finance\))" as the reference asset, meaning that for small (properly, [infinitesimal](https://en.wikipedia.org/wiki/Infinitesimal)) changes to underlying market parameters, the price of the asset and the price of the portfolio change in the same way. Dynamic replication requires continual adjustment, as the asset and portfolio are only assumed to behave similarly at a single point (mathematically, their partial derivatives are equal at a single point).
>
> * [https://en.wikipedia.org/wiki/Replicating\_portfolio](https://en.wikipedia.org/wiki/Replicating\_portfolio)

### Replicating Market Makers

An RMM uses a specialized rule such that the portfolio is always being rebalanced in a way that it matches a desired payoff. **TL:DR:** Arbitrageurs only make a profit when they move the portfolio closer to the desired payoff.

### What payoffs does the Primitive RMM have?

The first payoff, implemented in RMM-01, is a covered call: a portfolio composed of 1 unit of underlying asset (like Ether) at `maturity` if the price of the asset is below a `strike price`, or composed of `strike price` units of the stable asset (like USDC) if the price of the asset is above the `strike price`.

![Covered Call Payoff Graph. Investopedia.com.](/img/image.png)

### Why use an RMM?

An RMM can be used to create complex hedges against various risks and exposures, like options or other liquidity positions. The advantage of this approach to replication is it allows users to passively hold complex positions, without the need of active rebalancing. The Primitive RMM allows covered call pools to be created with several different parameters, enabling more customized hedges. The caveat: if there are no arbitrageurs, the payoff won't match. For this reason, smaller size hedges may be better off contributing to a larger pool, related. Larger size hedges do have the luxury of creating what they want, as long as the size of the pool is large enough to motivate arbitrageurs.

### Why is portfolio replication used?

Replication is commonly used to construct hedges, to counteract the exposure of other positions.&#x20;

### Why use AMMs?

In a compute constrained environment, like Ethereum, high-touch systems like order-books become increasingly costly to maintain. AMMs excel in an environment like Ethereum because they imply where orders sit and at what price, through the use of a simple mathematical trading rule.

In addition, AMM positions are instantly convertible into the underlying tokens, there is no custody or credit risk, and they are often used as building blocks in other protocols. Fundamentally, AMMs represent a common standard familiar to users, developers, and DeFi infrastructure, therefore making specialized AMMs a useful lego.

### I'd like to learn more

To learn more about how AMMs and portfolio replication go together, check out the research by Guillermo, Alex, and Tarun:

[Research](../learn-more/02-research.md/)
