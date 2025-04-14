"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const PageBackground = () => {
  const path = usePathname();
  const pathname = path === "/" ? "home" : path.split("/")[1];
  return (
    <>
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
    </>
  );
};

export default PageBackground;
