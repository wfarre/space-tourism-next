"use client";

import { Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { usePathname } from "next/navigation";
import PageBackground from "./components/layout/PageBackground";

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

  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.className} ${bellefair.variable} ${barlowCondensed.variable} relative min-h-[100vh] bg-slate-950 text-white antialiased`}
      >
        <PageBackground />
        <div className="relative mx-auto h-full max-w-[1440px] text-base">
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
