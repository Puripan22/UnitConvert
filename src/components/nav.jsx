"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

function nav() {
  return (
    <div className="w-full flex p-2  bg-green-500 h-auto items-center  ">
      <Link href="/" className="m-4 text-4xl font-bold ml-40 transition-transform duration-300 hover:scale-110  text-white">UnitConvert</Link>
      <Link href="/length" className="m-4 ml-16 font-semibold text-xl transition-transform duration-200 hover:scale-110 text-white">Length</Link>
      <Link href="/temperature" className="m-4 font-semibold text-xl transition-transform duration-200 hover:scale-110 text-white">Temperature</Link>
      <Link href="/area" className="m-4 font-semibold text-xl transition-transform duration-200 hover:scale-110 text-white">Area</Link>
      <Link href="/volume" className="m-4 font-semibold text-xl transition-transform duration-200 hover:scale-110 text-white">Volume</Link>
      <Link href="/weight" className="m-4 font-semibold text-xl transition-transform duration-200 hover:scale-110 text-white">Weight</Link>
      <Link href="/time" className="m-4 font-semibold text-xl transition-transform duration-200 hover:scale-110 text-white">Time</Link>
    </div>
  );
}

export default nav;
