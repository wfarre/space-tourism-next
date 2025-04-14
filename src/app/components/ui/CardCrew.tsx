import Image from "next/image";
import React from "react";
import CardDescription from "./CardDescription";
interface Props {
  title: string;
  name: string;
  desc: string;
  img: string;
  imgW: number;
  imgH: number;
}

const CardCrew = (props: Props) => {
  return (
    <div className="mt-6 flex min-h-[700px] flex-col items-center gap-8 gap-y-16 pt-10 text-center md:min-h-[800px] md:justify-between md:px-22 xl:mt-0 xl:h-[676px] xl:min-h-auto xl:flex-row xl:px-0 xl:pt-0 xl:text-left">
      <div className="xl:flex-1">
        <CardDescription
          title={props.name}
          subtitle={props.title}
          desc={props.desc}
        />
      </div>
      <div className="md:h-[560px] xl:h-full xl:flex-1">
        <Image
          className="h-full w-auto mask-b-from-70% mask-b-to-100% xl:object-contain"
          src={props.img}
          height={props.imgH}
          width={props.imgW}
          alt={props.name}
        />
      </div>
    </div>
  );
};

export default CardCrew;
