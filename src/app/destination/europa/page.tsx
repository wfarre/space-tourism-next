import DestinationCard from "@/app/components/ui/DestinationCard";
import React from "react";

const page = () => {
  const planet = {
    title: "EUROPA",
    content:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL.",
    travelTime: {
      length: 3,
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
