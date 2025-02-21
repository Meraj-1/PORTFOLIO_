import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../assests/assests';

const Projects = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const toggleImage = () => {
    setIsFirstImage(prev => !prev);
  };

  return (
    <section id="projects" className="relative text-white py-20 overflow-hidden">
      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl mt-10 md:mt-20 mb-20 md:mb-40 topic_head flex items-center justify-center font-extrabold text-center"
        >
          My Masterpiece Projects
        </motion.h2>

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
          <button
            onClick={toggleImage}
            className="mt-4 px-4 py-2  text-white rounded-md border-b-4 duration-300"
          >
            View
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
