

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#000000] fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl text-white pt-[15px] md:text-3xl cursor-pointer font-bold text-transparent bg-clip-text animate-text">
         PORTFOLIO
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
           <button className='px-4 py-2 rounded-lg shadow-md text-white border hover:text-black  hover:bg-white  duration-300 '>
            <a href="#about" >
              About
            </a>
          </button>

          <button className='px-4 py-2 rounded-lg shadow-md text-white border hover:text-black  hover:bg-white  duration-300 '>
            <li><a href="#projects" >Projects</a></li>
          </button>
          <button className='px-4 py-2 rounded-lg shadow-md text-white border hover:text-black  hover:bg-white  duration-300 '>
            <li><a href="#contact" >Contact</a></li>
          </button>
        </ul>
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '☰' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  bg:text-black text-white   transition-all duration-600 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-48' : 'max-h-0'
          }`}
      >
        <ul className="flex gap-9 border-t-2  border-b-2 flex-col items-center  py-4">
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
