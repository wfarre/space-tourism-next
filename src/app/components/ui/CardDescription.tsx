import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  desc: string;
  children?: React.ReactNode;
}

const CardDescription = (props: Props) => {
  return (
    <article className="text-center xl:text-left">
      <header className="mb-6">
        <p className="mb-4 leading-none text-white/50 uppercase md:text-2xl xl:text-[32px]">
          {props.subtitle}
        </p>
        <h2 className="font-title leading-none uppercase md:text-[40px] xl:text-[56px]">
          {props.title}
        </h2>
      </header>
      <p className="text-base text-slate-300 xl:text-lg">{props.desc}</p>
      {props.children}
    </article>
  );
};

export default CardDescription;
