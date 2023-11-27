import React from "react";
import Title from "../title";
import { skillsImg } from "@/app/constants/skillsImg";
import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <Title texto={"Habilidades"} />
      <div className="flex flex-wrap gap-8 justify-center items-center px-4 py-4 ">
        {skillsImg &&
          skillsImg.map((img) => (
            <Image key={img.id} src={img.img} width={96} height={96} className="animate-bounce"/>
          ))}
      </div>
    </div>
  );
};

export default Skills;
