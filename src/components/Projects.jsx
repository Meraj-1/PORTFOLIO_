import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../assests/assets";
import AnimateText from "../animate_compo/AnimateText";
import ShinyText from "../animate_compo/ShineText";
import StarBorder from "../animate_compo/StarBorder";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl bg-[#000000] border border-[#2e2e2e] overflow-hidden  transition duration-300"
    >
      <div className="p-4">
        <ShinyText
               text={title} disabled={false} speed={3} className='custom-class normal_text text-2xl font-bold mb-5 text-center'/>
        <div
          className="cursor-pointer overflow-hidden rounded-xl mb-6 relative group"
          onClick={toggleImage}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentImageIndex]}
              src={images[currentImageIndex]}
              alt={`${title} Screenshot`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl w-full h-60 md:h-72 lg:h-64 object-cover group-hover:scale-105 group-hover:brightness-90 transition duration-300"
            />
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-5">
        <StarBorder>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 font-medium"
          >
            Live
          </a>
          </StarBorder>
          <StarBorder>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 font-medium"
          >
            GitHub
          </a>
          </StarBorder>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section id="projects" className="relative text-white overflow-hidden py-16 bg-black">
      <div className="container p-4 px-10    lg:px-40 xl:px-60 mx-auto">
        <AnimateText
          text="My Masterpiece Projects"
          className="text-3xl sm:text-5xl normal_text md:text-6xl mb-16 font-bold flex justify-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
