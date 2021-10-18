---
description: 'A brief review of RMM-01: Primitive''s first specialized pool.'
---

# Overview: RMM-01

The Protocol's pools are designed with their own target payoffs for liquidity providers. Each pool is designed to be permissionlessly deployable by anyone, and does not have special admin privileges.

## Primitive's First Pool "RMM-01"

**RMM-01 is a liquidity token of the pool that replicates a **[**covered call**](https://www.investopedia.com/terms/c/coveredcall.asp)** payoff.**

Anyone can provide the pool's tokens and receive a liquidity position in return which matches that specific pool's calibration. Each pool achieves its target value by making itself an attractive opportunity for arbitrageurs to trade between the pool's tokens. This is achieved using a _trading function, _e.g. the constant product trading function used by Uniswap: xy=k.

When swaps occur between the pool's tokens, a static fee of 0.15% is charged and reinvested into the pool, effectively compensating the liquidity providers for their supplied capital.

These pools do not promise a payoff, but do have a high probability of replicating it within a margin of error. 

## Protocol Overview

The Primitive Protocol is separated into a few smart contracts:

* **PrimitiveEngine**: Core logic of the AMM for a two token pair.
* **PrimitiveFactory**: Permissionless deployment of new Engines with different token pairs.
* **Periphery**: High level contracts in a separate repository that are designed for end-users, and must be used by them to safely interact with the Engine.
