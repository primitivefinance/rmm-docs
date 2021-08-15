---
description: Math and accounting logic
---

# libraries

The core contracts make use of several libraries, including ABDK64x64, a fixed point math library.

Math libraries:

* ABDKMath64x64
* BlackScholes: Implements black-scholes formula for calculating a call option value
* CumulativeNormalDistribution: Implements a CDF and Inverse CDF \(Quantile\) function using ABDK
* ReplicationMath: Implements the AMM specific math, like the trading invariant function.

Accounting libraries:

* Margin: Handles data struct and manipulation of margin accounts
* Position: Handles data struct and manipulation of positions
* Reserve: Handles data struct and manipulation of the pool reserves, as well as the TWAP oracle data

Utility libraries:

* SafeCast: UInt256 are often casted down to UInt128s, to pack struct data into a single storage slot. This library will perform checks when casting down to ensure the values stay the same.
* Transfers: Implements a `safeTransfer` helper function to be used in place of `erc20.transfer`, which checks the returnData on calls.
* Units: Helper functions to convert between 64x64 fixed point numbers and units.

