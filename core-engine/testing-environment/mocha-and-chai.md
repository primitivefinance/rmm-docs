---
description: How we manipulate mocha and chai to serve our purposes
---

# Mocha and Chai

### Mocha

The mocha testing framework has a global namespace `mocha`. We directly add items to the global namespace so we can easily access them in our tests.

Mocha context api: [https://mochajs.org/api/module-context\#~Context](https://mochajs.org/api/module-context#~Context)

{% code title="/test/context.ts" %}
```text
declare module 'mocha' {
  export interface Context {
    signers: Wallet[]
    contracts: Contracts
    configs: Configs
  }
}
```
{% endcode %}

These new items are accessible in our tests through using `this`. These must be 'loaded' into the context manually, which is done in a `before` hook at the top level of the test file.

`signers`: Wallets which are used to send transactions on the network.

`contracts`: Deployed contracts to use in the tests

`configs`: Primitive AMM curve configurations, unique to Primitive testing environment



### Chai

The waffle framework has custom chai matchers for testing smart contracts. We extend this further and build custom matchers for the Primitive smart contracts.

```text
declare global {
  export namespace Chai {
    interface Assertion {
      revertWithCustomError(errorName: string, params: any[]): AsyncAssertion
      increaseMargin(
        engine: ContractTypes.PrimitiveEngine,
        account: string,
        risky: BigNumber,
        stable: BigNumber
      ): AsyncAssertion
      decreaseMargin(
        engine: ContractTypes.PrimitiveEngine,
        account: string,
        risky: BigNumber,
        stable: BigNumber
      ): AsyncAssertion
      increasePositionFloat(engine: ContractTypes.PrimitiveEngine, posId: string, float: BigNumber): AsyncAssertion
      decreasePositionFloat(engine: ContractTypes.PrimitiveEngine, posId: string, float: BigNumber): AsyncAssertion
      increasePositionLiquidity(engine: ContractTypes.PrimitiveEngine, posId: string, liquidity: BigNumber): AsyncAssertion
      decreasePositionLiquidity(engine: ContractTypes.PrimitiveEngine, posId: string, liquidity: BigNumber): AsyncAssertion
      increasePositionDebt(engine: ContractTypes.PrimitiveEngine, posId: string, debt: BigNumber): AsyncAssertion
      decreasePositionDebt(engine: ContractTypes.PrimitiveEngine, posId: string, debt: BigNumber): AsyncAssertion
      increaseReserveRisky(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      decreaseReserveRisky(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      increaseReserveStable(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      decreaseReserveStable(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      increaseReserveLiquidity(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      decreaseReserveLiquidity(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      increaseReserveFloat(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      decreaseReserveFloat(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      increaseReserveDebt(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      decreaseReserveDebt(engine: ContractTypes.PrimitiveEngine, poolId: string, amount: BigNumber): AsyncAssertion
      updateReserveBlockTimestamp(
        engine: ContractTypes.PrimitiveEngine,
        poolId: string,
        blockTimestamp: number
      ): AsyncAssertion
      updateReserveCumulativeRisky(
        engine: ContractTypes.PrimitiveEngine,
        poolId: string,
        amount: BigNumber,
        blockTimestamp: number
      ): AsyncAssertion
      updateReserveCumulativeStable(
        engine: ContractTypes.PrimitiveEngine,
        poolId: string,
        amount: BigNumber,
        blockTimestamp: number
      ): AsyncAssertion
    }
  }
}
```

These are some of the matchers we introduce to easily check state changes.



Both these namespaces are appended in the `./types/index.d.ts` file.

