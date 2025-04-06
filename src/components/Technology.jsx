import React from "react";
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion";
import RotatingText from "../animate_compo/RotatingText.jsx";
import ShinyText from "../animate_compo/ShineText.jsx";

const Technology = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] mb-10 lg:px-[15vw] py-10">
      {/* Title and Rotating Text */}
      <div className="flex justify-center mt-20 md:mt-30 lg:mt-40 lg:mb-20 items-center gap-2 mb-10">
        <RotatingText
          texts={["TOOL'S","&","Technologies"]}
          mainClassName="px-3 py-1 tech_head text-6xl md:text-7xl bg-Black text-White rounded-lg shadow-md overflow-hidden"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      {/* Tech Stack Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* Technology Icons */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 sm:gap-10 justify-center items-center"
        >
          {[
            { name: "HTML", image: Icon.HTML },
            { name: "CSS", image: Icon.Css },
            { name: "JavaScript", image: Icon.javascript },
            { name: "React", image: Icon.react },
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
                className="w-16 h-16 bg-white border border-gray-200 rounded-full p-3 shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <ShinyText
               text={skill.name} disabled={false} speed={3} className='custom-class text-lg normal_text'/>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Technology;
