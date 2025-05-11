const removeFromArray = function(array, ...elementsToRemove){
  let filteredArray = array;
  for(let i=0; i<elementsToRemove.length; i++){
    filteredArray = filteredArray.filter((element => element !== elementsToRemove[i]));
  }
  return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
