import CardDescription from "@/app/components/ui/CardDescription";
import React from "react";

const page = () => {
  const techno = {
    title: "SPACE CAPSULE",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  };
  return (
    <CardDescription
      title={techno.title}
      subtitle="THE TERMINOLOGY…"
      desc={techno.desc}
    />
  );
};

export default page;
