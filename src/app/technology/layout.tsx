"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PageHeader from "../components/layout/PageHeader";
import { useEffect, useState } from "react";

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [imagePath, setImagePath] = useState("space-capsule");
  const links = ["vehicle", "spaceport", "capsule"];
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
    <section>
      <div className="ml-6 md:ml-10 xl:ml-0">
        <PageHeader index="03" title="SPACE LAUNCH 101" />
      </div>

      <div className="mt-22 flex flex-col items-center gap-8 xl:mt-0 xl:flex-row">
        <ul className="order-2 mb-2 flex gap-8 xl:mr-8 xl:flex-col">
          {links.map((link, index) => {
            return (
              <li key={`techno-link-${index}`}>
                <Link
                  href={`${link}`}
                  className={`font-title flex h-10 w-10 items-center justify-center rounded-full border text-lg md:h-14 md:w-14 md:text-2xl xl:h-20 xl:w-20 xl:text-[32px] ${path.includes(link) ? "border-white bg-white text-slate-950" : "border-white/50 bg-transparent text-white"} hover:bg-white hover:text-slate-950`}
                >
                  {index + 1}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="order-3 mx-6 md:mx-auto md:w-128 xl:w-auto">
          {children}
        </div>
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
      </div>
    </section>
  );
};

export default PageLayout;
