"use client"
import Image from "next/image";
import Link from "next/link";
import Text from "../components/text.jsx"
import Footer from "../components/footer.jsx"
import { useRef, useEffect } from "react";
export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textRef.current.scrollIntoView({ behavior: "smooth" });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    const target = document.querySelector('.backgound-1');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);


  return (
    <main className="flex h-full w-full flex-col ">
      <div className="backgound-1 h-full w-full flex items-center justify-center p-8" style={{
        backgroundImage: "url('/jpg2.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "90.7vh",
      }}>
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
      <div ref={textRef}>
      <Text/>
      </div>
    </main>
  );
}
