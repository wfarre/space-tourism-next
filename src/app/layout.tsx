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
  const pathname = path === "/" ? "home" : path.split("/")[1];

  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.className} ${bellefair.variable} ${barlowCondensed.variable} relative bg-slate-950 text-white antialiased`}
      >
        <Image
          className="absolute top-0 left-0 -z-10 hidden h-full w-full xl:block"
          src={`/assets/${pathname}/background-${pathname}-desktop.jpg`}
          alt=""
          fill={true}
        />
        <Image
          className="absolute top-0 left-0 -z-10 hidden h-full w-full md:block xl:hidden"
          src={`/assets/${pathname}/background-${pathname}-tablet.jpg`}
          alt=""
          fill={true}
        />
        <Image
          className="absolute top-0 left-0 -z-10 h-full w-full md:hidden"
          src={`/assets/${pathname}/background-${pathname}-mobile.jpg`}
          alt=""
          fill={true}
        />
        <div className="relative mx-auto min-h-[100vh] max-w-[1440px] text-base">
          <header className="relative lg:py-10">
            <Navbar />
          </header>
          <main
            className={`${!path.includes("technology") ? "mx-6 md:mx-10 xl:mx-[165px]" : "mr-0 xl:ml-[165px]"} mt-6 xl:mt-12`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
