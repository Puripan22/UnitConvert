"use client"
import React, { useState } from "react";
import "./si.css"
import conversionFactors from "./conversionFactors";

function App() {
  const [inputs, setInputs] = useState([{ id: 1, value: 0, fromUnit: "meter", toUnit: "kilometer" }]);

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const newInputs = inputs.map(input => input.id === id ? { ...input, [name]: value === "" ? 0 : parseFloat(value) } : input);
    setInputs(newInputs);
  };

  const handleFromUnitChange = (id, e) => {
    const { value } = e.target;
    const newInputs = inputs.map(input => input.id === id ? { ...input, fromUnit: value } : input);
    setInputs(newInputs);
  };

  const handleToUnitChange = (id, e) => {
    const { value } = e.target;
    const newInputs = inputs.map(input => input.id === id ? { ...input, toUnit: value } : input);
    setInputs(newInputs);
  };

  const handleConvert = (id) => {
    const input = inputs.find(input => input.id === id);
    const { value, fromUnit, toUnit } = input;
    const factor = conversionFactors[fromUnit][toUnit];
    if (factor !== undefined) {
      const result = value * factor;
      const newInputs = inputs.map(input => input.id === id ? { ...input, result } : input);
      setInputs(newInputs);
    } else {
      const newInputs = inputs.map(input => input.id === id ? { ...input, result: "Conversion factor not defined" } : input);
      setInputs(newInputs);
    }
  };

  const handleAddInput = () => {
    if (inputs.length < 8) {
      const newId = Math.max(...inputs.map(input => input.id)) + 1;
      setInputs([...inputs, { id: newId, value: 0, fromUnit: "meter", toUnit: "kilometer" }]);
    }
  };

  return (
    <div className="App">
      <h1>Volume Unit Converter</h1>
      {inputs.map((input) => (
        <div key={input.id}>
          <input
            type="number"
            name="value"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e)}
            placeholder="Enter value"
          />
          <select name="fromUnit" value={input.fromUnit} onChange={(e) => handleFromUnitChange(input.id, e)}>
            {Object.keys(conversionFactors).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select name="toUnit" value={input.toUnit} onChange={(e) => handleToUnitChange(input.id, e)}>
            {Object.keys(conversionFactors[input.fromUnit]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <button onClick={() => handleConvert(input.id)}>Convert</button>
          <p>
            {input.value} {input.fromUnit} is equal to {input.result} {input.toUnit}
          </p>
        </div>
      ))}
      {inputs.length < 8 && <button onClick={handleAddInput}>Add Input</button>}
    </div>
  );
}

export default App;
