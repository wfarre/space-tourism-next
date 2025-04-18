"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavCrew = () => {
  const links = ["specialist", "pilot", "engineer", "commander"];
  const path = usePathname();
  return (
    <ul className="flex justify-center gap-4 xl:justify-start xl:gap-10">
      {links.map((link, index) => {
        return (
          <li key={`crew-link-${index}`}>
            <Link href={`/crew/${link}`}>
              <div
                className={`relative h-2.5 w-2.5 rounded-full xl:h-4 xl:w-4 ${path.includes(link) ? "bg-white" : "bg-white/50"} duration-300 hover:bg-white`}
              >
                {" "}
                <span className="absolute top-0 left-0 scale-0">{`visit the ${link}'s page`}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavCrew;
