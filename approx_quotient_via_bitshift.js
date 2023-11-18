// a function that will get he approximate quotient without using division operator
function approxQuotientViaBitshift(divisor, divident) {

    // first check the divisor and divident and return respective values if they are equal or less than 0
    if (divisor === divident) {
        return 1;
    } else if (divisor < divident) {
        return 0;
    }

    // bitshift quotient approximation
    let quotient = divisor; // by default quotient is the divisor (anything divided by 1 is itself)
    let dividentCopy = divident; // create a copy of divident to preserve original value
    while (dividentCopy > 1) {
        dividentCopy = dividentCopy >> 1; // shift b until it is less than 1
        quotient = quotient >> 1; // shifting quotient is same as dividing by 2
        // if quotient is less than or equal 0, then quotient is 0 (no need to shift further)
        if (quotient <= 0) {
            return 0;
        }
    }

    // to get the remaining quotient, 
    // first get the current quotient divisor 
    let currentQuotientDivisor = (quotient * divident);
    // get the quotientDifference by subtracting the current quotient divisor by the divisor
    let quotientDifference = currentQuotientDivisor - divisor;
    // then get the remaining quotient by recursively calling the function with the quotientDifference as the new divisor
    return quotient - approxQuotientViaBitshift(quotientDifference, divident);
}

approxTest(10, 3);
approxTest(10, 2);
approxTest(10, 1);
approxTest(80, 4);
approxTest(80, 8);
approxTest(125, 12);
approxTest(80, 16);
approxTest(46, 3);
approxTest(100, 10);
approxTest(13489234, 59);
approxTest(5, 10);
approxTest(33333333, 2223);
approxTest(83910123, 50000);
approxTest(35, 7);

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