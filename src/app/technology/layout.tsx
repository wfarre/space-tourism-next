import { Metadata } from "next";
import PageHeader from "../components/layout/PageHeader";
import ImgTechnology from "../components/ui/ImgTechnology";
import NavTechnology from "../components/ui/NavTechnology";

export const metadata: Metadata = {
  title: "Space Tourism | Technology",
  description: "Discover our technology",
};

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <div className="ml-6 md:ml-10 xl:ml-0">
        <PageHeader index="03" title="SPACE LAUNCH 101" />
      </div>

      <div className="mt-22 flex flex-col items-center gap-8 xl:mt-0 xl:flex-row">
        <NavTechnology />
        <div className="order-3 mx-6 md:mx-auto md:w-128 xl:w-auto">
          {children}
        </div>
        <ImgTechnology />
      </div>
    </section>
  );
};

export default PageLayout;
