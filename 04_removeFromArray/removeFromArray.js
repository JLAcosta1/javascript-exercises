const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        for (let j=0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
