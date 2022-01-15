const sumAll = function(min, max) {
    let sum=0;
    if (min > max) {
        let x = min;   //i know there is a better way to do this...just have to figure it out
        min = max;
        max = x;
    }
    if ((min < 0 || !Number.isInteger(min)) || (max < 0 || !Number.isInteger(max))) {
        return 'ERROR'
    } else {
        for (i=min; i<=max; i++) {
        sum+=i
    }
    return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
