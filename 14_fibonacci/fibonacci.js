const fibonacci = function(upTo) {
  let first = 1;
  let second = 1;
  let nth = 0;

  if(upTo<0){ return "OOPS"};
  if(upTo>0 && upTo<3){ return 1;}
  for(let counter=2; counter<upTo; counter++){
    nth = first + second;
    first = second;
    second = nth;
  }
  return nth;
};


// Do not edit below this line
module.exports = fibonacci;
