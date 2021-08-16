---
description: Feature of Primitive V2
---

# Internal Balances

## What are internal balances?

When a transaction requires a payment of a token, it will often pull the tokens from the payer into the smart contract. This is perfectly acceptable for one, two, or many transactions, since each transfer is around 35k gas. However, as transactions start to accrue into the 100s, or even 1000s, improvements in the gas expense are critical to continue use.

Tokens can be pre-emptively deposited in the Primitive V2 Engine smart contract to save an additional minimum of 35k gas per transaction by eliminating this extra `transfer` operation.

## Source code

To be added

