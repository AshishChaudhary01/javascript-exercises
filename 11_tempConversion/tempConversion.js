const convertToCelsius = function(fahrenheitTemp) {
  // Fahrenheit to Celsius Formula
  // x °F ≘ (x-32) * (5/9) °C
  let celsiusTemp = (fahrenheitTemp - 32) * (5/9);
  let roundedTemp = Math.round(celsiusTemp*10)/10;
  return roundedTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  // Celsius to Fahrenheit Formula
  // x °C ≘ (x * 9/5 + 32)
  let fahrenheitTemp = (celsiusTemp * (9/5) +32);  
  let roundedTemp = Math.round(fahrenheitTemp*10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
