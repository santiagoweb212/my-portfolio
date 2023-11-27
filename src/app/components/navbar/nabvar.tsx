"use client";
import React, { useState } from "react";
import Link from "next/link";
import { londrina_solid } from "@/app/fonst";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const links =[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"Sobre Mi",
      link:"/"
    },
    {
      name:"Portafolio",
      link:"/"
    },
    {
      name:"Contacto",
      link:"/"
    }
  ]
  return (
    <header className=" container mx-auto flex  h-12 justify-between bg-background items-center px-3 shadow-md ">
      <div className={` ${londrina_solid.className} text-2xl text-prymari  filter drop-shadow-md`}>{"<JS DEV/>"}</div>
      <nav
        className={`  flex flex-col  absolute top-12 left-0 w-full justify-center items-center gap-2 ${
          openMenu ? "hidden" : "block py-8 h-[calc(100vh-3rem)] z-20 bg-background" 
        }  sm:static sm:flex sm:flex-row   sm:w-auto   `}
      >
        {
          links.map((link)=>{
            return <Link key={link.name} href={link.link}
          className={`text-prymari filter drop-shadow-md hover:shadow-xl px-4 text-lg sm:text-base font-semibold`}>{link.name}</Link>
          })
        }
      </nav>
      <button className="sm:hidden" onClick={handleOpenMenu}>
        {openMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-prymari"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-prymari"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </header>
  );
};

export default NavBar;
