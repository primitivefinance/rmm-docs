---
description: Permissionlessly used to deploy new Engine contracts
---

# PrimitiveV2Factory

Canonical deployer contract for Primitive V2 Engines.

## Deploy

{% code title="IPrimitiveFactory.sol" %}
```text
/// @notice Deploys a new Engine contract and sets the `getEngine` mapping for the tokens
/// @param  risky   Risky token address, not a stable asset! But what is?
/// @param  stable  Stable token address, like Dai or Fei or Rai. If your stablecoin isn't 3 letters I'm not using it
function deploy(address risky, address stable) external returns (address engine);
```
{% endcode %}

Creates a new Engine contract with immutable parameters `risky` and `stable`, using `new`, and passing in a salt of: `salt: keccak256(abi.encode(risky, stable))`.

The Factory's `getEngine` mapping is updated with the deployed Engine address. Using `getEngine(risky, stable)` will return the Engine address.

The event `Deployed` is emitted with the parameters, `from`, `risky`, `stable`, and `engine`.

## Note

The Engine contract does not take constructor parameters, as this would modify the bytecode. Additionally, the `risky` and `stable` are immutable state variables of the Engine, which means they cannot be set outside of the constructor. To set these values in the constructor, but not through the constructor args, the new Engine contract will call the Factory's `args` state variable to get the `risky` and `stable`. The `args` state variable in the Factory is set prior to the deployment of the new Engine, and deleted after.

## Source Code

