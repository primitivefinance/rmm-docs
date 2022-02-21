---
id: overview
description: >-
  A basic overview of the Primitive Engine, a core smart contract of Primitive
  RMM Protocol.
---

# Overview

The low-level implementation of the Replicating Market Maker, "RMM-01", is in the `PrimitiveEngine.sol` smart contract. It is designed to be minimal and gas efficient, only implementing the fundamental functions of an AMM: provide liquidity, remove liquidity, and swap between the pool's tokens.

This Engine has an extra feature to carry an internal token balance, which will save gas by reducing token transfers; token transfers are usually a considerable portion of the gas expense.
