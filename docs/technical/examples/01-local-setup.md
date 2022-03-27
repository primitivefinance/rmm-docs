---
description: Local setup.
---

# Local Setup

If you want to start toying around with RMM protocol or plan to build on top of it, the best way to do learn how it works is to have a look at our [examples repository](https://github.com/primitivefinance/rmm-examples). Built especially for our community and developers, this repository contains:
- A Hardhat / TypeScript setup
- Several example contracts in Solidity: liquidity farming, NFTs wrapping, ...
- A complete testing environment: PrimitiveFactory, PrimitiveEngine and PrimitiveManager already deployed, including mock ERC20 tokens
- Testing tools: custom Mocha hooks specific to RMM protocol and access to the contracts via a global context

## Installing

1. Copy the RMM examples repository on your computer:

```bash
git clone https://github.com/primitivefinance/rmm-examples.git
```

2. Install the required packages:

```bash
# Using npm
npm install

# Using yarn
yarn
```

3. Have fun! You can have a look at the different contracts and run the tests using:

```bash
# Using npm
npx hardhat test ./test/...

# Using yarn
yarn hardhat test ./test/...
```

## Extending

This repository can also be used as a base to build on top of our protocol! Simply remove the examples contracts and you'll have a complete environment ready to go!
