---
description: >-
  A basic overview of the Primitive Engine, a core smart contract of Primitive
  Protocol.
---

# Core

The low-level implementation of the Replicating Market Maker, "RMM-01", is in the PrimitiveEngine.sol smart contract. It is designed to be minimal and gas efficient, and only implement the fundamental functions of an AMM: provide liquidity, remove liquidity, and swap between the pool's tokens.

This Engine has an extra feature to carry an internal token balance, which will save gas by reducing token transfers; token transfers are usually a considerable portion of the gas expense.

### ABI

| Function Abi                                                                                                                                                                                                | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `function updateLastTimestamp(bytes32 poolId) external returns (uint32 lastTimestamp);`                                                                                                                     | Updates a pool's last timestamp, effectively applying the time that has passed.                                   |
| `function create( uint256 strike, uint64 sigma, uint32 maturity, uint256 riskyPerLp, uint256 delLiquidity, bytes calldata data ) external returns ( bytes32 poolId, uint256 delRisky, uint256 delStable );` | Creates a pool, "curve", with the arguments as parameters.                                                        |
| `function deposit( address recipient, uint256 delRisky, uint256 delStable, bytes calldata data ) external;`                                                                                                 | Increases the recipient's internal token balance.                                                                 |
| `function withdraw( address recipient, uint256 delRisky, uint256 delStable ) external;`                                                                                                                     | Decreases the msg.sender internal token balance.                                                                  |
| `function allocate( bytes32 poolId, address recipient, uint256 delRisky, uint256 delStable, bool fromMargin, bytes calldata data ) external returns (uint256 delLiquidity);`                                | Increases the liquidity position of the recipient by providing tokens to the pool.                                |
| `function remove(bytes32 poolId, uint256 delLiquidity) external returns (uint256 delRisky, uint256 delStable);`                                                                                             | Decreases the liquidity of msg.sender by removing tokens from the pool.                                           |
| `function swap( address recipient, bytes32 poolId, bool riskyForStable, uint256 deltaIn, bool fromMargin, bool toMargin, bytes calldata data ) external returns (uint256 deltaOut);`                        | Swaps between the pool's tokens, either from the risky to the stable token or from the stable to the risky token. |

