const repeatString = function(str, num) {
    let string = []
    if (num < 0){
        return "ERROR";
    }
    for (i = 0; i < num; i++){
        string.push(str);
    }
    return string.join("");
};

// Do not edit below this line
module.exports = repeatString;
