"use client";
import React, { useState } from "react";
import "./si.css";
import weightConversionFactors from "./conversionFactors";

function App() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      value: 0,
      fromUnit: "gram",
      toUnit: "kilogram",
      result: 0,
      digits: "Select digits",
    },
  ]);

  const handleInputChange = (id, e) => {
    const { value } = e.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, value: parseFloat(value) } : input
      )
    );
  };

  const handleFromUnitChange = (id, e) => {
    const { value } = e.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, fromUnit: value } : input
      )
    );
  };

  const handleToUnitChange = (id, e) => {
    const { value } = e.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, toUnit: value } : input
      )
    );
  };

  const handleDigitsChange = (id, e) => {
    const { value } = e.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, digits: value } : input
      )
    );
  };

  const handleConvert = (id) => {
    const { value, fromUnit, toUnit } = inputs.find((input) => input.id === id);
    const conversionFunction = weightConversionFactors[fromUnit][toUnit];
    if (conversionFunction) {
      const result = conversionFunction(value);
      setInputs((prevInputs) =>
        prevInputs.map((input) =>
          input.id === id ? { ...input, result } : input
        )
      );
    } else {
      setInputs((prevInputs) =>
        prevInputs.map((input) =>
          input.id === id
            ? { ...input, result: "Conversion factor not defined" }
            : input
        )
      );
    }
  };

  const handleAddInput = () => {
    if (inputs.length < 7) {
      const newId = inputs.length + 1;
      setInputs((prevInputs) => [
        ...prevInputs,
        {
          id: newId,
          value: 0,
          fromUnit: "gram",
          toUnit: "kilogram",
          result: 0,
          digits: "Select digits",
        },
      ]);
    }
  };

  const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App bg-gradient-to-b from-gray-200 to-slate-100">
      <h1 className="font-bold text-3xl pt-4">Weight Unit Converter</h1>
      {inputs.map((input) => (
        <div key={input.id} className="conversion-input">
          <input
            type="number"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e)}
            placeholder="Enter value"
          />
          <select
            value={input.fromUnit}
            onChange={(e) => handleFromUnitChange(input.id, e)}
          >
            {Object.keys(weightConversionFactors).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select
            value={input.toUnit}
            onChange={(e) => handleToUnitChange(input.id, e)}
          >
            {weightConversionFactors[input.fromUnit] ? (
              Object.keys(weightConversionFactors[input.fromUnit]).map(
                (unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                )
              )
            ) : (
              <option value="">Select a unit</option>
            )}
          </select>
          <select
            name="digits"
            value={input.digits}
            onChange={(e) => handleDigitsChange(input.id, e)}
          >
            <option value="Select digits">Select digits</option>
            {Number.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button onClick={() => handleConvert(input.id)}>Convert</button>
          <div>
            {input.digits === "Select digits" ? (
              <p>
                {input.value} {input.fromUnit} is equal to{" "}
                {input.result !== undefined ? input.result : "N/A"}{" "}
                {input.toUnit}
              </p>
            ) : (
              <p>
                {input.value} {input.fromUnit} is equal to{" "}
                {input.result !== undefined
                  ? input.result.toFixed(parseInt(input.digits))
                  : "N/A"}{" "}
                {input.toUnit}
              </p>
            )}
          </div>
        </div>
      ))}
      {inputs.length < 7 && <button onClick={handleAddInput}>Add Input</button>}
    </div>
  );
}

export default App;
