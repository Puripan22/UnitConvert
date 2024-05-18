import Image from "next/image";
import Link from "next/link";
import Text from "../components/text.jsx"
import Text2 from "../components/text2.jsx"
import Footer from "../components/footer.jsx"
export default function Home() {
  return (
    <main className="flex h-full w-full flex-col ">
      <div className="backgound-1 h-full w-full flex items-center justify-center p-8" style={{ backgroundImage: "url('/images/jpg2.jpg')" }}>
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
      <Text/>
      
    </main>
  );
}
