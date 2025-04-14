"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Destination", to: "/destination/moon" },
    { title: "Crew", to: "/crew/specialist" },
    { title: "Technology", to: "/technology/vehicle" },
  ];

  const path = usePathname();

  return (
    <nav className="relative z-50 flex h-24 items-center justify-between pl-4 md:pl-10 lg:pl-16">
      <Image
        className="h-10 w-10 md:h-12 md:w-12"
        src={"/assets/shared/logo.svg"}
        height={48}
        width={48}
        alt="Space toursim home"
      />
      <div className="absolute top-1/2 left-44 z-50 h-[1px] w-[calc((560_/_1440)_*_100vw)] max-w-[560px] scale-0 bg-white xl:scale-100"></div>

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
            height={21}
            width={24}
            alt={`${isMenuOpen ? "close" : "open"} navigation`}
          />
        </button>
      </div>

      <ul
        className={`absolute top-0 right-0 -z-10 flex h-[100vh] w-64 flex-col gap-x-12 gap-y-8 bg-white/10 pt-34 pl-8 uppercase backdrop-blur-2xl md:relative md:z-auto md:h-full md:w-auto md:scale-100 md:flex-row md:items-center md:pt-0 md:pr-10 md:pl-29 lg:pr-16 lg:pl-40 ${
          isMenuOpen ? "scale-x-100" : "scale-x-0"
        } origin-right duration-300`}
      >
        {navLinks.map((link, index) => {
          return (
            <li
              key={`navlink-${index}`}
              className={`relative flex items-center md:h-full`}
            >
              <Link
                href={link.to}
                className="group flex h-full items-center tracking-[2px]"
              >
                <span className="mr-3 font-bold">0{index}</span> {link.title}
                <div
                  className={`absolute right-0 bottom-0 h-full w-1 scale-0 bg-white duration-300 group-hover:scale-100 md:h-1 md:w-full ${
                    (path === "/" && path === link.to) ||
                    (path !== "/" && path.includes(link.title.toLowerCase()))
                      ? "scale-100"
                      : "scale-0"
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
