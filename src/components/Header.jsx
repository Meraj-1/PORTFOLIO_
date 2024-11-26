import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MOHD MERAJ ANSARI</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖️' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-800 text-white p-4 flex flex-col gap-4 items-center">
          <li>
            <a
              href="#about"
              className="hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
