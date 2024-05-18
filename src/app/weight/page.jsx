"use client";
import React, { useState } from "react";
import "./si.css";
import weightConversionFactors from "./conversionFactors";

function App() {
  const [inputs, setInputs] = useState([
    { id: 1, value: 0, fromUnit: "kilogram", toUnit: "gram", result: 0 },
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

  const handleConvert = (id) => {
    const { value, fromUnit, toUnit } = inputs.find((input) => input.id === id);
    const conversionFunction = weightConversionFactors[fromUnit][toUnit];
    if (conversionFunction !== undefined) {
      const result = conversionFunction(value);
      setInputs((prevInputs) =>
        prevInputs.map((input) =>
          input.id === id ? { ...input, result } : input
        )
      );
    } else {
      setInputs((prevInputs) =>
        prevInputs.map((input) =>
          input.id === id ? { ...input, result: "Conversion factor not defined" } : input
        )
      );
    }
  };

  const handleAddInput = () => {
    const newId = inputs.length + 1;
    setInputs((prevInputs) => [
      ...prevInputs,
      { id: newId, value: 0, fromUnit: "kilogram", toUnit: "gram", result: 0 },
    ]);
  };

  return (
    <div className="App">
      <h1>Weight Unit Converter</h1>
      {inputs.map((input) => (
        <div key={input.id} className="conversion-input">
          <input
            type="number"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e)}
            placeholder="Enter value"
          />
          <select value={input.fromUnit} onChange={(e) => handleFromUnitChange(input.id, e)}>
            {Object.keys(weightConversionFactors).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select value={input.toUnit} onChange={(e) => handleToUnitChange(input.id, e)}>
            {weightConversionFactors[input.fromUnit] ? (
              Object.keys(weightConversionFactors[input.fromUnit]).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))
            ) : (
              <option value="">Select a unit</option>
            )}
          </select>
          <button onClick={() => handleConvert(input.id)}>Convert</button>
          <p>
            {input.value} {input.fromUnit} is equal to {input.result} {input.toUnit}
          </p>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
}

export default App;
