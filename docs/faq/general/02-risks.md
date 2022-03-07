---
title: Risks
description: Frequently asked questions about Primitive and RMM protocol in general
---

# Risks

The security of our protocol is our main priority, however it's impossible to guarantee a risk-free environment, and it makes sense to be aware of all its components.

## Smart Contract Risks

### Were the RMM contracts audited?

Yes. RMM protocol contracts have been audited by five security firms, making it one of the most audited set of smart contracts in DeFi (if not the most). You can learn more about it on our [dedicated page](/technical/security/audits).

While these audits give high confidence in the protocol's security, the smart contracts still have the possibility of containing bugs. Along with the audits, Primitive has a $1,000,000 bug bounty on [Immunefi](https://immunefi.com/bounty/primitive/), and $10,000,000 of coverage by [Sherlock](https://sherlock.xyz/).

### Are there any admin Keys?

No, our contracts are completely decentralized and permissionless, we *DO NOT* control them by any means.

### Are the contracts upgradeable?

The core contracts of the RMM protocol are **immutable**, which means that they cannot be updated.

However, the [PositionRenderer](https://github.com/primitivefinance/rmm-manager/blob/main/contracts/PositionRenderer.sol) contract, responsible of displaying the visuals of our liquidity pool tokens is upgradeable. But this contract doesn't contain any actionable logic, besides rendering graphics.

## Usage Risks

### Are there any financial risks using RMM?

Yes, we recommend reading carefully our documentation or asking questions on our Discord server if some aspects of our protocol remain unclear.

## Oracle Risks

### Are there any risks linked to oracles?

None! RMM doesn't rely on any oracles.
