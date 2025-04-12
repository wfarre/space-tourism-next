import DestinationCard from "@/app/components/ui/DestinationCard";
import React from "react";

const page = () => {
  const planet = {
    title: "titan",
    content:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL.",
    travelTime: {
      length: 7,
      unit: "years",
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
