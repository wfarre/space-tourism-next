"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const PageBackground = () => {
  const path = usePathname();
  const pathname = path === "/" ? "home" : path.split("/")[1];
  return (
    <div className="-z-10">
      <Image
        className="absolute top-0 left-0 hidden h-full w-full object-cover xl:block"
        src={`/assets/${pathname}/background-${pathname}-desktop.jpg`}
        alt=""
        width={1440}
        height={900}
      />
      <Image
        className="absolute top-0 left-0 hidden h-full w-full object-cover md:block xl:hidden"
        src={`/assets/${pathname}/background-${pathname}-tablet.jpg`}
        alt=""
        width={768}
        height={1024}
      />
      <Image
        className="absolute top-0 left-0 h-full w-full object-cover md:hidden"
        src={`/assets/${pathname}/background-${pathname}-mobile.jpg`}
        alt=""
        width={375}
        height={667}
      />
    </div>
  );
};

export default PageBackground;
