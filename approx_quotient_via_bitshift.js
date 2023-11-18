// a function that will get he approximate quotient without using division operator
function approxQuotientViaBitshift(divisor, divident) {
    console.log('divisor', divisor, dec2bin(divisor));
    console.log('divident', divident, dec2bin(divident));
    // bitshift quotient approximation
    let x = 0; // shift count
    let quotient = divisor; // by default quotient is the divisor (anything divided by 1 is itself)
    let dividentCopy = divident; // create a copy of divident to preserve original value
    while (dividentCopy > 1) {
        dividentCopy = dividentCopy >> 1; // shift b until it is less than 1
        quotient = quotient >> 1; // shifting quotient is same as dividing by 2
        x++; // increment shift count
        console.log(`iteration ${x} quotient`, divisor, dec2bin(quotient));
        console.log(`iteration ${x} divident`, divident, dec2bin(dividentCopy));
        // if quotient is less than or equal 0, then quotient is 0 (no need to shift further)
        if (quotient <= 0) {
            return 0;
        }
    }

    console.log('x', x);
    // get the shift base value (1 shifted by x times)
    let shiftBaseValue = 0b1 << x;
    console.log(`shiftBaseValue`, shiftBaseValue, dec2bin(shiftBaseValue));
    // get the bit difference between divident and shift base
    let bitDiff = divident - shiftBaseValue;
    console.log(`bitDiff`, bitDiff, dec2bin(bitDiff));
    // check if the divident is a base 2 whole number (i.e. 2, 4, 8, 16, 32, 64, 128, etc.)
    // if it is not a base 2 whole number, it means that the approximation is not exact
    // else return the quotient
    if (bitDiff <= 0) {
        return quotient;
    }

    // to get the remaining quotient, 
    // first get the current quotient divisor 
    let currentQuotientDivisor = (quotient * divident);

    console.log(`currentQuotientDivisor`, currentQuotientDivisor, dec2bin(currentQuotientDivisor));
    // get the quotientDifference by subtracting the current quotient divisor by the divisor
    let quotientDifference = currentQuotientDivisor - divisor;

    console.log(`quotientDifference`, quotientDifference, dec2bin(quotientDifference));
    // then get the remaining quotient by recursively calling the function with the quotientDifference as the new divisor
    return quotient - approxQuotientViaBitshift(quotientDifference, divident);
}

// approxTest(10, 3);
// approxTest(10, 2);
// approxTest(10, 1);
// approxTest(80, 4);
// approxTest(80, 8);
// approxTest(125, 12);
// approxTest(80, 16);
// approxTest(46, 3);
// approxTest(100, 10);
// approxTest(13489234, 59);
// approxTest(5, 10);
// approxTest(33333333, 2223);
// approxTest(83910123, 50000);
approxTest(35, 7);
// console.log('loopCount', loopCount);

function approxTest(a, b) {
    console.log(
        `quotient of ${a}/${b} is: `,
        {
            'approx': approxQuotientViaBitshift(a, b),
            'actual': a / b,
        }
    );

}


function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}