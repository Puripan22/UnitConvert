
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/nav.jsx"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App",
  description: "Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="relative flex flex-col h-screen z-10">
         <Nav/>
        {children}
      </div>
        </body>
    </html>
  );
}
