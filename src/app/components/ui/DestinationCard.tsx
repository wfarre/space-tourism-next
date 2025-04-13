import React from "react";
import DescriptionCard from "./DescriptionCard";

interface Props {
  title: string;
  content: string;
  distance: string;
  travelTime: {
    length: number;
    unit: string;
  };
}

const DestinationCard = (props: Props) => {
  return (
    <DescriptionCard title={props.title} desc={props.content}>
      <div className="my-10 h-[1px] w-full bg-slate-300"></div>
      <footer className="flex flex-col gap-6 text-center md:flex-row xl:text-left">
        <figure className="flex-1">
          <figcaption className="text-sm text-slate-300 uppercase">
            AVG. distance
          </figcaption>
          <p className="text-[28px] uppercase">{props.distance}</p>
        </figure>
        <figure className="flex-1">
          <figcaption className="text-sm text-slate-300 uppercase">
            est. travel time
          </figcaption>
          <p className="text-[28px] uppercase">
            {props.travelTime.length} {props.travelTime.unit}
          </p>
        </figure>
      </footer>
    </DescriptionCard>
  );
};

export default DestinationCard;
