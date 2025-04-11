"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Destination", to: "/destination" },
    { title: "Crew", to: "/crew" },
    { title: "Technology", to: "/technology" },
  ];

  const path = usePathname();
  return (
    <nav className="flex items-center justify-between pl-4 md:pl-10 lg:pl-16 h-24 z-50 relative">
      <Image
        className="h-10 w-10 md:w-12 md:h-12"
        src={"/assets/shared/logo.svg"}
        height={48}
        width={48}
        alt="Space toursim home"
      />
      <div className="h-[1px] w-[calc((560_/_1440)_*_100vw)] bg-white absolute top-1/2 left-44 max-w-[560px] scale-0 xl:scale-100"></div>

      <div className="md:hidden">
        <button
          className="z-50 mr-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={
              isMenuOpen
                ? "/assets/shared/icon-close.svg"
                : "/assets/shared/icon-hamburger.svg"
            }
            height={24}
            width={24}
            alt={`${isMenuOpen ? "close" : "open"} navigation`}
          />
        </button>
      </div>

      <ul
        className={`pl-8 pt-34 md:pt-0 absolute top-0 right-0 md:relative flex flex-col w-64 md:w-auto h-[100vh] md:flex-row gap-y-8 gap-x-12 uppercase bg-white/30 md:h-full md:items-center md:pr-10 lg:pr-16 md:pl-29 lg:pl-40 -z-10 md:z-auto md:scale-100 ${
          isMenuOpen ? "scale-x-100" : "scale-x-0"
        } duration-300 origin-right`}
      >
        {navLinks.map((link, index) => {
          return (
            <li
              key={`navlink-${index}`}
              className={`flex items-center relative md:h-full`}
            >
              <Link
                href={link.to}
                className="h-full flex items-center group tracking-[2px] "
              >
                <span className="font-bold mr-3">0{index}</span> {link.title}
                <div
                  className={`absolute bottom-0 right-0 md:w-full h-full w-1 bg-white md:h-1 scale-0 group-hover:scale-100 duration-300 ${
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
