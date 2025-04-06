import React from "react";
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion";
import RotatingText from "../animate_compo/RotatingText.jsx";

const Technology = () => {
  
  return (
    <div className="px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw]">
       <div className="flex lg:px-80 justify-start">
      <h2 className="text-white">
        MY
      </h2>
        <RotatingText
      texts={['React', 'Bits', 'Is', 'Cool!']}
      mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
      />
      </div>
    <div className="relative gap-20 h-screen  flex flex-col lg:flex-row  items-center justify-center ">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Icon.tech} type="video/mp4" />{" "}
      </video> */}
    
      <div className="flex justify-center relative mb-2 items-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-[260px] cursor-pointer md:h-[400px]"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/male-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-programmer-web-development-pack-design-icons-6547028.png?f=webp"
          alt=""
        />
      </div>
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-6  sm:gap-10   justify-center items-center "
      >
        {[
          { name: "HTML", image: Icon.HTML },
          { name: "CSS", image: Icon.Css },
          { name: "JavaScript", image: Icon.javascript },
          { name: "React", image: Icon.react, animate: true },
          // { name: 'Java', image: Icon.Java },
          { name: "Mongo DB", image: Icon.Mongo },
          {
            name: "GitHub",
            image:
              "https://e7.pngegg.com/pngimages/1009/39/png-clipart-github-computer-icons-repository-github-white-cat-like-mammal.png",
          },
          { name: "Bootstrap", image: Icon.Bootstrap },
          { name: "TailwindCSS", image: Icon.tailwind },
        ].map((skill, index) => (
          <li key={index} className="flex flex-col items-center gap-2 group">
            <div
              className={`relative w-16 h-16 cursor-pointer bg-gradient-to-br border-2 
                       rounded-full p-3 transition-transform duration-300 
              }`}
            >
              <img
                src={skill.image}
                alt={skill.name}
              />
            </div>
            <h2 className="text-md text-white relative font-md">{skill.name}</h2>
          </li>
        ))}
      </motion.ul>
    </div>
    </div>
  );
};

export default Technology;
