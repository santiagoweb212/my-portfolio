import React from "react";
import { londrina_solid, medula_one, myFont } from "../../fonst";
import ButtonRedes from "./buttonRedes";
import jsDev from "../../../../src/app/assets/developer.png";
import Image from "next/image";
import giIcon from "@/app/assets/icons-redes/GitHub.png";
import waIcon from "@/app/assets/icons-redes/Whatsapp.png";
import liIcon from "@/app/assets/icons-redes/Linkedin.png";
import inIcon from "@/app/assets/icons-redes/Instagram.png";
import elipseGradiente from "@/app/assets/Ellipse 1.png";
const Presentation = () => {
  return (
    <section className="flex flex-col min-h-[calc(100vh-3rem)]   ">
      <div className="flex  flex-1 md:items-center md:justify-center px-4 pt-2">
        <div className=" flex-grow  flex flex-col gap-2 items-center justify-center md:justify-start">
          <div className=" flex items-center justify-center md:hidden ">
            <div className="relative ">
              <Image src={elipseGradiente} width={200} height={200} />
              <Image
                src={jsDev}
                alt="jsdev"
                width={250}
                height={250}
                className="absolute top-0 left-0   "
              />
            </div>
          </div>

          <h2
            className={`w-full  h-auto text-5xl md:text-7xl text-center md:text-start text-prymari ${myFont.className}`}
          >
            Hola mi nombre es juan santiago soy Desarrollador Web
          </h2>
          <div className="w-full  ">
            <p
              className={`${myFont.className} text-xl md:text-3xl font-light px-4`}
            >
              Apasionado por la tecnología, me encuentro preparado para
              enfrentar con entusiasmo los desafíos que el fascinante mundo de
              la programación me ofrece.
            </p>
          </div>
          <div className="   flex flex-col justify-center items-center gap-3 pt-2  md:flex-wrap md:flex-row">
            <ButtonRedes
              texto={"GITHUB"}
              icon={giIcon}
              textColor={"text-[#000]"}
            />
            <ButtonRedes
              texto={"WHATSAPP"}
              icon={waIcon}
              textColor={"text-[#40C351]"}
            />
            <ButtonRedes
              texto={"LINKEDIN"}
              icon={liIcon}
              textColor={"text-[#039BE5]"}
            />
            <ButtonRedes
              texto={"INSTAGRAM"}
              icon={inIcon}
              textColor={"text-gradient"}
            />
          </div>
        </div>
        <div className=" hidden md:flex-grow md:flex justify-center md:justify-start md:items-start px-8 items-center">
          <div className="relative ">
            <Image src={elipseGradiente} width={600} height={600} />
            <Image
              src={jsDev}
              alt="jsdev"
              width={350}
              height={350}
              className="absolute top-0 left-0 "
            />
          </div>
        </div>
      </div>
      <div className=" md:flex justify-center items-start animate-pulse  hidden md:py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Presentation;
