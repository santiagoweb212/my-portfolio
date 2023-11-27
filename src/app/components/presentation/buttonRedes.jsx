import { medula_one, myFont } from "@/app/fonst";
import Image from "next/image";
import React from "react";

const ButtonRedes = ({ texto, icon ,textColor}) => {
  return (
    <button className={`flex items-center justify-center gap-2 bg-white px-12 py-2 rounded-lg text-[30px] leading-none font-black shadow-lg  ${myFont.className}`}>
     <span className={`${textColor}`}> {texto}</span> <Image src={icon} width={35} height={35} />
    </button>
  );
};

export default ButtonRedes;
