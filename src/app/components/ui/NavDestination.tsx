"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const destinationData = [
  {
    title: "moon",
    content:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384400",
    travelTime: {
      lenght: 3,
      unit: "days",
    },
  },
  {
    title: "Mars",
    content:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL.",
    travelTime: {
      lenght: 9,
      unit: "months",
    },
  },
  {
    title: "EUROPA",
    content:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL.",
    travelTime: {
      lenght: 3,
      unit: "years",
    },
  },
  {
    title: "titan",
    content:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL.",
    travelTime: {
      lenght: 7,
      unit: "years",
    },
  },
];

const NavDestination = () => {
  const path = usePathname();
  return (
    <ul className="mb-6 flex justify-center gap-8 xl:mb-10 xl:justify-start">
      {destinationData.map((dest, index) => {
        return (
          <li key={`destination-${index}`} className="group relative pb-3">
            <Link
              className="tracking-widest uppercase"
              href={`/destination/${dest.title.toLocaleLowerCase()}`}
            >
              {dest.title}
            </Link>
            <div
              className={`absolute right-0 bottom-0 h-1 w-full scale-0 bg-white duration-300 group-hover:scale-100 ${
                path.includes(dest.title.toLowerCase())
                  ? "scale-100"
                  : "scale-0"
              }`}
            ></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavDestination;
