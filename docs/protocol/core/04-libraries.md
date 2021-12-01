---
description: Math and accounting logic
---

# Libraries

The core contracts make use of several libraries, including ABDK64x64, a fixed point math library.

### Math libraries:

* ABDKMath64x64
* CumulativeNormalDistribution: Implements a CDF and Inverse CDF (Quantile) function using approximations and the ABDK Math Library.
* ReplicationMath: Implements the AMM specific math, like the trading function and invariant calculation.

### Accounting libraries:

* Margin: Handles data struct and manipulation of internal token balance accounts.
* Reserve: Handles data struct and manipulation of the pool reserves, as well as the TWAP oracle data.

### Utility libraries:

* SafeCast: UInt256 are often casted down to UInt128s, to pack struct data into a single storage slot. This library will perform checks when casting down to ensure the values stay the same.
* Transfers: Implements a `safeTransfer` helper function to be used in place of `erc20.transfer`, which checks the returnData on calls.
* Units: Helper functions to convert between 64x64 fixed point numbers and units.
