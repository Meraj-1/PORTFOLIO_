import React from "react";
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion";
import RotatingText from "../animate_compo/RotatingText.jsx";
import ShinyText from "../animate_compo/ShineText.jsx";

const Technology = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] bg-1E1E1E  lg:px-[15vw] py-10">
      <div className="flex justify-center mt-20 md:mt-30  lg:mb-20 items-center gap-2 mb-10">
        <RotatingText
          texts={["TOOL'S","&","Technologie's"]}
          mainClassName="cursor-target px-3 py-1 text-white text-2xl md:text-5xl rounded-lg  overflow-hidden"
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

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 sm:gap-10 justify-center items-center"
        >
          {[
            { name: "HTML", image: Icon.HTML },
            { name: "CSS", image: Icon.Css },
            { name: "JavaScript", image: Icon.javascript },
            { name: "React", image: Icon.react },
            { name: "Node.js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExv78hTzcjlPAXrxbaAy7zTF1KLE_597yjIMxEx00zj0n7U2WM-KH26q6vpk-F7NAjIM&usqp=CAU"},
            { name: "Express", image: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"},
            { name: "Mongo DB", image: Icon.Mongo },
            { name: "GitHub",  image: Icon.github},
            { name: "Bootstrap", image: Icon.Bootstrap },
            { name: "TailwindCSS", image: Icon.tailwind },
            { name: "Dockers", image:Icon.docker }]
            .map((skill, index) => (
            <li key={index} className="cursor-target flex flex-col items-center gap-2 group">
              <div
                className="w-20 h-20 md:w-36 cursor-pointer rounded-lg p-3  flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <ShinyText
               text={skill.name} disabled={false} speed={3} className='custom-class text-lg text-pink-300'/>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Technology;
