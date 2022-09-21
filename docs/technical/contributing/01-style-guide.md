---
description: Primitive Solidity style guide.
---

# Solidity Style Guide

Primitive Solidity smart-contracts are mainly following the [official Solidity style guide](https://docs.soliditylang.org/en/v0.8.14/style-guide.html), however this guide extends the official one by adding some extra and specific rules.

Additionally, our repositories are using [Prettier](https://prettier.io/) with [Prettier Solidity plugin](https://github.com/prettier-solidity/prettier-plugin-solidity).

:::note
In case of conflicting rules between the official and the Primitive Solidity style guide, this one must always prevail.
:::

## Folder Structure

All the repositories must have the following folder structure:

```
project/
├─ contracts/
│  ├─ interfaces/
│  │  ├─ external/
│  ├─ libraries/
│  ├─ test/
├─ test/
```

## Versioning

Contracts and libraries must have a locked pragma with (ideally) the latest Solidity version.

```solidity
pragma solidity 0.8.13;
```

Interfaces can have a lower version to insure a maximum compatibility.

```solidity
pragma solidity >=0.8.0;
```

## Naming Conventions

| Type | Format | Example |
| --- | --- | --- |
| `mutable variables`, `public or external functions` | Snake case | `myVariable` |
| `constant variables` | Upper case | `MY_CONSTANT` |
| `internal or private functions` | Snake case starting with an underscore | `_internalStuff` |
| `constructor parameters` | Snake case ending with an underscore | `owner_` |

## Licensing

All the files and repositories must include one of the following licenses `GPL`, `MIT` or be marked as `UNLICENSED`.

```solidity
// SPDX-License-Identifier: GPL-3.0-only
```

## Commenting

All the Solidity code must have explicit comments and proper documentation using the NatSpec format. All the NatSpec tags can be used to describe contracts, interfaces, librarires, structs, functions, variables, etc...

```solidity
/// @title   PrimitiveManager contract
/// @author  Primitive
/// @notice  Interacts with Primitive Engine contracts
```

Extra spaces should be added between the tag and the comment to give this specific style:

```solidity
/// @param factory_             Address of a PrimitiveFactory
/// @param WETH9_               Address of WETH9
/// @param positionDescriptor_  Address of PositionDescriptor
```

Custom tags can be used to add extra details:

```solidity
/// @notice Single instruction processor that will forward instruction to appropriate function.
/// @dev Critical: Every token of every pair interacted with is cached to be settled later.
/// @param data Encoded Enigma data. First byte must be an Enigma instruction.
/// @custom:security Critical. Directly sends instructions to be executed.
```

Different declarations within the code can be separated using the following titles:

```solidity
/// ERRORS ///

...

/// EVENTS ///

...

/// STATE VARIABLES ///

...

/// EFFECT FUNCTIONS ///

...

/// VIEW FUNCTIONS ///

...

/// PRIVATE FUNCTIONS ///

...
```
