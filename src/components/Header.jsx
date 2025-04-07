import React, { useState } from "react";
import { Icon } from "../assests/assets";
import Cube from "./Cube";
import StarBorder from "../animate_compo/StarBorder";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#000000] fixed  w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl text_nav text-white p-2 md:text-3xl cursor-pointer font-bold text-transparent bg-clip-text animate-text">
          PORTFOLIO
        </h1>
  
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
            <StarBorder>
            <a  href="#about">About</a>
            </StarBorder>
            <StarBorder>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </StarBorder>
          <StarBorder>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </StarBorder>
        </ul>
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "☰" : "☰"}
        </button>
      </nav>

// Mobile Menu 
<div
  className={`md:hidden text-white  transition-all duration-500 ease-in-out overflow-hidden ${
    isMenuOpen ? "max-h-[548px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="flex items-center justify-between   p-10">
    <div className="w-40 border-2 cursor-pointer ">
  <Cube/>
    </div>
    <ul className="flex gap-9 flex-col items-center">
      <StarBorder>
      <li>
        <a
          href="#about"
          className="p-3"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
      </li></StarBorder>
      <StarBorder>
      <li>
        <a
          href="#projects"
          className="p-3"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
      </li>
      </StarBorder>
      <StarBorder>
      <li>
        <a
          href="#contact"
          className="p-3"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </li>
      </StarBorder>
    </ul>
  </div>
</div>

    </header>
  );
};

export default Header;
