"use client"
import React, { useState } from "react";
import "./si.css";
import timeConversionFactors from "./conversionFactors"; 

function App() {
  const [inputs, setInputs] = useState([{ id: 1, value: 0, fromUnit: "second", toUnit: "minute" }]); // เริ่มต้นด้วยหน่วยเวลา

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
    const factor = timeConversionFactors[fromUnit][toUnit]; 
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
    
      const newId = Math.max(...inputs.map(input => input.id)) + 1;
      setInputs([...inputs, { id: newId, value: 0, fromUnit: "second", toUnit: "minute" }]); 
   
  };

  return (
    <div className="App">
      <h1>Time Unit Converter</h1>
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
            {Object.keys(timeConversionFactors).map((unit) => ( 
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select name="toUnit" value={input.toUnit} onChange={(e) => handleToUnitChange(input.id, e)}>
            {Object.keys(timeConversionFactors[input.fromUnit]).map((unit) => ( 
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
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
}

export default App;
