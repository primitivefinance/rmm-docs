---
title: Providing Liquidity
description: Frequently asked questions about providing liquidity to RMM Protocol
---

# Providing Liquidity

### Why would I provide liquidity to RMM pools?

RMM protocol offers pools that are rebalanced by arbitrageurs to achieve desired payoffs. The RMM-01 pools target a covered call payoff that has an expiration date, at which point each unit of liquidity will be redeemable for either `1` underlying token, or `strike` price amount of stable tokens. 

![](https://i.imgur.com/nc0Eov0.png)

### How are the pools rebalanced without an oracle?

Only the incentivation between RMM pools and other exchanges causes the RMM pools to be rebalanced, eliminating the need for an oracle.

These two scenarios are dependent on the underlying asset price when compared to the `strike` price defined in the pool. If the asset price on a reference market (e.g. another DEX) is more than the `strike` price in an RMM pool, an arbitrageur or trader could swap to the asset at a cost of `strike`, and sell it for more on that reference DEX price. This results in the liquidity being rebalanced until it is 100% composed of the stable token (i.e. no underlying assets are left in the pool, because they were bought to take advantage of a price discrepency on another market). This is the desired behavior, because it matches the payoff of a covered call which expired in-the-money ("ITM").

In the other scenario, if a reference price is below the `strike` price, then an arbitrageur or trader could swap the underlying to the stable asset in RMM pool, and swap from stable to underlying in the reference market to earn a profit. This causes the RMM liquidity to be rebalanced until it is 100% composed of the underlying token, matching the payoff of a covered call which expired out-of-the-money ("OTM").

### Why provide liquidity? Do I earn rewards?

Swap fees are generated by arbitrageurs and traders, which are distributed pro-rata to the liquidity providers by being re-invested into the pool.

Supplying tokens to the chosen curve will give you a position in a portfolio that tracks the value of the covered call, such that when liquidity is redeemed it will be valued at the value of the covered call its tracking.

### Is liquidity tokenized?

By default, liquidity is not tokenized. Higher-level smart contracts have the ability to tokenize liquidity, and in this case the Primitive Manager smart contract converts liquidity into ERC-1155 tokens.

If you are interested in token-less liquidity provision, [read this mirror article on the topic](https://mirror.xyz/alexangel.eth/XUtGuUBPkh0UIHNVd1XglC79gtjJeUPwBGha64aePww).

### How is the amount of liquidity calculated when providing tokens?

The amount of liquidity received for depositing tokens is dependent on the curve parameters and the current reserves of liquidity.

Both tokens must be allocated, and the liquidity amounts for each side of the pool are then calculated and compared. The lesser liquidity amount of the two is the amount of liquidity the recipient receives.

```
Calculating Liquidity Received

depositAmountA = 0.5
depositAmountB = 6

reserveAmountA = 0.3
reserveAmountB = 3
reserveLiquidity = 1

liquidityAmount  = depositAmount * total liquidity / reserveAmount
liquidityAmountA = 0.5 * 1 / 0.3 = 1.667 liquidity
liquidityAmountB = 6.0 * 1 / 3.0 = 2.000 liquidity

liquidityReceived = if(liquidityAmountA > liquidityAmountB) liquidityAmountB else liquidityAmountA
liquidityReceived = liquidityAmountA = 1.667
```

Therefore, it's important that this amount of liquidity is computed pre-emptively to optimize the amount of liquidity received relative to the deposit amounts.

### What happens to my liquidity when a pool expires?

Nothing. There is no risk to keeping liquidity in a pool after expiration. However, no swap fees are generated in the pool beyond the expiry date.

### What happens when tokens are provided as liquidity?

Providing liquidity will increase the reserves of both tokens, while also increasing the total supply of liquidity. This liquidity position is stored as state in the contract that gives the owner of the provided tokens the _right_ to remove their liquidity on a pro-rata basis.

### Can liquidity be removed at any time?

Yes, liquidity positions can be burned at any time, removing the underlying tokens from the pool and transferring them to a desired `recipient`.

### Where does yield come from?

Covered calls naturally accrue value (called _theta_) as time until an expiration date shortens, which in the RMM-01 case, comes from swap fees generated by trades between the two underlying pool tokens.

### How does theta match swap fees?

RMM-01 is a Constant Function Market Maker ("CFMM") with a **customized trading function**, that is **designed** to capture *theta* through swap fees. Read more in the [rmm-01 whitepaper](https://primitive.finance/whitepaper-rmm-01.pdf)

### Are there liquidity mining incentives?

No, RMM Protocol does not have liquidity mining incentives.

### What are the risks to providing liquidity?

#### Target payoff is not replicated exactly

These pools do not promise a payoff, but do have a high probability of replicating it within an expected margin of error. Therefore, there is a risk that liquidity providers do not get the expected payoff, which makes it very different from the promise of an option contract.

#### No arbitrage/swaps occur

For fees to be generated, swaps must occur, but there is the chance this does not happen as often as it should. This could be due to not enough liquidity in the pool, high gas prices, or even a lack of active arbitrageurs / traders.

#### Network goes offline

Network [downtime](https://thedefiant.io/arbitrum-outage/) can introduce instability in the Protocol's economic system by preventing arbitrage to occur in the pools. Once the network comes online, depending on how much time has passed, the asset prices in reference markets could be much different from the asset prices in the RMM-01 pools. This would not be entirely detrimental to the liquidity providers, however it might reduce the chance the replicated payoff is achieved.

#### Smart contracts could have a bug

The smart contracts have been audited by several professional firms, however, not all bugs can be discovered in the code. Knowing this, proceed to use the protocol with caution and prepare for the event of loss of funds by covering your position using the coverage providers who support the Protocol.&#x20;

#### Interface code could have a bug

Not only the smart contracts, but all the software should be considered "beta" until it has been sufficiently testing over a long period of time, by many users.

If you have security concerns, or discovered a bug, visit our [$1,000,000 bug bounty on Immunefi](https://immunefi.com/bounty/primitive/).