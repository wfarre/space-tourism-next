import CrewCard from "@/app/components/ui/CrewCard";
import React from "react";

const page = () => {
  const crew = {
    title: "Commander",
    name: "douglas hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: "/assets/crew/image-douglas-hurley.webp",
  };
  return (
    <CrewCard
      title={crew.title}
      name={crew.name}
      desc={crew.desc}
      img={crew.img}
      imgH={700}
      imgW={514}
    />
  );
};

export default page;
