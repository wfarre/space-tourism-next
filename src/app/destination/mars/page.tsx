import DestinationCard from "@/app/components/ui/DestinationCard";
import React from "react";

const page = () => {
  const planet = {
    title: "Mars",
    content:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL.",
    travelTime: {
      length: 9,
      unit: "months",
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
