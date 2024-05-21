"use client"
import Image from "next/image";
import Link from "next/link";
import Text from "../components/text.jsx"
import Footer from "../components/footer.jsx"
import { useRef, useEffect } from "react";
export default function Home() {
  

  return (
    <main className="flex h-full w-full flex-col ">
      <div className="backgound-1 h-full w-full flex items-center justify-center p-8  bg-gradient-to-b from-gray-300 to-slate-200" >
        <iframe
          width="1400"
          height="795"
          src="https://www.youtube.com/embed/5iXyyQBGl-Y"
          title="Learn the Metric System in 5 minutes"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className=" rounded-xl"
        ></iframe>
      </div>
      <div >
      <Text/>
      </div>
    </main>
  );
}
