import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../assests/assests';

const Projects = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);
  const [isSecondImage, setIsSecondImage] = useState(true);
  const [isthirdImage, serIsthirdImage] = useState(true);

  const toggleImage = () => {
    setIsFirstImage(prev => !prev);
  };

  const toggleImage2 = () => {
    setIsSecondImage(prev => !prev);
  };
  const toggleImage3 = () => {
    serIsthirdImage(prev =>!prev);
  };

  return (
    <section id="projects" className="relative text-white  overflow-hidden">
      <div className="container lg:p-30 md:p-10  mx-auto ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl mt-10 md:mt-20 mb-20 md:mb-40 flex items-center justify-center font-bold text-center"
        >
          My Masterpiece Projects
        </motion.h2>

        {/* Grid Container: 1 column in md & below, 2 columns in lg */}
        <div className="grid md:grid-cols-2   grid-cols-1 lg:grid-cols-2 gap-20 md:gap-10">
          {/* First Project */}
          <div>
            <div className="flex mb-5 text-xl justify-start items-start">
              <h2 className="cursor-pointer border-b-2">SHOPPING PLATFORM</h2>
            </div>
            <div className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                {isFirstImage ? (
                  <motion.img
                    key="image1"
                    src={Icon.ecom1}
                    alt="Project Image 1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <motion.img
                    key="image2"
                    src={Icon.ecom2}
                    alt="Project Image 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
              <div className="flex justify-between gap-10 mt-4">
                <button
                  onClick={toggleImage}
                  className="px-4 py-2 cursor-pointer text-white rounded-md border-b-4"
                >
                  View
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-md border-b-4">
                  <a
                    href="https://github.com/Meraj-1/Ecomerce_web"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-md border-b-4">
                  <a
                    href="https://ecom-forever-2.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div>
            <div className="flex mb-5 text-xl justify-start items-start">
              <h2 className="cursor-pointer border-b-2">Real Estate</h2>
            </div>
            <div className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                {isSecondImage ? (
                  <motion.img
                    key="estate1"
                    src={Icon.estate1}
                    alt="Project Image 1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <motion.img
                    key="estate2"
                    src={Icon.estate2}
                    alt="Project Image 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
              <div className="flex justify-center gap-10 mt-4">
                <button
                  onClick={toggleImage2}
                  className="px-4 py-2 cursor-pointer text-white rounded-md border-b-4"
                >
                  View
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-md border-b-4">
                  <a
                    href="https://github.com/Meraj-1/Real-Estate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-md border-b-4">
                  <a
                    href="https://real-estate-henna-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mb-5 text-xl justify-start items-start">
              <h2 className="cursor-pointer border-b-2">Zerodha_Clone</h2>
            </div>
            <div className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                {isthirdImage ? (
                  <motion.img
                    key="estate1"
                    src={Icon.zerodha1}
                    alt="Project Image 1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <motion.img
                    key="estate2"
                    src={Icon.zerodha2}
                    alt="Project Image 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
              <div className="flex justify-center gap-10 mt-4">
                <button
                  onClick={toggleImage3}
                  className="px-4 py-2 cursor-pointer text-white rounded-md border-b-4"
                >
                  View
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-md border-b-4">
                  <a
                    href="https://github.com/Meraj-1/Zerodha.2.0/tree/main/frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-md border-b-4">
                  <a
                    href="https://zerodhaclonefivne.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
