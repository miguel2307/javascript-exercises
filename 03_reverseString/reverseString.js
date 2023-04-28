const reverseString = function(string) {
    const array = string.split('');
    const reverseArray = array.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
