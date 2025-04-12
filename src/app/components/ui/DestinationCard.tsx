import React from "react";

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
    <article>
      <header className="mb-4">
        <h2 className="font-title text-[56px] uppercase md:text-[80px] xl:text-8xl">
          {props.title}
        </h2>
      </header>
      <p className="text-base text-slate-300 xl:text-lg">{props.content}</p>

      <div className="my-10 h-[1px] w-full bg-slate-300"></div>
      <footer className="flex gap-6">
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
            {props.travelTime.length}
            {props.travelTime.unit}
          </p>
        </figure>
      </footer>
    </article>
  );
};

export default DestinationCard;
