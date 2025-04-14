import CardDescription from "@/app/components/ui/CardDescription";
import React from "react";

const page = () => {
  const techno = {
    title: "LAUNCH VEHICLE",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
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
