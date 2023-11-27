import { Inter, Londrina_Solid,Medula_One } from "next/font/google";
import localFont from "next/font/local"
export const myFont = localFont({ src: './assets/fonts/MedulaOne-Regular.ttf' })
export const londrina_solid = Londrina_Solid({
    subsets: ["latin"],
    weight: ["900","300"],
  });
  export const medula_one =Medula_One({
    subsets: ["latin"],
    weight: ["400"],
  })