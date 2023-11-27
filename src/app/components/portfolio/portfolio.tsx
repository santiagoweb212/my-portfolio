import React from "react";
import Title from "../title";
import { myFont } from "@/app/fonst";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
const Portfolio = () => {
  const getProyects = async () => {
    const querySnapshot = await getDocs(collection(db, "proyects"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  getProyects();

  return (
    <section className="px-4 ">
      <Title texto={"Portfolio"} />
      <p className={`${myFont.className} text-2xl`}>
        Explora mis proyectos, aquí cada proyecto es más que código y diseño; es
        una expresión de dedicación, compromiso y pasión
      </p>
      <section className="grid "></section>
    </section>
  );
};

export default Portfolio;
