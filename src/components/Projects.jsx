import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../assests/assets";
import AnimateText from "../animate_compo/AnimateText";

const projectData = [
  {
    title: "SHOPPING PLATFORM",
    images: [Icon.ecom1, Icon.ecom2],
    github: "https://github.com/Meraj-1/Ecom_Backend",
    live: "https://ecom-forever-2.vercel.app/",
  },
  {
    title: "Real Estate",
    images: [Icon.estate1, Icon.estate2],
    github: "https://github.com/Meraj-1/Real-Estate",
    live: "https://real-estate-henna-nine.vercel.app/",
  },
  {
    title: "Zerodha_Clone",
    images: [Icon.zerodha1, Icon.zerodha2],
    github: "https://github.com/Meraj-1/Zerodha.2.0/tree/main/frontend",
    live: "https://zerodhaclonefivne.vercel.app/",
  },
];

const ProjectCard = ({ title, images, github, live }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div>
      <div className="flex mb-5 text-xl justify-start items-start">
        <h2 className="cursor-pointer border-b-2">{title}</h2>
      </div>
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImageIndex]}
            src={images[currentImageIndex]}
            alt={`${title} Screenshot`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="flex justify-center gap-10 mt-4">
          <button
            onClick={toggleImage}
            className="px-4 py-2 cursor-pointer text-white rounded-md border-b-4"
          >
            View
          </button>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 cursor-pointer rounded-md border-b-4"
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 cursor-pointer rounded-md border-b-4"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section id="projects" className="relative text-white overflow-hidden">
      <div className="container p-4 lg:px-50 xl:px-80 md:p-10 mx-auto">
        <AnimateText
          text="My Masterpiece Projects"
          className="text-2xl sm:text-4xl md:text-6xl mb-10 md:mb-20 lg:text-5xl md:mt-20 flex items-center justify-center font-bold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-20 md:gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
