"use client"
import { useState } from "react";
import test from "./function";

export default function TestPage() {
    const weightUnits = [
        "Kilogram",
        "Gram",
        "Milligram",
        "Microgram",
        "Metric ton",
        "Pound",
        "Ounce",
        "Stone",
        "Short ton",
        "Long ton"
    ];
    const [input, setInput] = useState(0)
    const [fromUnit, setFromUnit] = useState("Kilogram")
    const [toUnit, setToUnit] = useState("Kilogram")

    const convertFunction = test(input, fromUnit, toUnit)
    return (
        <div className="">
            <div className="ml-10">
                <div className="flex gap-4">
                    <div>
                        From <br />
                        <input
                            type="number"
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div>
                        To <br />
                        <input type="number" value={convertFunction}/>
                    </div>
                </div>
                <div>
                    <select name="" id="" size="10" onChange={(e) => { setFromUnit(e.target.value) }}>
                        {
                            weightUnits.map((val, index) => {
                                return (
                                    <option value={val} key={index}>
                                        {val}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <select
                        name=""
                        id=""
                        size="10"
                        onChange={(e) => { setToUnit(e.target.value) }}
                        className=" ml-36"
                    >
                        {
                            weightUnits.map((val, index) => (
                                <option value={val} key={index}>
                                    {val}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <span className="text-red-500 font-semibold text-2xl">result:</span> {convertFunction} {toUnit}
                </div>
            </div>
        </div>
    )
}