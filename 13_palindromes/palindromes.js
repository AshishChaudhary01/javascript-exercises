const palindromes = function (string) {
  let revString = "";
  let palindrome = false;

  //Remove any unwanted character that aren't letters or numbers
  cleanedString = string
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  //Reverse the string
  revString = cleanedString.split("").reverse().join("");
  if (revString ==cleanedString) {
    palindrome = true;
  }
  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
