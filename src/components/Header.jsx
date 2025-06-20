import React, { useState } from "react";
import { Icon } from "../assests/assets";
import Cube from "./Cube";
import StarBorder from "../animate_compo/StarBorder";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" text-black fixed  w-full top-0 bg-white z-50 shadow-md ">
      <nav className="container mx-auto flex justify-between items-center py-2 px-5">
        {/* Logo */}
        <img
        className="cursor-pointer w-[55px] h-[55px]"
         src= {Icon.manicon}alt="" />
        {/* <h1 className="text-2xl text_nav text-white p-2 md:text-3xl cursor-pointer font-bold text-transparent bg-clip-text animate-text">
          PORTFOLIO
        </h1> */}

        {/* Desktop Menu */}
        <ul className="hidden e md:flex gap-40 text-xl">
            <a href="/">About</a>
          
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
        </ul>
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "☰" : "☰"}
        </button>
      </nav>
      <div 
  className={`md:hidden text-black transition-all duration-500 ease-in-out ${
    isMenuOpen ? "max-h-[548px] opacity-100 bg-white" : "max-h-0 opacity-0"
  }`}
>

        <div className="flex items-center justify-center gap-0 py-10">
          <div className="w-40 bg-white  cursor-pointer
          ">
            {/* <Cube /> */}
          <img src={Icon.navbar} alt="" />
          </div>
          <ul className="flex gap-6 flex-col ">
              <li>
                <a
                  href="#about"
                  className="px-3                   
                  "
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="p-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="p-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
