const reverseString = function(string) {
  let reversed = "";
  let length = string.length;
  if(length>=0){
    for(let i=length; i>0; i--){
      reversed += string[i-1];
    }
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
