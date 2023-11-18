# Approximate Quotient bitshift formula

TDLR; I don't know if this formula already exists somewhere 

it is already proven that you can get the approximate value of a number divided by 2 by converting the value to binary and shifting the bits to the right by 1. You can also expand this rule to any base value e.g divide by 2, 4, 8 etc. by shifting the bits to the right by 1, 2, 3 etc. respectively. This rule is only limited to whole base values and cannot be used to get approx of for example 3, 5, 6, 7 etc. \
Thus to solve this limitation, I come up with an algorithm that will able to handle any divisor value. \

## Concept Algorithm:
1. Process the division by means of bit shifting both the `divisor` and `divident` until the `divident` is 1 or 0. 
2. If the shifted `divisor` is less than or equal to 0, it means that the `divisor` is less than the `divident` and thus will result to a decimal value, so the `quotient` is 0.
3. We need to know the difference between the current calculated `quotient` and the current `divisor`, we can call this `quotientDifference`. If the `quotientDifference` is less than the `divident`, we return the current `quotient` as the approximate value of the division, else if the `quotientDifference` is equal to the `divident`, we return the current `quotient` - 1 as the approximate value of the division, else we continue to the next step.
4. finally, use the `quotientDifference` as the new `divisor` for the next iteration of the process, and subtract the result of it to the current `quotient` until the `quotientDifference` is equal or less than the `divident`.

