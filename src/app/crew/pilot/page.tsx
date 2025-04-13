import CrewCard from "@/app/components/ui/CrewCard";
import React from "react";

const page = () => {
  const crew = {
    title: "PILOT",
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: "/assets/crew/image-victor-glover.webp",
  };
  return (
    <CrewCard
      title={crew.title}
      name={crew.name}
      desc={crew.desc}
      img={crew.img}
      imgH={645}
      imgW={549}
    />
  );
};

export default page;
