import DestinationCard from "@/app/components/ui/DestinationCard";
import React from "react";

const page = () => {
  const planet = {
    title: "moon",
    content:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384400",
    travelTime: {
      length: 3,
      unit: "days",
    },
  };
  return (
    <DestinationCard
      title={planet.title}
      content={planet.content}
      travelTime={planet.travelTime}
      distance={planet.distance}
    />
  );
};

export default page;
