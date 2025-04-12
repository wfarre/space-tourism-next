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
        className={`${barlowCondensed.className} ${bellefair.variable} ${barlowCondensed.variable} relative bg-slate-950 text-white antialiased`}
      >
        <Image
          className="absolute top-0 left-0 -z-10 h-full w-full"
          src={`/assets/${pathname}/background-${pathname}-desktop.jpg`}
          alt=""
          fill={true}
        />
        <div className="relative mx-auto min-h-[100vh] max-w-[1440px] text-base">
          <header className="relative lg:py-10">
            <Navbar />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
