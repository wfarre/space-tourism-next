"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ImgTechnology = () => {
  const [imagePath, setImagePath] = useState("space-capsule");
  const path = usePathname();

  useEffect(() => {
    const currentTechnoPath = path.split("/")[2];
    switch (currentTechnoPath) {
      case "vehicle":
        setImagePath("launch-vehicle");
        break;
      case "spaceport":
        setImagePath("spaceport");
        break;
      case "capsule":
        setImagePath("space-capsule");
        break;
      default:
        setImagePath("space-capsule");
        break;
    }
  }, [path]);
  return (
    <>
      <Image
        className="order-1 w-full object-cover xl:hidden"
        src={`/assets/technology/image-${imagePath}-landscape.jpg`}
        alt={imagePath}
        height={310}
        width={768}
        priority={false}
      />
      <Image
        className="hidden h-[734px] w-[608px] object-contain xl:order-3 xl:block"
        src={`/assets/technology/image-${imagePath}-portrait.jpg`}
        alt={imagePath}
        height={527}
        width={510}
        priority={false}
      />
    </>
  );
};

export default ImgTechnology;
