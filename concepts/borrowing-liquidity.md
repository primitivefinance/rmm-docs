---
description: Overview of Liquidity Borrowing
---

# Borrowing Liquidity

The core Primitive V2 Engine smart contract has native liquidity position borrowing, allowing convexity hungry users to short liquidity positions.

## Why might I want to borrow a liquidity position?

Liquidity positions in Primitive V2 are a portfolio which tracks the value of a covered call. Borrowing a covered call, and selling it completely for one of the tokens is called _shorting_, and the payoff generated matches a vanilla call option.

## How do I borrow?

The peripheral Primitive V2 contracts support borrowing. In order to borrow, only the premium of the option has to be paid upfront. Positions can be closed at anytime, returning the remaining premium to the user. This returned premium amount can be more or less, depending on if the option increased in value or not.

## I'd like to learn more

To learn more, visit the research that explains this idea of liquidity lending:

{% page-ref page="advanced/research.md" %}

## Source Code: Low-level Borrow

In the V2 core smart contract, there is a low-level function `borrow` which implements the ability to borrow liquidity and remove the underlying tokens from it. The removed tokens remain in the smart contract, and the user who borrows is left with a `debt`, denominated in the liquidity amount at that point in time.

The final step is a payment: for each 1 unit of liquidity borrowed, there must be 1 unit of risky tokens in the smart contract. Therefore, if the liquidity was removed and only 0.8 risky was received, the remaining 0.2 risky tokens must be transferred in by the user.

The final position of the borrower is:

* 1 unit debt of liquidity
* 1 unit of risky token

The desired scenario for the borrower is that the actual price of the risky is higher than the strike price of the pool at the maturity date. In this case, 1 unit of liquidity is created by _strike price_ units of the stable token. As long as 1 unit of the risky is worth more in stable tokens than the strike price of the pool, the borrower profits.

The `repay` function is used by borrowers to close their position, as described above.

