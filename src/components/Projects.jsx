// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Icon } from "../assests/assets";


// const projectData = [
//   {
//     title: "SHOPPING PLATFORM",
//     images: [Icon.ecom1, Icon.ecom2],
//     github: "https://github.com/Meraj-1/Ecom_Backend",
//     live: "https://ecom-forever-2.vercel.app/",
//   },
//   {
//     title: "Real Estate",
//     images: [Icon.estate1, Icon.estate2],
//     github: "https://github.com/Meraj-1/Real-Estate",
//     live: "https://real-estate-henna-nine.vercel.app/",
//   },
//   {
//     title: "Zerodha_Clone",
//     images: [Icon.zerodha1, Icon.zerodha2],
//     github: "https://github.com/Meraj-1/Zerodha.2.0/tree/main/frontend",
//     live: "https://zerodhaclonefivne.vercel.app/",
//   },
//   // {
//   //   title : 'photo_grapher',
//   //   image : [],
//   //   github : "",
//   //   live : ""
//   // }
// ];

// const ProjectCard = ({ title, images, github, live }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const toggleImage = () => {
//     setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ scale: 1.03 }}
//       transition={{ duration: 0.4 }}
//       className=" overflow-hidden  transition duration-300"
//     >
//       <div className="">
//         <div
//           className="cursor-pointer overflow-hidden  mb-2 relative group"
//           onClick={toggleImage}
//         >
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={images[currentImageIndex]}
//               src={images[currentImageIndex]}
//               // alt={`${title} Screenshot`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className=" w-full h-100 md:h-72 lg:h-[550px] object-cover group-hover:scale-105 group-hover:brightness-90 transition duration-300"
//             />
//           </AnimatePresence>
//         </div>

//         <div className="flex justify-center mb-10 gap-5">
//           <a
//             href={live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cursor-target px-5 py-2 text-white font-medium"
//           >
//             Live
//           </a>
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cursor-target px-5 py-2 text-[#C778DD] font-medium"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="relative bg-1E1E1E overflow-hidden py-16">
//       <div className="container p-4 px-10    lg:px-40 xl:px-60 mx-auto">
//        <div className="mb-10">
//         <span className="cursor-target lg:text-4xl font-semibold text-white"><span className="text-[#C778DD] font-extrabold">#</span>Projects</span>
//          <span className="w-0 h-10 text-[#C778DD]"> -------------</span>
//        </div>

//         <div className="grid grid-cols-1 md:gap-0 md:grid-cols-2">
//           {projectData.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../assests/assets";

const projectData = [
  {
    title: "SHOPPING PLATFORM",
    images: [Icon.ecom1, Icon.ecom2],
    github: "https://github.com/Meraj-1/Ecom_Backend",
    live: "https://ecom-forever-2.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "Real Estate",
    images: [Icon.estate1, Icon.estate2],
    github: "https://github.com/Meraj-1/Real-Estate",
    live: "https://real-estate-henna-nine.vercel.app/",
    tech: ["React", "Next.js", "Tailwind", "MongoDB"],
  },
  {
    title: "Zerodha_Clone",
    images: [Icon.zerodha1, Icon.zerodha2],
    github: "https://github.com/Meraj-1/Zerodha.2.0/tree/main/frontend",
    live: "https://zerodhaclonefivne.vercel.app/",
    tech: ["React", "Node.js", "Tailwind"],
  },
];

const ProjectCard = ({ title, images, github, live, tech }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slide images every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const toggleImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group cursor-pointer perspective-1000 mb-16"
    >
      <motion.div
        whileHover={{ rotateY: 10, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
        className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/5"
      >
        {/* Image Carousel */}
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]" onClick={toggleImage}>
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentImageIndex]}
              src={images[currentImageIndex]}
              alt={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover rounded-3xl brightness-95 group-hover:brightness-90 transition duration-500"
            />
          </AnimatePresence>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 rounded-3xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#C778DD] mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base bg-[#C778DD]/20 px-2 py-1 rounded-full text-white"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#C778DD]/70 hover:bg-[#C778DD] text-white rounded-md shadow-lg transition-all"
              >
                Live
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#C778DD] hover:bg-[#C778DD] text-[#C778DD] hover:text-white rounded-md shadow-lg transition-all"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#1E1E1E] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            <span className="text-[#C778DD]">#</span> Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Some of my most exciting projects showcasing frontend, backend and full-stack skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
