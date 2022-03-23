---
description: Local Setup.
---

# Local Setup

If you want to start toying around with RMM or plan to build on top of it, the best way to learn how to do it is to look at our [examples repository](https://github.com/primitivefinance/rmm-examples). It contains several contracts showing how one can interact with our protocol using Solidity, but also a testing environment already set up for you!

## Installing RMM examples

1. Copy the RMM examples repo on your computer:

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

3. Have fun! You can have a look the different contracts and run the tests using:

```bash
# Using npm
npx hardhat test ./test/...

# Using yarn
yarn hardhat test ./test/...
```
