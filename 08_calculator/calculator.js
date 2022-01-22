const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(e => sum += e);
  return sum;
};

const multiply = function(nums) {
  let product = 1;
  nums.forEach(e => product *= e);
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let array = [];
  for (i=1; i<=num; i++) {
    array.push(i);
  }
  let product = 1;
  array.forEach(e => product *=e);
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
