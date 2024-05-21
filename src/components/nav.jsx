"use client"
import React from "react";
import Link from "next/link";

function nav() {
  return (
    <div className="w-full flex p-2  bg-slate-200 h-auto items-center  ">
      <Link href="/" className="m-4 text-4xl font-bold ml-40 transition-transform duration-300 hover:scale-110">UnitConvert</Link>
      <Link href="/length" className="m-4 ml-16 font-semibold text-lg transition-transform duration-200 hover:scale-110">Length</Link>
      <Link href="/temperature" className="m-4 font-semibold text-lg transition-transform duration-200 hover:scale-110">Temperature</Link>
      <Link href="/area" className="m-4 font-semibold text-lg transition-transform duration-200 hover:scale-110">Area</Link>
      <Link href="/volume" className="m-4 font-semibold text-lg transition-transform duration-200 hover:scale-110">Volume</Link>
      <Link href="/weight" className="m-4 font-semibold text-lg transition-transform duration-200 hover:scale-110">Weight</Link>
      <Link href="/time" className="m-4 font-semibold text-lg transition-transform duration-200 hover:scale-110">Time</Link>
    </div>
  );
}

export default nav;
