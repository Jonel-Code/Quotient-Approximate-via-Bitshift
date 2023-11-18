# Approximate Quotient bitshift formula

TDLR; I don't know if there is already an existing algorithm somewhere, the aim of this script is to gain knowledge and basic experience on manipulating binary and bits.

Getting the Approximate Quotient of a certain number using "Bit-shifting" is faster that simple iteration. It is already proven that you can get the approximate value of a number divided by 2 by converting the value to binary and shifting the bits to the right by 1. You can also expand this rule to any number divided by any "power of 2 number" e.g 2, 4, 8 etc. by shifting the bits to the right by 1, 2, 3 etc. respectively. But the approximation is only limited to divisors that are  "power of 2 number". \
Thus to solve this limitation, I come up with an algorithm that will able to handle any divisor value. 

## Concept Algorithm:
1. Process the division by means of bit shifting both the `divisor` and `divident` until the `divident` is 1 or 0. 
2. If the shifted `divisor` is less than or equal to 0, it means that the `divisor` is less than the `divident` and thus will result to a decimal value, so the `quotient` is 0.
3. Next, get the difference between the current calculated `quotient` and the current `divisor`, we can call this `quotientDifference`. If the `quotientDifference` is less than the `divident`, return the current `quotient` as the approximate value of the division, if the `quotientDifference` is equal to the `divident`, we return the current `quotient` - 1 as the approximate value of the division, else we continue to the next step.
4. finally, use the `quotientDifference` as the new `divisor` for the next iteration of the process, and subtract the result of it to the current `quotient` until the `quotientDifference` is equal or less than the `divident`.

