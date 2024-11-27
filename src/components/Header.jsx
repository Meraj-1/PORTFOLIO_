// import React, { useState } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-gray-900 text-white p-4 shadow-md">
//       <nav className="container mx-auto flex justify-between items-center">
//         {/* Enhanced Logo */}
//         <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-gradient glow-effect">
//           MOHD MERAJ ANSARI
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-4">
//           <li><a href="#about" className="hover:text-indigo-400">About</a></li>
//           <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
//           <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
//         </ul>

//         {/* Hamburger Icon */}
//         <button
//           className="md:hidden text-2xl focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? '✖️' : '☰'}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="md:hidden bg-gray-800 text-white p-4 flex flex-col gap-4 items-center">
//           <li>
//             <a
//               href="#about"
//               className="hover:text-indigo-400"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className="hover:text-indigo-400"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="hover:text-indigo-400"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-opacity-80 backdrop-filter bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-md text-white fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text animate-text">
          MERAJ ANSARI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
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
      <div
        className={`md:hidden bg-gray-900 bg-opacity-90 text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
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
      </div>
    </header>
  );
};

export default Header;
