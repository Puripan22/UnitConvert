const conversionFactors = {
  meter: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    micrometer: 1e6,
    nanometer: 1e9,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
    nauticalMile: 0.000539957,
    lightYear: 1.057e-16,
  },
  kilometer: {
    kilometer: 1,
    meter: 1000,
    centimeter: 100000,
    millimeter: 1e6,
    micrometer: 1e9,
    nanometer: 1e12,
    mile: 0.621371,
    yard: 1093.61,
    foot: 3280.84,
    inch: 39370.1,
    nauticalMile: 0.539957,
    lightYear: 1.057e-13,
  },
  centimeter: {
    centimeter: 1,
    meter: 0.01,
    kilometer: 1e-5,
    millimeter: 10,
    micrometer: 10000,
    nanometer: 1e7,
    mile: 6.2137e-6,
    yard: 0.0109361,
    foot: 0.0328084,
    inch: 0.393701,
    nauticalMile: 5.3996e-6,
    lightYear: 1.057e-18,
  },
  millimeter: {
    millimeter: 1,
    meter: 0.001,
    kilometer: 1e-6,
    centimeter: 0.1,
    micrometer: 1000,
    nanometer: 1e6,
    mile: 6.2137e-7,
    yard: 0.00109361,
    foot: 0.00328084,
    inch: 0.0393701,
    nauticalMile: 5.3996e-7,
    lightYear: 1.057e-19,
  },
  micrometer: {
    micrometer: 1,
    meter: 1e-6,
    kilometer: 1e-9,
    centimeter: 1e-4,
    millimeter: 0.001,
    nanometer: 1000,
    mile: 6.2137e-10,
    yard: 1.0936e-6,
    foot: 3.2808e-6,
    inch: 3.937e-5,
    nauticalMile: 5.3996e-10,
    lightYear: 1.057e-22,
  },
  nanometer: {
    nanometer: 1,
    meter: 1e-9,
    kilometer: 1e-12,
    centimeter: 1e-7,
    millimeter: 1e-6,
    micrometer: 0.001,
    mile: 6.2137e-13,
    yard: 1.0936e-9,
    foot: 3.2808e-9,
    inch: 3.937e-8,
    nauticalMile: 5.3996e-13,
    lightYear: 1.057e-25,
  },
  mile: {
    mile: 1,
    meter: 1609.34,
    kilometer: 1.60934,
    centimeter: 160934,
    millimeter: 1.609e6,
    micrometer: 1.609e9,
    nanometer: 1.609e12,
    yard: 1760,
    foot: 5280,
    inch: 63360,
    nauticalMile: 0.868976,
    lightYear: 1.7011e-13,
  },
  yard: {
    yard: 1,
    meter: 0.9144,
    kilometer: 0.0009144,
    centimeter: 91.44,
    millimeter: 914.4,
    micrometer: 914400,
    nanometer: 914400000,
    mile: 0.000568182,
    foot: 3,
    inch: 36,
    nauticalMile: 0.000493737,
    lightYear: 9.6653e-17,
  },
  foot: {
    foot: 1,
    meter: 0.3048,
    kilometer: 0.0003048,
    centimeter: 30.48,
    millimeter: 304.8,
    micrometer: 304800,
    nanometer: 304800000,
    mile: 0.000189394,
    yard: 0.333333,
    inch: 12,
    nauticalMile: 0.000164579,
    lightYear: 3.2219e-16,
  },
  inch: {
    inch: 1,
    meter: 0.0254,
    kilometer: 2.54e-5,
    centimeter: 2.54,
    millimeter: 25.4,
    micrometer: 25400,
    nanometer: 25400000,
    mile: 1.5783e-5,
    yard: 0.0277778,
    foot: 0.0833333,
    nauticalMile: 1.3715e-5,
    lightYear: 2.6848e-17,
  },
  nauticalMile: {
    nauticalMile: 1,
    meter: 1852,
    kilometer: 1.852,
    centimeter: 185200,
    millimeter: 1.852e6,
    micrometer: 1.852e9,
    nanometer: 1.852e12,
    mile: 1.15078,
    yard: 2025.37,
    foot: 6076.12,
    inch: 72913.4,
    lightYear: 1.957e-13,
  },
  lightYear: {
    lightYear: 1,
    meter: 9.461e15,
    kilometer: 9.461e12,
    centimeter: 9.461e17,
    millimeter: 9.461e18,
    micrometer: 9.461e21,
    nanometer: 9.461e24,
    mile: 5.8786e12,
    yard: 1.0356e16,
    foot: 3.1069e16,
    inch: 3.7282e17,
    nauticalMile: 5.108e12,
  },
};

export default conversionFactors;
