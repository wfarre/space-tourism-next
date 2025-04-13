"use client";

import React from "react";
import PageHeader from "../components/layout/PageHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const links = ["specialist", "pilot", "engineer", "commander"];

  const path = usePathname();
  return (
    <section className="relative">
      <PageHeader index={"02"} title={"Meet your crew"} />
      {children}
      <footer className="absolute top-[291px] w-full xl:relative xl:top-[-32px]">
        <ul className="flex justify-center gap-4 xl:justify-start xl:gap-10">
          {links.map((link, index) => {
            return (
              <li key={`crew-link-${index}`}>
                <Link href={`/crew/${link}`}>
                  <div
                    className={`h-2.5 w-2.5 rounded-full xl:h-4 xl:w-4 ${path.includes(link) ? "bg-white" : "bg-white/50"}`}
                  >
                    {" "}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </section>
  );
};

export default PageLayout;
