# Units and unit conversion

The core repository uses [Web3-Units](https://github.com/Alexangelj/web3-units) to manage the different units utilized by the protocol. There are often conversions between decimals, floats, integers, fixed point integers, wei, and percentages. Without the unit library, these values would often be of type `BigNumberish`, making it very easy to use a value that is in the wrong units.

Web3-Units has several classes to manage the most common units used by the protocol, whether testing or in the interface:

### Classes

* **Percentages:** used to easily convert the mantissa scaled solidity percentages and regular float percentages.
* **Wei:** used to easily convert wei values returned by smart contracts (often scaled to 1e18) between strings, regular floats, or back to raw big numbers.
* **FixedX64: **The Engine contract uses the ABDK64x64 math library, a fixed point number library that stores the numerator of a value in an `int128`. All the denominators of these values are `2^64`, thus 64x64. This class type gives us easy getters to convert the raw numerator value into a regular value, by dividing by this denominator.
* **Time:** The smart contracts use time units of seconds, while the math we use is often in years. This Time class gives us an easy getter to convert between the two, an

