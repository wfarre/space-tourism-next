import CardCrew from "@/app/components/ui/CardCrew";
import React from "react";

const page = () => {
  const crew = {
    title: "specialist",
    name: "MARK SHUTTLEWORTH",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "/assets/crew/image-mark-shuttleworth.webp",
  };
  return (
    <CardCrew
      title={crew.title}
      name={crew.name}
      desc={crew.desc}
      img={crew.img}
      imgH={640}
      imgW={433}
    />
  );
};

export default page;
