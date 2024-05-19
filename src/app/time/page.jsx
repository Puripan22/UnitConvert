"use client";
import React, { useState } from "react";
import "./si.css";
import timeConversionFactors from "./conversionFactors";

function App() {
  const [inputs, setInputs] = useState([
    { id: 1, value: 0, fromUnit: "second", toUnit: "minute" },
  ]); // เริ่มต้นด้วยหน่วยเวลา
  const [digits, setDigits] = useState("Select digits");

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

  const handleConvert = (id) => {
    const input = inputs.find((input) => input.id === id);
    const { value, fromUnit, toUnit } = input;
    const factor = timeConversionFactors[fromUnit][toUnit];
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
        { id: newId, value: 0, fromUnit: "second", toUnit: "minute" },
      ]);
    }
  };

  const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('/jpg2.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "90.7vh",
      }}
    >
      <h1 className=" font-bold text-3xl ">Time Unit Converter</h1>
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
            {Object.keys(timeConversionFactors).map((unit) => (
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
            {Object.keys(timeConversionFactors[input.fromUnit]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select
            name="digits"
            id=""
            onChange={(e) => setDigits(e.target.value)}
          >
            <option value={null}>Select digits</option>
            {Number.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button onClick={() => handleConvert(input.id)}>Convert</button>
          <div>
            {digits === "Select digits" ? (
              <p>
                {input.value} {input.fromUnit} is equal to{" "}
                {input.result !== undefined ? input.result : "N/A"}{" "}
                {input.toUnit}
              </p>
            ) : (
              <p>
                {input.value} {input.fromUnit} is equal to{" "}
                {input.result !== undefined
                  ? input.result.toFixed(parseInt(digits))
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
