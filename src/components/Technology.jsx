import React from "react";
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion";
import RotatingText from "../animate_compo/RotatingText.jsx";
import ShinyText from "../animate_compo/ShineText.jsx";

const Technology = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] bg-1E1E1E lg:px-[15vw] py-10">

      {/* Heading */}
      <div className="flex justify-center mt-20 md:mt-30 lg:mb-20 items-center gap-2 mb-10">
        <RotatingText
          texts={["TOOL'S", "&", "Technologie's"]}
          mainClassName="cursor-target px-3 py-1 text-white text-2xl md:text-5xl rounded-lg overflow-hidden"
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

      {/* Skills Grid */}
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
          {
            name: "Node.js",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExv78hTzcjlPAXrxbaAy7zTF1KLE_597yjIMxEx00zj0n7U2WM-KH26q6vpk-F7NAjIM&usqp=CAU",
          },
          {
            name: "Express",
            image:
              "https://tse4.mm.bing.net/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=Api&P=0&h=180",
          },
          { name: "Mongo DB", image: Icon.Mongo },
          { name: "GitHub", image: Icon.github },
          { name: "Bootstrap", image: Icon.Bootstrap },
          { name: "TailwindCSS", image: Icon.tailwind },
        ].map((skill, index) => (
          <li
            key={index}
            className="cursor-target flex flex-col items-center gap-2 group"
          >
            <div className="w-20 h-20 md:w-36 cursor-pointer rounded-lg p-3 flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-full w-full object-contain"
              />
            </div>
            <ShinyText
              text={skill.name}
              disabled={false}
              speed={3}
              className="custom-class text-lg text-pink-300"
            />
          </li>
        ))}
      </motion.ul>

      {/* Orbit Animation */}
      {/* <div className="flex justify-center mt-20">
        <BeamCircle
          size={window.innerWidth < 500 ? 250 : window.innerWidth < 900 ? 350 : 450}
          centerIcon={
            <img
              src={Icon.javascript}
              alt="center"
              className="w-12 h-12 object-contain"
            />
          }
          orbits={[
            {
              id: 1,
              radiusFactor: 0.25,
              speed: 8,
              icon: <img src={Icon.HTML} alt="HTML" className="w-full h-full object-contain" />,
              iconSize: 30,
              orbitThickness: 3,
            },
            {
              id: 2,
              radiusFactor: 0.35,
              speed: 9,
              icon: <img src={Icon.Css} alt="CSS" className="w-full h-full object-contain" />,
              iconSize: 32,
              orbitThickness: 3,
            },
            {
              id: 3,
              radiusFactor: 0.45,
              speed: 10,
              icon: (
                <img
                  src={Icon.javascript}
                  alt="JavaScript"
                  className="w-full h-full object-contain"
                />
              ),
              iconSize: 34,
              orbitThickness: 3,
            },
            {
              id: 4,
              radiusFactor: 0.55,
              speed: 12,
              icon: <img src={Icon.react} alt="React" className="w-full h-full object-contain" />,
              iconSize: 36,
            },
            {
              id: 5,
              radiusFactor: 0.65,
              speed: 13,
              icon: (
                <img
                  src={Icon.Mongo}
                  alt="MongoDB"
                  className="w-full h-full object-contain"
                />
              ),
              iconSize: 36,
            },
            {
              id: 6,
              radiusFactor: 0.75,
              speed: 14,
              icon: (
                <img
                  src={Icon.github}
                  alt="GitHub"
                  className="w-full h-full object-contain"
                />
              ),
              iconSize: 36,
            },
            {
              id: 7,
              radiusFactor: 0.85,
              speed: 15,
              icon: (
                <img
                  src={Icon.tailwind}
                  alt="Tailwind"
                  className="w-full h-full object-contain"
                />
              ),
              iconSize: 40,
            },
          ]}
        />
      </div> */}
    </div>
  );
};

export default Technology;
