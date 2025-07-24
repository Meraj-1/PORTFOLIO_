import React, { useState } from "react";
import { Icon } from "../assests/assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1E1E1E] text-white md:pt-5 pt-2 md:p-0 z-50">
      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between px-5 py-2">
        {/* Logo */}
        <div className="cursor-target flex items-center space-x-2">
          <img
            src={Icon.logo}
            alt="Logo"
            className="w-[20px] h-auto cursor-pointer"
          />
          <h1 className="text-white text-lg font-semibold ">MERAJ</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-20 text-base font-medium">
          <li className="cursor-target">
            <span className=" text-pink-400 font-bold">#</span>
            <a href="#about">About</a>
          </li>
          <li className="cursor-target">
            <span className="text-pink-400 font-bold">#</span>
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-target">
            <span className="text-pink-400 font-bold">#</span>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? Icon.open : Icon.close}
            alt="Menu Toggle"
            className="w-[38px] h-auto"
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "h-screen mt-8 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-10 py-10">
          <ul className="flex flex-col gap-20 pt-20 text-4xl font-medium">
            <li>
              <span className="text-pink-400">#</span>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            </li>
            <li>
              <span className="text-pink-400">#</span>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About-me</a>
            </li>
            <li>
              <span className="text-pink-400">#</span>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>Works</a>
            </li>
            <li>
              <span className="text-pink-400">#</span>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-32">
          <a href="https://www.linkedin.com/in/meraj-ansari-12bb132a9/">
            <img
              src={Icon.Linkedin}
              alt="LinkedIn"
              className="w-[50px] h-auto"
            />
          </a>
          <a href="https://x.com/BelalRaza41850">
            <img
              src={Icon.Twitter}
              alt="Twitter"
              className="w-[50px] h-auto"
            />
          </a>
          <a href="https://github.com/Meraj-1">
            <img
              src={Icon.github}
              alt="GitHub"
              className="w-[50px] h-auto"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
