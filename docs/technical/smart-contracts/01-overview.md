---
id: overview
description: >-
  A basic overview of the Primitive Engine, a core smart contract of Primitive
  RMM Protocol.
---

# Overview

The Replicating Market Maker (RMM-01) protocol is a collection of immutable smart contracts written in Solidity. Inspired by other projects, such as Uniswap, the architecture is divided in two parts, the core and the manager, interacting together.

Here is a complete overview of the protocol:

[![Contracts flow](/img/contracts-flow.png)](/img/contracts-flow.png)

## Core

The core part designates both the `PrimitiveEngine` and the `PrimitiveFactory` contract. The former is the actual low-level implementation of the RMM protocol, and the latter is responsible of deploying new engine contracts.

The `PrimitiveEngine` is designed to be minimal and gas efficient, only implementing the fundamental functions of an AMM: provide liquidity, remove liquidity, and swap between the pool's tokens.
This Engine has an extra feature to carry an internal token balance (called `margin`), which will save gas by reducing token transfers; token transfers are usually a considerable portion of the gas expense.

## Manager

The manager part designates the `PrimitiveManager`, `PositionDescriptor ` and `PositionRenderer`.
