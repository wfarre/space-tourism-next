"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const ImgDestination = () => {
  const path = usePathname();
  const currentName = path.split("/")[2];
  return (
    <Image
      className="h-[150px] w-[150px] md:h-[300px] md:w-[300px] xl:h-[480px] xl:w-[480px]"
      src={`/assets/destination/image-${currentName}.webp`}
      height={480}
      width={480}
      alt={currentName}
    />
  );
};

export default ImgDestination;
