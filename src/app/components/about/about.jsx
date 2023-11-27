import { myFont } from "@/app/fonst";
import React from "react";
import Button from "@/app/components/button";
import Title from "@/app/components/title";
import Skills from "./skills";
const About = () => {
  const classButton = `text-2xl ${myFont.className} text-[#4479A1] px-8 bg-white shadow-xl rounded-md`;
  const buttons = [
    { text: "Descargar CV", className: classButton },
    { text: "Contactame", className: classButton },
  ];
  return (
    <section className="px-3 flex flex-col gap-6">
      <div>
        <Title texto={"Sobre Mi"} />
        <p className={`${myFont.className} text-2xl`}>
          ¡Saludos! Soy Juan Santiago, un apasionado desarrollador con
          destacadas habilidades de comunicación y colaboración. Estoy en
          búsqueda de una posición a tiempo completo como front-end developer,
          back-end developer o full-stack developer, donde pueda aplicar mi
          experiencia para contribuir al éxito del equipo. Mi objetivo es
          continuar creciendo profesionalmente mientras aporto al desarrollo de
          soluciones innovadoras.
        </p>
        <div className=" flex gap-3 py-3 ">
          {buttons &&
            buttons.map((button, index) => (
              <Button
                key={index}
                texto={button.text}
                className={button.className}
              />
            ))}
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
