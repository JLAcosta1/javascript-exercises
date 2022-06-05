const sumAll = function(num1, num2) {
    let smallest = null
    let largest = null
    let sum = 0

    if (typeof(num1)!=='number' || typeof(num2)!=='number') { // Test for non-number data types
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) { // Test for negative numbers
        return 'ERROR';
    }

    if (num1 === num2) 
        return num1;
    else if (num1 < num2) {
        smallest = num1;
        largest = num2;
    }
    else {
        smallest = num2;
        largest = num1;
    }

    for(let i=smallest; i <= largest; i++) {
        sum = sum + i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
