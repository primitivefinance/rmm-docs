---
description: Describes the process of creating virtual curves.
---

# Technical: Create New Pools

### Create Function

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/6b54e1e203ab6c4dd4d3e6def6eb971e897bc4af/contracts/PrimitiveEngine.sol#L96-L166)

```javascript
    /// @notice             Initializes a curve with parameters in the `settings` storage mapping in the Engine
    /// @param  strike      Strike price of the pool to calibrate to, with the same decimals as the stable token
    /// @param  sigma       Volatility to calibrate to as an unsigned 256-bit integer w/ precision of 1e4, 10000 = 100%
    /// @param  maturity    Maturity timestamp of the pool, in seconds
    /// @param  riskyPerLp  Risky reserve per liq. with risky decimals, = 1 - N(d1), d1 = (ln(S/K)+(r*sigma^2/2))/sigma*sqrt(tau)
    /// @param  delLiquidity Amount of liquidity to allocate to the curve, wei value with 18 decimals of precision
    /// @param  data        Arbitrary data that is passed to the createCallback function
    /// @return poolId      Pool Identifier
    /// delRisky            Total amount of risky tokens provided to reserves
    /// delStable           Total amount of stable tokens provided to reserves
    function create(
        uint256 strike,
        uint64 sigma,
        uint32 maturity,
        uint256 riskyPerLp,
        uint256 delLiquidity,
        bytes calldata data
    )
        external
        returns (
            bytes32 poolId,
            uint256 delRisky,
            uint256 delStable
        );
```

The create function is responsible for both:

1\. Storing the parameters of the curve in the `settings` state variable, using the keccak256 hash of the parameters as the key

2\. Initializing the reserves state and balance with the correct amount of tokens (more on this in the next section).



### Initializing the Reserves
