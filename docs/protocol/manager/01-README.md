---
description: >-
  Primitive protocol is a set of core and "helper" contracts called the
  Periphery. Peripheral contracts have the user friendly checks to make sure
  transactions are optimal.
---

# Overview

The periphery currently consists in an ensemble of multiple contracts containing different functions to interact with the core of the protocol (the PrimitiveEngine contract). These functions are "high-level" and are made especially to facilitate the interactions with the core and protect the users by adding extra checks.

The peripheral contracts are organized among a main contract called the PrimitiveHouse, which inherits from all the other ones.

The functions exposed by the PrimitiveHouse contract can be batched together thanks to the Multicall contract. This feature is particularly useful when it comes to approve using a signature, wrap ETH, or even sweep the dust tokens / ETH left into the contract.

Additionally, the periphery is responsible of tracking the positions of the users, instead of letting the core do it.
