 const repeatString = function(string, num) {
    myString = '';
    if (num < 0) {
        return 'ERROR'
    }
    while (num > 0) {
        myString+=string
        num--
    }        
    return myString;
    
};

// Do not edit below this line
module.exports = repeatString;
