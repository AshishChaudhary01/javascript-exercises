const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
  if(arr != null){
    arr.forEach((value)=>{sum+=value});
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach((value) => {product = product*value});
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let factorial = 1;
  for(let i=num; i>0; i--){
    factorial *= i;
  }
  return factorial;
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
