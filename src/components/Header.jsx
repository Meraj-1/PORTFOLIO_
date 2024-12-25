

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-opacity-80 backdrop-filter bg-gradient-to-b from-purple-300 to-purple-100 backdrop-blur-md text-white fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl topic_head  md:text-3xl font-bold text-transparent bg-clip-text animate-text">
          MERAJ ANSARI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {/* <button className=' bg-purple-600 px-3 py-2 border-rounded'>
          <li><a href="#about" className="hover:text-indigo-400">About</a></li></button> */}
          <button className="bg-purple-600 px-4 py-2 rounded-lg shadow-md text-white hover:bg-purple-700 transition-colors duration-300">
            <a href="#about">
              About
            </a>
          </button>

          <button className=' bg-purple-600 px-4 py-2 rounded-lg shadow-md text-white hover:bg-purple-700 transition-colors duration-300 '>
            <li><a href="#projects">Projects</a></li>
          </button>
          <button className=' bg-purple-600 px-4 py-2 rounded-lg shadow-md text-white hover:bg-purple-700 transition-colors duration-300 '>
            <li><a href="#contact" className="">Contact</a></li>
          </button>
        </ul>
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖️' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-b from-purple-300  to-purple-100 text-black  transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-48' : 'max-h-0'
          }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <a
              href="#about"
              className="hover:text-indigo-100 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-100 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-100 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
    
  );
};

export default Header;
