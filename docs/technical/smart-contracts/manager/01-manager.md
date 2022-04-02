---
description: >-
  Primitive protocol is a set of core and "helper" contracts called the
  Manager. Manager contracts have the user friendly checks to make sure
  transactions are optimal.
---

# PrimitiveManager.sol

> [Read the autogenerated docs.](/technical/smart-contracts/autogenerated-docs/manager/PrimitiveManager)

High-level implementation of the RMM protocol.

---

## How is the Manager used?

The Manager acts as a bridge between the core level of the RMM protocol and its users. As mentioned before, the manager handles many "high-level" features, such as:
- Tracking users' positions through several different engine contracts
- Tokenizing users' positions as ERC1155 tokens
- Performing extra checks (such as slippage tolerance, etc..), not present into the core
- Offering batched transactions