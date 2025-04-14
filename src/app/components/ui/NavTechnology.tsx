"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavTechnology = () => {
  const links = ["vehicle", "spaceport", "capsule"];
  const path = usePathname();
  return (
    <ul className="order-2 mb-2 flex gap-8 xl:mr-8 xl:flex-col">
      {links.map((link, index) => {
        return (
          <li key={`techno-link-${index}`}>
            <Link
              href={`${link}`}
              className={`font-title relative flex h-10 w-10 items-center justify-center rounded-full border text-lg md:h-14 md:w-14 md:text-2xl xl:h-20 xl:w-20 xl:text-[32px] ${path.includes(link) ? "border-white bg-white text-slate-950" : "border-white/50 bg-transparent text-white"} duration-300 hover:bg-white hover:text-slate-950`}
            >
              {index + 1}
              <span className="absolute top-0 left-0 scale-0 opacity-0">{`Link to the ${link}'s page`}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavTechnology;
