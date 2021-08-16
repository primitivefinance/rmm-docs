---
description: Describes the process of creating virtual curves.
---

# Technical: Create New Pools

## Create Function

[Source Code](https://github.com/primitivefinance/primitive-v2-core/blob/6b54e1e203ab6c4dd4d3e6def6eb971e897bc4af/contracts/PrimitiveEngine.sol#L96-L166)

```javascript
    /// @notice         Initializes a curve with parameters in the `settings` storage mapping in the Engine
    /// @param  strike  Strike price of the option to calibrate to
    /// @param  sigma   Volatility of the option to calibrate to
    /// @param  time    Maturity timestamp of the option
    /// @param  riskyPrice  Amount of stable tokens required to purchase 1 unit of the risky token, spot price
    /// @param  delLiquidity Amount of liquidity to initialize the pool with
    /// @param  data    Arbitrary data that is passed to the createCallback function
    /// @return poolId  Keccak256 hash of the parameters strike, sigma, and time, use to identify this option
    /// delRisky        Amount of risky tokens provided to reserves
    /// delStable       Amount of stable tokens provided to reserves
    function create(
        uint256 strike,
        uint64 sigma,
        uint32 time,
        uint256 riskyPrice,
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

1. Storing the parameters of the curve in the `settings` state variable, using the keccak256 hash of the parameters as the key
2. Initializing the reserves state and balance with the correct amount of tokens \(more on this in the next section\).

## Initializing the Reserves

