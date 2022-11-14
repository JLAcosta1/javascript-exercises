const palindromes = function (str) {
    let palindrome = true;
    let length = str.length;

    let leftPosition = 0;
    let rightPosition = length - 1;

    while (palindrome === true && leftPosition < rightPosition) {
        
        while (str[leftPosition] === " " || !((str.charCodeAt(leftPosition) >= 65
                                                && str.charCodeAt(leftPosition) <= 90)
                                            || (str.charCodeAt(leftPosition) >= 97
                                              && str.charCodeAt(leftPosition) <= 122))) {
            leftPosition = leftPosition + 1;
        }

        while (str[rightPosition] === " " || !((str.charCodeAt(rightPosition) >= 65
                                                && str.charCodeAt(rightPosition) <= 90)
                                            || (str.charCodeAt(rightPosition) >= 97
                                                && str.charCodeAt(rightPosition) <= 122))) {
            rightPosition = rightPosition - 1;
        }

        if (str[leftPosition].toLowerCase() != str[rightPosition].toLowerCase()) {
            palindrome = false;
        }

        leftPosition = leftPosition + 1;
        rightPosition = rightPosition - 1;
    }

    return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
