import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../assests/assets";


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
  // {
  //   title : 'photo_grapher',
  //   image : [],
  //   github : "",
  //   live : ""
  // }
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
      className=" overflow-hidden  transition duration-300"
    >
      <div className="">
        <div
          className="cursor-pointer overflow-hidden  mb-2 relative group"
          onClick={toggleImage}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentImageIndex]}
              src={images[currentImageIndex]}
              // alt={`${title} Screenshot`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" w-full h-100 md:h-72 lg:h-[550px] object-cover group-hover:scale-105 group-hover:brightness-90 transition duration-300"
            />
          </AnimatePresence>
        </div>

        <div className="flex justify-center mb-10 gap-5">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target px-5 py-2 text-white font-medium"
          >
            Live
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target px-5 py-2 text-[#C778DD] font-medium"
          >
            GitHub
          </a>
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
    <section id="projects" className="relative bg-1E1E1E overflow-hidden py-16">
      <div className="container p-4 px-10    lg:px-40 xl:px-60 mx-auto">
       <div className="mb-10">
        <span className="cursor-target lg:text-4xl font-semibold text-white"><span className="text-[#C778DD] font-extrabold">#</span>Projects</span>
         <span className="w-0 h-10 text-[#C778DD]"> -------------</span>
       </div>

        <div className="grid grid-cols-1 md:gap-0 md:grid-cols-2">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
