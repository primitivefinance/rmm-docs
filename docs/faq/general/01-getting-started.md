---
title: Getting Started
description: Frequently asked questions about Primitive and RMM protocol in general
---

# Getting Started

## What is Primitive all about?

Primitive is an ecosystem of efforts to build an innovative and oracle-free solution to DeFi derivatives. Under Primitive is a US equity company Primitive Bits, the decentralized RMM protocol, and the Primitive Interfaces.

**Company:** The company is a US incorporated legal entity that develops protocols, products, and interfaces for the Primitive ecosystem.

**RMM Protocol:** RMM protocol is a set of immutable smart contracts which do not grant special permission to the Company and cannot be altered.

**Interfaces:** The interfaces are open-source code hosted on a company controlled domain [primitive.finance](https://primitive.finance), as well as decentrally hosted through [IPFS](https://ipfs.io). All interfaces are available to be downloaded and run locally.

## What is the motivation behind Primitive?

Oracles in DeFi remain one of the largest centralization risks and economic attack vectors. This risk translates down to any user of an oracle embedded protocol.


As derivatives in DeFi scale beyond the size of crypto spot markets, reliance on oracles becomes a systemic risk which will correlate protocols much closer than they desire to be. With an oracle-free protocol, these systemic risks are not exacerbated to all the other protocols which have composed with RMM. The result of this is ultimately lower risk, safer yields, and more adoption of RMM liquidity.

## What are the key benefits of RMM Protocol?

RMM-01 is both a financial vehicle for a covered-call like payoff, and a decentralized spot exchange. There are benefits to using RMM for both cases:

### Liquidity Token as a financial vehicle
- **Reduced risk** from oracle-free architecture
- **Redeemable** into its underlying assets at any time
- **Works** without a counter-party

### As an AMM DEX
- **Concentrated Liquidity** increases capital efficiency
- **Fungible Liquidity** enables LPT derivatives like staking and borrowing
- **Cheap** position updates increase fee revenue

## Can Primitive be upgraded or changed?

No. RMM protocol is non-upgradeable and does not have any admin keys. Once deployed, the smart contracts cannot be altered.

## How can I use Primitive?

There is an interface for RMM protocol hosted on [primitive.finance](https://primitive.finance).

Alternatively, it can be access through [IPFS](https://ipfs.io), or even downloaded from [github](https://github.com/primitivefinance) and run locally.

## What are the main use cases of Primitive?

For RMM-01 protocol:

1. Provide liquidity to get Liquidity Pool Tokens ("LPTs") which have the payoff of a covered call option.
2. Swap between pool assets on concentrated liquidity curves.
3. Use LPTs in other protocols (e.g. as collateral, selling rights to underlying assets, etc.).

## What do I need to use Primitive?

To provide liquidity, a wallet and a balance in the two tokens of the desired pool is all that is needed.

To swap, the desired input token must have the Primitive Manager contract approved, and a sufficient balance of the tokens relative to the deisred input amount.

To create pools, its the same as providing liquidity, except you are responsible for pricing the pool's liquidity at an implied spot price.

To create new pairs, the Layer 1 network token (e.g. Ether) to pay the gas cost to deploy the pair from the Primitive Factory contract.

## Does Primitive charge fees?

No. RMM protocol does not accrue fees on behalf of the Primtive team or Company.

Only liquidity providers of RMM earn trading fees.

## How can I earn money using Primitive?

Deposit two tokens into an RMM-01 pool to start earning trading fees, which are automatically re-invested into the pool on a pro-rata basis.

## Can I lose my funds?

All funds are sent to and transferred between immutable smart contracts of RMM protocol. There is no centralized entity, person, or Company which has control over any funds.

As such, the smart contract code is responsible for managing funds in a trustless way. The RMM protocol smart contracts have been audited by four professional and 3rd party audit firms. However, this does not guarantee that the code is bug-free. Any interaction with the protocol should be taken with caution.
