import { myFont } from "@/app/fonst";
import React from "react";
import Input from "./input";

const Formulario = () => {
  return (
    <form action="">
      <Input textLabel="nombre" textPlaceHolder="ingrese su nombre" />
      <Input
        textLabel="correo electronico"
        textPlaceHolder="ingrese su correo electronico"
      />
      <label
        htmlFor=""
        className={`${myFont.className} text-xl text-colorTextoParrafo`}
      >
        asunto
      </label>
      <textarea
        name=""
        id=""
        placeholder="escribe aca..."
        className="w-full h-32 py-2 px-3 outline outline-slate-400 outline-1  rounded-lg"
      ></textarea>
      <button
        className={`${myFont.className} bg-prymari text-white tracking-wider px-3 w-full rounded-lg text-[38px] leading-none`}
      >
        enviar
      </button>
    </form>
  );
};

export default Formulario;
