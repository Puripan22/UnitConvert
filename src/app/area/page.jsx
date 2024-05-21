"use client";
import React, { useState } from "react";
import "./metric.css";
import areaConversionFactors from "./areaConversionFactors";

function App() {
  const [inputs, setInputs] = useState([
    { id: 1, value: 0, fromUnit: "squareMeter", toUnit: "squareKilometer", digits: "Select digits" },
  ]);

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const newInputs = inputs.map((input) =>
      input.id === id
        ? { ...input, [name]: value === "" ? 0 : parseFloat(value) }
        : input
    );
    setInputs(newInputs);
  };

  const handleFromUnitChange = (id, e) => {
    const { value } = e.target;
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, fromUnit: value } : input
    );
    setInputs(newInputs);
  };

  const handleToUnitChange = (id, e) => {
    const { value } = e.target;
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, toUnit: value } : input
    );
    setInputs(newInputs);
  };

  const handleDigitsChange = (id, e) => {
    const { value } = e.target;
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, digits: value } : input
    );
    setInputs(newInputs);
  };

  const handleConvert = (id) => {
    const input = inputs.find((input) => input.id === id);
    const { value, fromUnit, toUnit, digits } = input;
    const factor = areaConversionFactors[fromUnit][toUnit];
    if (factor !== undefined) {
      const result = value * factor;
      const newInputs = inputs.map((input) =>
        input.id === id ? { ...input, result } : input
      );
      setInputs(newInputs);
    } else {
      const newInputs = inputs.map((input) =>
        input.id === id
          ? { ...input, result: "Conversion factor not defined" }
          : input
      );
      setInputs(newInputs);
    }
  };

  const handleAddInput = () => {
    if (inputs.length < 7) {
      const newId = Math.max(...inputs.map((input) => input.id)) + 1;
      setInputs([
        ...inputs,
        {
          id: newId,
          value: 0,
          fromUnit: "squareMeter",
          toUnit: "squareKilometer",
          digits: "Select digits",
        },
      ]);
    }
  };

  const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App bg-slate-200">
      <h1 className="font-bold text-3xl pt-4">Area Unit Converter</h1>
      {inputs.map((input) => (
        <div key={input.id}>
          <input
            type="number"
            name="value"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e)}
            placeholder="Enter value"
          />
          <select
            name="fromUnit"
            value={input.fromUnit}
            onChange={(e) => handleFromUnitChange(input.id, e)}
          >
            {Object.keys(areaConversionFactors).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select
            name="toUnit"
            value={input.toUnit}
            onChange={(e) => handleToUnitChange(input.id, e)}
          >
            {areaConversionFactors[input.fromUnit] &&
              Object.keys(areaConversionFactors[input.fromUnit]).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
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
