const sumAll = function(from, to) {
  let sum = 0;
  let temp = 0;

  if(!Number.isInteger(from) || !Number.isInteger(to)) return "ERROR";
  if(from<0 || to<0) return "ERROR";

  if(from>to){
    temp = from;
    from = to;
    to = temp;
  }

  for(let i=from; i<=to; i++){
    sum+=i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
