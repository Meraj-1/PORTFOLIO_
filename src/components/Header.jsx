import React, { useState } from "react";
import { Icon } from "../assests/assets";
import Cube from "./Cube";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#000000] fixed  w-full top-0 z-50 shadow-md">
      <nav className="container border-b-[0.1px] mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl text_nav text-white p-2 md:text-3xl cursor-pointer font-bold text-transparent bg-clip-text animate-text">
          PORTFOLIO
        </h1>
  
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <button className="px-4  py-2 rounded-lg shadow-md text-white border hover:text-black  hover:bg-white  duration-300 ">
            <a  href="#about">About</a>
          </button>

          <button className="px-4 py-2 rounded-lg shadow-md text-white border hover:text-black  hover:bg-white  duration-300 ">
            <li>
              <a href="#projects">Projects</a>
            </li>
          </button>
          <button className="px-4 py-2 rounded-lg shadow-md text-white border hover:text-black  hover:bg-white  duration-300 ">
            <li>
              <a href="#contact">Contact</a>
            </li>
          </button>
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
    <div className="w-40 border-4 cursor-pointer ">
  <Cube/>
    </div>
    <ul className="flex gap-9 flex-col items-center">
      <li>
        <a
          href="#about"
          className="hover:text-indigo-100 border-b-[1px] p-1"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-indigo-100 border-b-[1px] p-1"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="border-b-[1px] p-1"
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
