---
description: Events of the Primitive Engine contract

---

# IPrimitiveEngineEvents.sol











## Events


### Allocate


Adds liquidity of risky and stable tokens to a specified `poolId`


```solidity title="Solidity"
event Allocate(address indexed from, address indexed recipient, bytes32 indexed poolId, uint256 delRisky, uint256 delStable)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| from `indexed` | address | Method caller `msg.sender` |

| recipient `indexed` | address | Address that receives liquidity |

| poolId `indexed` | bytes32 | Pool Identifier |

| delRisky  | uint256 | Amount of risky tokens deposited |

| delStable  | uint256 | Amount of stable tokens deposited |




### Create


Creates a pool with liquidity


```solidity title="Solidity"
event Create(address indexed from, uint128 indexed strike, uint32 sigma, uint32 indexed maturity, uint32 gamma)

```



:::note Details
Keccak256 hash of the engine address and the parameters is the `poolId`

:::




#### Parameters

| Name | Type | Description |
|---|---|---|

| from `indexed` | address | Calling `msg.sender` of the create function |

| strike `indexed` | uint128 | Strike price of the pool, with precision of stable token |

| sigma  | uint32 | Implied Volatility of the pool |

| maturity `indexed` | uint32 | Maturity timestamp of the pool |

| gamma  | uint32 | 1 - Fee % of the pool, as an integer with precision of 1e4 |




### Deposit


Added stable and/or risky tokens to a margin accouynt


```solidity title="Solidity"
event Deposit(address indexed from, address indexed recipient, uint256 delRisky, uint256 delStable)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| from `indexed` | address | Method caller `msg.sender` |

| recipient `indexed` | address | Margin account recieving deposits |

| delRisky  | uint256 | Amount of risky tokens deposited |

| delStable  | uint256 | Amount of stable tokens deposited |




### Remove


Adds liquidity of risky and stable tokens to a specified `poolId`


```solidity title="Solidity"
event Remove(address indexed from, bytes32 indexed poolId, uint256 delRisky, uint256 delStable)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| from `indexed` | address | Method caller `msg.sender` |

| poolId `indexed` | bytes32 | Pool Identifier |

| delRisky  | uint256 | Amount of risky tokens deposited |

| delStable  | uint256 | Amount of stable tokens deposited |




### Swap


Swaps between `risky` and `stable` assets


```solidity title="Solidity"
event Swap(address indexed from, address indexed recipient, bytes32 indexed poolId, bool riskyForStable, uint256 deltaIn, uint256 deltaOut)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| from `indexed` | address | Method caller `msg.sender` |

| recipient `indexed` | address | Address that receives `deltaOut` amount of tokens |

| poolId `indexed` | bytes32 | Pool Identifier |

| riskyForStable  | bool | If true, swaps risky to stable, else swaps stable to risky |

| deltaIn  | uint256 | Amount of tokens added to reserves |

| deltaOut  | uint256 | Amount of tokens removed from reserves |




### UpdateLastTimestamp


Updates the time until expiry of the pool with `poolId`


```solidity title="Solidity"
event UpdateLastTimestamp(bytes32 indexed poolId)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| poolId `indexed` | bytes32 | Pool Identifier |




### Withdraw


Removes stable and/or risky from a margin account


```solidity title="Solidity"
event Withdraw(address indexed from, address indexed recipient, uint256 delRisky, uint256 delStable)

```






#### Parameters

| Name | Type | Description |
|---|---|---|

| from `indexed` | address | Method caller `msg.sender` |

| recipient `indexed` | address | Address that tokens are sent to |

| delRisky  | uint256 | Amount of risky tokens withdrawn |

| delStable  | uint256 | Amount of stable tokens withdrawn |








