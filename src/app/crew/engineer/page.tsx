import CardCrew from "@/app/components/ui/CardCrew";
import React from "react";

const page = () => {
  const crew = {
    title: "Flight engineer",
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ",
    img: "/assets/crew/image-anousheh-ansari.webp",
  };
  return (
    <CardCrew
      title={crew.title}
      name={crew.name}
      desc={crew.desc}
      img={crew.img}
      imgH={602}
      imgW={575}
    />
  );
};

export default page;
