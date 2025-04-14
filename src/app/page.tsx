import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Space Tourism | Home",
  description: "You want to travel to space?",
};

export default function Home() {
  return (
    <>
      <section className="bottom-32 left-0 mx-6 mt-6 flex flex-col items-center justify-between gap-y-30 pb-32 text-center md:mx-[128px] md:mt-[128px] md:gap-y-16 xl:absolute xl:mx-[165px] xl:flex-row xl:text-left">
        <div className="max-w-[512px] xl:w-1/2 xl:max-w-none">
          <h1>
            <span className="font-main block text-base tracking-widest text-slate-300 md:text-[28px]">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <span className="font-title block text-[80px] md:text-[144px]">
              SPACE
            </span>
          </h1>
          <p className="text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          href={"/destination/moon"}
          className="font-title relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-white text-lg tracking-widest text-slate-900 uppercase transition-all duration-300 before:absolute before:top-1/2 before:left-1/2 before:-z-[5] before:h-80 before:w-80 before:-translate-1/2 before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:duration-300 hover:before:scale-100 hover:before:opacity-20 md:h-59 md:w-59 md:text-[32px]"
        >
          Explore
        </Link>
      </section>
    </>
  );
}
