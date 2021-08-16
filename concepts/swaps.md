# Swaps

## Two token pools and a way to swap between them

Primitive V2 Pools have two tokens, a risky and stable. The core smart contract exposes a low level `swap` call, allowing the exchange between the two tokens as long as the _**trading invariant**_ is preserved.

Learn more about the trading invariant in the research page:

{% page-ref page="advanced/research.md" %}

## Source Code: Low-level Swap

The swap function has four parameters: a pool to trade in, the direction of the trade, the amount to swap in, and a choice of paying to pay using internal balances. During the swap, if the internal balances are not being used to pay the balance, then the swap will make a call to the `msg.sender` asking for payment of the token being sent in. Therefore, this case must be triggered by a smart contract only, or it will fail. Users can call the swap function directly \(but shouldn't\) by passing the parameter `fromMargin` in as true.

After the token being transferred in is paid, the output token will be transferred out. The final check will compare the invariant of the pool at the point after the swap and prior to the swap. If the invariant did not grow or stay equal, than the trade was outside of the acceptable trading set, and is rejected by causing a revert.

