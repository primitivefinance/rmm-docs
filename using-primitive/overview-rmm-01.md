---
description: 'A brief review of RMM-01: Primitive''s first specialized pool.'
---

# Provide Liquidity, Earn Fees

Liquidity provided to the Protocol's pools earns trading fees on a pro-rata basis, which is reinvested back into the pool continuously. Each pool has a finite lifetime, and once it has expired no more trading fees will accrue to liquidity providers.&#x20;

Additionally, the composition of these two token pools will change over its lifetime. This composition is designed to target the payoff of a Black-Scholes covered call. This means that by the pool's maturity, if the price of the risky token is above the strike price of the pool, each liquidity token is 100% stablecoins. If the price of the risky token is below the strike price, the pool will most likely be composed 100% of the risky token.

A pool does not check the risky asset price explicitly, instead this strike price <> actual price check occurs through the economic incentives built into the AMM. For this reason, the Protocol does not rely on an external oracle system, allowing it to scaling to any token pair with ease.

Each pair and its pools are permissionlessly deployable by anyone.

## Primitive "RMM-01"

**RMM-01 is the liquidity token of a pool that replicates a **[**covered call**](https://www.investopedia.com/terms/c/coveredcall.asp)** payoff.**

Anyone can provide the pool's tokens and receive a liquidity position in return which matches that specific pool's calibration.&#x20;

### How does it work?

Each pool achieves its target value by making itself an attractive opportunity for arbitrageurs to trade between the pool's tokens. This is achieved using a _trading function _derived from the Black-Scholes Merton model for pricing options.&#x20;

![Primitive RMM-01 Trading Function](../.gitbook/assets/rmm01.png)

A trading function is a rule that governs an AMM's swaps between tokens, e.g. the constant product trading function used by Uniswap:

$$
x\times y=k
$$

### What are the fees for liquidity providers?

When swaps occur between the pool's tokens, a static fee of 0.15% is charged and reinvested into the pool, compensating the liquidity providers for their supplied capital.

### What are the risks?

#### Target payoff is not replicated exactly

These pools do not promise a payoff, but do have a high probability of replicating it within an expected margin of error. Therefore, there is a risk that liquidity providers do not get the expected payoff, which makes it very different from the promise of an option contract.

#### No arbitrage/swaps occur

For fees to be generated, swaps must occur, but there is the chance this does not happen as often as it should. This could be due to not enough liquidity in the pool, high gas prices, or even a lack of active arbitrageurs.

#### Network goes offline

Network [downtime](https://thedefiant.io/arbitrum-outage/) can introduce instability in the Protocol's economic system by preventing arbitrage to occur in the pools. Once the network comes online, depending on how much time has passed, the asset prices in reference markets could be much different from the asset prices in the RMM-01 pools. This would not be entirely detrimental to the liquidity providers, however it might reduce the chance the replicated payoff is achieved.

#### Smart contracts could have a bug

The smart contracts have been audited by several professional firms, however, not all bugs can be discovered in code. Knowing this, proceed to use the protocol with caution and prepare for the event of loss of funds by covering your position using the coverage providers who support the Protocol.&#x20;

#### Interface code could have a bug

Not only the smart contracts, but all the software should be considered "beta" until it has been sufficiently testing over a long period of time, by many users.

If you have security concerns, or found a bug, visit our [$250,000 bug bounty on Immunefi](https://immunefi.com/bounty/primitive/).

## Protocol Overview

The Primitive Protocol is separated into a few smart contracts:

* **PrimitiveEngine**: Core logic of the AMM for a two token pair.
* **PrimitiveFactory**: Permissionless deployment of new Engines with different token pairs.
* **Periphery**: High level contracts in a separate repository that are designed for end-users, and must be used by them to safely interact with the Engine.
