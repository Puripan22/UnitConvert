const temperatureConversionFactors = {
  celsius: {
    fahrenheit: (celsius) => (celsius * 9/5) + 32,
    kelvin: (celsius) => celsius + 273.15,
  },
  fahrenheit: {
    celsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
    kelvin: (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15,
  },
  kelvin: {
    celsius: (kelvin) => kelvin - 273.15,
    fahrenheit: (kelvin) => (kelvin - 273.15) * 9/5 + 32,
  },
};

export default temperatureConversionFactors;
