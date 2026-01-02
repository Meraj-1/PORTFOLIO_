import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";
import RotatingText from "../animate_compo/RotatingText.jsx"

const dnaStack = [
  {
    left: { name: "HTML", icon: Icon.HTML },
    right: { name: "Node.js", icon: Icon.node },
  },
  {
    left: { name: "CSS", icon: Icon.Css },
    right: { name: "Express", icon: Icon.express },
  },
  {
    left: { name: "JavaScript", icon: Icon.javascript },
    right: { name: "MongoDB", icon: Icon.Mongo },
  },
  {
    left: { name: "React", icon: Icon.react },
    right: { name: "TypeScript", icon: Icon.ts },
  },
  {
    left: { name: "Next.js", icon: Icon.react },
    right: { name: "Tailwind", icon: Icon.tailwind },
  },
];

const Technology = () => {
  return (
    <section className="bg-black py-32 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-24 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <div className="flex justify-center items-center">
            <RotatingText
              texts={["TOOL'S", "&", "Technologie's"]}
              mainClassName="cursor-target text-[#C778DD] px-3 py-1  text-2xl md:text-5xl rounded-lg overflow-hidden"
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
          {/* My <span className="text-[#C778DD]">DNA Stack</span> */}
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          How frontend and backend technologies come together to define my
          full-stack development process.
        </p>
      </motion.div>

      {/* DNA Structure */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#C778DD]/40 via-white/20 to-[#C778DD]/40" />

        <div className="space-y-20">
          {dnaStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between"
            >
              {/* Left Tech */}
              <div className="w-[45%] flex justify-end">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur">
                  <img
                    src={item.left.icon}
                    alt={item.left.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-white font-medium">
                    {item.left.name}
                  </span>
                </div>
              </div>

              {/* Connector Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C778DD]" />

              {/* Right Tech */}
              <div className="w-[45%] flex justify-start">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur">
                  <img
                    src={item.right.icon}
                    alt={item.right.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-white font-medium">
                    {item.right.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Identity */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl font-bold text-white">
            Meraj — <span className="text-[#C778DD]">MERN Stack Developer</span>
          </h3>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            I bridge modern frontend experiences with scalable backend systems to
            build complete, production-ready web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
