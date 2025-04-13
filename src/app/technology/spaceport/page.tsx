import DescriptionCard from "@/app/components/ui/DescriptionCard";
import React from "react";

const page = () => {
  const techno = {
    title: "SPACEPORT",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  };
  return (
    <DescriptionCard
      title={techno.title}
      subtitle="THE TERMINOLOGY…"
      desc={techno.desc}
    />
  );
};

export default page;
