import Link from "next/link";
import React from "react";

interface Props {
  isMenuOpen: boolean;
  links: { title: string; to: string }[];
  path: string;
}

const Navigation = (props: Props) => {
  return (
    <ul
      className={`absolute top-0 right-0 -z-10 flex h-[100vh] w-64 flex-col gap-x-12 gap-y-8 bg-white/10 pt-34 pl-8 uppercase backdrop-blur-2xl md:relative md:z-auto md:h-full md:w-auto md:scale-100 md:flex-row md:items-center md:pt-0 md:pr-10 md:pl-29 lg:pr-16 lg:pl-40 ${
        props.isMenuOpen ? "scale-x-100" : "scale-x-0"
      } origin-right duration-300`}
    >
      {props.links.map((link, index) => {
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
                  props.path.includes(link.title.toLowerCase())
                    ? "scale-100"
                    : "scale-0"
                }`}
              ></div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
