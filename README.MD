# Approximate Quotient bitshift formula

TDLR; I don't know if this formula already exists somewhere 

it is already proven that you can get the approximate value of a number divided by 2 by converting the value to binary and shifting the bits to the right by 1. You can also expand this rule to any base value e.g divide by 2, 4, 8 etc. by shifting the bits to the right by 1, 2, 3 etc. respectively. This rule is only limited to whole base values and cannot be used to get approx of for example 3, 5, 6, 7 etc. \
Thus to solve this limitation, I come up with an algorithm that will able to handle any divisor value. \

## Concept Algorithm:
1. Process the division by means of bit shifting both the `divisor` and `divident` until the `divident` is 1 or 0. 
2. If the shifted `divisor` is less than or equal to 0, it means that the `divisor` is less than the `divident` and thus will result to a decimal value, so the `quotient` is 0.
3. Next is to identify what is the `divident` used to get the `quotient`, this can be get by shifting the value `1` by how many times the `divisor` or `divident` has been shifted. We can call this `shiftBaseValue`.
4. If `shiftBaseValue` is a power of 2, then it means that no further calculations needed and return then current `divisor` value as the `quotient`. If not, We need to know the difference between the current calculated `quotient` and the current `divisor`, we can call this `quotientDifference`.
5. finally, use the `quotientDifference` as the new `divisor` for the next iteration of the process, and subtract the result of it to the current `quotient` until the `shiftBaseValue` is a power of 2.

#### Example:

Take for example the division of 35 by 7. \
divisor = 35 \
divident = 7 \
expected quotient = 5 
```log
divisor 35 100011
divident 7 111
iteration 1 quotient 35 10001
iteration 1 divident 7 11
iteration 2 quotient 35 1000
iteration 2 divident 7 1
x 2
shiftBaseValue 4 100
bitDiff 3 11
currentQuotientDivisor 56 111000
quotientDifference 21 10101
divisor 21 10101
divident 7 111
iteration 1 quotient 21 1010
iteration 1 divident 7 11
iteration 2 quotient 21 101
iteration 2 divident 7 1
x 2
shiftBaseValue 4 100
bitDiff 3 11
currentQuotientDivisor 35 100011
quotientDifference 14 1110
divisor 14 1110
divident 7 111
iteration 1 quotient 14 111
iteration 1 divident 7 11
iteration 2 quotient 14 11
iteration 2 divident 7 1
x 2
shiftBaseValue 4 100
bitDiff 3 11
currentQuotientDivisor 21 10101
quotientDifference 7 111

new recursive call
divisor 7 111
divident 7 111
iteration 1 quotient 7 11
iteration 1 divident 7 11
iteration 2 quotient 7 1
iteration 2 divident 7 1
x 2
shiftBaseValue 4 100
bitDiff 3 11
currentQuotientDivisor 7 111
quotientDifference 0 0
divisor 0 0
divident 7 111
iteration 1 quotient 0 0
iteration 1 divident 7 11
quotient of 35/7 is:  { approx: 5, actual: 5 }

```