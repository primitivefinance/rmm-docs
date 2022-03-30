---
description: >-
  Primitive protocol is a set of core and "helper" contracts called the
  Manager. Manager contracts have the user friendly checks to make sure
  transactions are optimal.
---

# RMM Manager

Primitive Manager currently consists in an ensemble of multiple contracts containing different functions to interact with the core of the protocol: PrimitiveEngine contracts. These functions are "high-level" and are made especially to facilitate the interactions and protect the users by adding extra checks.

The manager contracts are organized under a main contract called the PrimitiveManager, which inherits from all the other ones.

The functions exposed by the PrimitiveManager contract can be batched together thanks to the Multicall contract. This feature is particularly useful when it comes to approve using a signature, wrap ETH, or even sweep the dust tokens / ETH left into the contract.

Additionally, the manager is responsible of tracking the positions of the users, instead of letting the core do it.
