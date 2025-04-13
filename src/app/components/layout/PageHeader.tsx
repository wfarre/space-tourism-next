import React from "react";
interface Props {
  index: string;
  title: string;
}

const pageHeader = (props: Props) => {
  return (
    <header>
      <h1 className="flex justify-center gap-6 text-center text-base uppercase md:justify-start md:text-left md:text-xl xl:text-[28px]">
        <span className="font-bold text-white/50">{props.index}</span>{" "}
        {props.title}
      </h1>
    </header>
  );
};

export default pageHeader;
