const palindromes = function (string) {
    let charOnlyString = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let revString = charOnlyString.split('').reverse().join('');
    return (charOnlyString === revString);
};

// Do not edit below this line
module.exports = palindromes;
