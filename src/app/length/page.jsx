"use client";
import React, { useState } from "react";
import "./metric.css";
import conversionFactors from "./conversionFactors";
import prefixes from "./prefixes";

function App() {
  const [inputs, setInputs] = useState([
    { id: 1, value: 0, fromUnit: "meter", toUnit: "meter", result: 0, fromPrefix: '', toPrefix: '' }
  ]);

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const newInputs = inputs.map(input =>
      input.id === id ? { ...input, [name]: value === "" ? 0 : parseFloat(value) } : input
    );
    setInputs(newInputs);
  };

  const handleUnitChange = (id, e) => {
    const { name, value } = e.target;
    const newInputs = inputs.map(input => input.id === id ? { ...input, [name]: value } : input);
    setInputs(newInputs);
  };

  const handleConvert = (id) => {
    const input = inputs.find(input => input.id === id);
    const { value, fromUnit, toUnit, fromPrefix, toPrefix } = input;

    const fromFactor = prefixes[fromPrefix] || 1;
    const toFactor = prefixes[toPrefix] || 1;
    const baseValue = value * fromFactor;
    const factor = conversionFactors[fromUnit]?.[toUnit];

    const result = factor !== undefined ? (baseValue * factor) / toFactor : "Conversion factor not defined";
    const newInputs = inputs.map(input => input.id === id ? { ...input, result } : input);
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    
      const newId = Math.max(...inputs.map(input => input.id)) + 1;
      setInputs([
        ...inputs, 
        { id: newId, value: 0, fromUnit: "meter", toUnit: "meter", result: 0, fromPrefix: '', toPrefix: '' }
      ]);
    
  };

  return (
    <div className="App">
      <h1>Length Unit Converter</h1>
      {inputs.map(input => (
        <div key={input.id} className="conversion-input">
          <input
            type="number"
            name="value"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e)}
            placeholder="Enter value"
          />
          <select name="fromPrefix" value={input.fromPrefix} onChange={(e) => handleUnitChange(input.id, e)}>
            {Object.keys(prefixes).map(prefix => (
              <option key={prefix} value={prefix}>
                {prefix}
              </option>
            ))}
          </select>
          <select name="fromUnit" value={input.fromUnit} onChange={(e) => handleUnitChange(input.id, e)}>
            {Object.keys(conversionFactors).map(unit => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select name="toPrefix" value={input.toPrefix} onChange={(e) => handleUnitChange(input.id, e)}>
            {Object.keys(prefixes).map(prefix => (
              <option key={prefix} value={prefix}>
                {prefix}
              </option>
            ))}
          </select>
          <select name="toUnit" value={input.toUnit} onChange={(e) => handleUnitChange(input.id, e)}>
            {Object.keys(conversionFactors[input.fromUnit]).map(unit => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <button onClick={() => handleConvert(input.id)}>Convert</button>
          {input.result !== undefined && (
            <p>
              {input.value} {input.fromPrefix} {input.fromUnit} is equal to {input.result} {input.toPrefix} {input.toUnit}
            </p>
          )}
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
}

export default App;
