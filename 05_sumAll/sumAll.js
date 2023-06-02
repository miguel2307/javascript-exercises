const sumAll = function(firstInteger, secondInteger) {
    if (!Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) return "ERROR";
    if (firstInteger < 0 || secondInteger < 0) return "ERROR";
    if (firstInteger > secondInteger) return "ERROR";
    let sumIntegers = 0;
    for (let i = firstInteger; i < secondInteger + 1; i ++) {
        sumIntegers += i;
    }
    return sumIntegers;
};

// Do not edit below this line
module.exports = sumAll;
