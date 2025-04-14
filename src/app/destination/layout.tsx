import PageHeader from "../components/layout/PageHeader";
import { Metadata } from "next";
import NavDestination from "../components/ui/NavDestination";
import ImgDestination from "../components/ui/ImgDestination";

export const metadata: Metadata = {
  title: "Space Tourism | Destination",
  description: "Discover our destinations",
};

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="">
      <PageHeader index={"01"} title={"Destination"} />
      <div className="flex-start my-12.5 flex flex-col items-center justify-between gap-x-8 gap-y-15 text-center md:mx-22 md:my-16.5 md:gap-y-18 xl:mx-0 xl:my-38 xl:flex-row xl:items-start xl:text-left">
        <div className="flex flex-1 items-center justify-center">
          <ImgDestination />
        </div>

        <div className="flex-1">
          <div className="px-[47px]">
            <NavDestination />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLayout;
