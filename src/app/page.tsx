import React from "react";
import Presentation from "@/app/components/presentation/presentation";
import About from "@/app/components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contac from "./components/contact/contac";
const Home = () => {
  return (
    <div className="bg-background">
      <Presentation />
      <About />
      <Portfolio/>
      <Contac/>
    </div>
  );
};

export default Home;
