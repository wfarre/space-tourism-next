"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Destination", to: "/destination" },
    { title: "Crew", to: "/crew" },
    { title: "Technology", to: "/technology" },
  ];

  const path = usePathname();
  return (
    <nav className="flex items-center justify-between pl-16 h-24">
      <Image
        src={"/assets/shared/logo.svg"}
        height={48}
        width={48}
        alt="Space toursim home"
      />
      <div className="h-[1px] w-[calc((560_/_1440)_*_100vw)] bg-white absolute top-1/2 left-44 max-w-[560px]"></div>

      <ul className="flex gap-12 uppercase bg-white/10 h-full items-center pr-16 pl-40">
        {navLinks.map((link, index) => {
          return (
            <li
              key={`navlink-${index}`}
              className={`flex items-center relative h-full`}
            >
              <Link
                href={link.to}
                className="h-full flex items-center group tracking-[2px] "
              >
                <span className="font-bold mr-3">0{index}</span> {link.title}
                <div
                  className={`absolute bottom-0 left-0 w-full bg-white h-1 scale-0 group-hover:scale-100 duration-300 ${
                    path === link.to ? "scale-100" : "scale-0"
                  }`}
                ></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
