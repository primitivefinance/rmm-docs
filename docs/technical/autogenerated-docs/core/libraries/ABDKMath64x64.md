---
description: ABDKMath64x64
---

# ABDKMath64x64.sol

Smart contract library of mathematical functions operating with signed 64.64-bit fixed point numbers.  Signed 64.64-bit fixed point number is basically a simple fraction whose numerator is signed 128-bit integer and denominator is 2^64.  As long as denominator is always the same, there is no need to store it, thus in Solidity signed 64.64-bit fixed point numbers are represented by int128 type holding only the numerator.





