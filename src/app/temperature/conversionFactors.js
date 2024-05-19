const temperatureConversionFactors = {
  celsius: {
    celsius: (celsius) => celsius * 1,
    fahrenheit: (celsius) => (celsius * 9/5) + 32,
    kelvin: (celsius) => celsius + 273.15,
  },
  fahrenheit: {
    fahrenheit: (fahrenheit) => fahrenheit * 1,
    celsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
    kelvin: (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15,
  },
  kelvin: {
    kelvin: (kelvin) => kelvin * 1,
    celsius: (kelvin) => kelvin - 273.15,
    fahrenheit: (kelvin) => (kelvin - 273.15) * 9/5 + 32,
  },
};

export default temperatureConversionFactors;
