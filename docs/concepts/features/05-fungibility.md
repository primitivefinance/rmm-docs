---
description: Feature of Primitive RMM-01
---

# Fungibility and Open Standards

### Liquidity is not tokenized

The core smart contracts represent liquidity as a mapping of addresses to balances. This is not directly tokenized in the core contracts, allowing any peripheral smart contract to choose whatever standard they wish.

Liquidity per pool is fungible with itself, enabling any tokenization to be highly composable.

### Source code

[PrimitiveEngine.sol](https://github.com/primitivefinance/primitive-v2-core/blob/main/contracts/PrimitiveEngine.sol)
