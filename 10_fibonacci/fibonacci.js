const fibonacci = function(val) {
    if(val < 0) {
        return "OOPS"
    }
    let x = parseInt(val, 10);

    if (x === 1) {
        return 1;
    }

    else if (x === 2) {
        return 1;
    }
    
    return fibonacci(x - 1) + fibonacci(x - 2)
};

// Do not edit below this line
module.exports = fibonacci;
