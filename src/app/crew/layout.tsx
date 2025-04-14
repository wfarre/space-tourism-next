import React from "react";
import PageHeader from "../components/layout/PageHeader";
import { Metadata } from "next";
import NavCrew from "../components/ui/NavCrew";

export const metadata: Metadata = {
  title: "Space Tourism | Crew",
  description: "Meet our crews",
};

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="relative">
      <PageHeader index={"02"} title={"Meet your crew"} />
      {children}
      <footer className="absolute top-[291px] w-full xl:relative xl:top-[-32px]">
        <NavCrew />
      </footer>
    </section>
  );
};

export default PageLayout;
