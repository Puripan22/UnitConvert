"use client"
import React from "react";
import Link from "next/link";

function nav() {
  return (
    <div className="w-full flex p-2 border border-black bg-slate-400 h-auto items-center">
      <Link href="/" className="m-4 text-4xl font-bold ml-40">UnitConvert</Link>
      <Link href="/length" className="m-4 ml-16 font-semibold">Length</Link>
      <Link href="/temperature" className="m-4 font-semibold">Temperature</Link>
      <Link href="/area" className="m-4 font-semibold">Area</Link>
      <Link href="/volume" className="m-4 font-semibold">Volume</Link>
      <Link href="/weight" className="m-4 font-semibold">Weight</Link>
      <Link href="/time" className="m-4 font-semibold">Time</Link>
    </div>
  );
}

export default nav;
