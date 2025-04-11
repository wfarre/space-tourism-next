"use client";

import { Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
});

const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  console.log(path);
  const pathname = path === "/" ? "home" : path.split("/")[1];
  console.log(pathname);

  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.className} ${bellefair.variable} ${barlowCondensed.variable} antialiased bg-slate-950 text-white relative`}
      >
        <Image
          className="absolute top-0 left-0 h-full w-full -z-10"
          src={`/assets/${pathname}/background-${pathname}-desktop.jpg`}
          alt=""
          fill={true}
        />
        <div className=" min-h-[100vh]  max-w-[1440px] mx-auto relative">
          <header className="lg:py-10 relative ">
            <Navbar />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
