import React from "react";
import Title from "../title";
import Formulario from "../form/formulario";
import ButtonRedes from "../presentation/buttonRedes";
import giIcon from "@/app/assets/icons-redes/GitHub.png";
import waIcon from "@/app/assets/icons-redes/Whatsapp.png";
import liIcon from "@/app/assets/icons-redes/Linkedin.png";
import inIcon from "@/app/assets/icons-redes/Instagram.png";
const Contac = () => {
  return (
    <section className=" px-4">
      <Title texto={"Contactame"} />
      <div className=" flex md:px-8">
        <div className=" flex-grow ">
          <Formulario />
        </div>

        <div className=" hidden md:flex items-center flex-col  justify-center w-3 px-4">
          <div className="border-r-2 h-28 border-slate-500"></div>
          <div className="mx-6 my-2 w-2 h-2 rounded-full outline outline-2 outline-slate-500 "></div>
          <div className="border-r-2 h-28 border-slate-500"></div>
        </div>

        <div className=" flex-grow hidden md:flex flex-col justify-center  gap-3">
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
    </section>
  );
};

export default Contac;
