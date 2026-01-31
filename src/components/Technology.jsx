import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";
import RotatingText from "../animate_compo/RotatingText.jsx";

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
    right: {
      name: "Next.js",
      icon: "https://tse3.mm.bing.net/th/id/OIP.T4Cc6edg_0mlnnAFE1ha5gHaHa?pid=Api",
    },
  },
  {
    left: { name: "Tailwind", icon: Icon.tailwind },
    right: { name: "Git", icon: Icon.git },
  },
];

const TechCard = ({ icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.06 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur hover:border-[#C778DD]/60"
  >
    <img src={icon} alt={name} className="w-8 h-8 object-contain" />
    <span className="text-white font-medium">{name}</span>
  </motion.div>
);

const Technology = () => {
  return (
    <section className="bg-black py-32 px-6 md:px-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-24 text-center"
      >
        <div className="flex justify-center">
          <RotatingText
            texts={["TOOLS", "&", "TECHNOLOGIES"]}
            mainClassName="text-[#C778DD] text-3xl md:text-5xl font-bold"
            rotationInterval={2000}
          />
        </div>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          How frontend and backend technologies combine to form my full-stack DNA.
        </p>
      </motion.div>

      {/* DNA Stack */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C778DD]/40 to-transparent" />

        <div className="space-y-20">
          {dnaStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between flex-col md:flex-row gap-6"
            >
              {/* Left */}
              <div className="w-full md:w-[45%] flex justify-end">
                <TechCard {...item.left} />
              </div>

              {/* Center Dot */}
              <div className="absolute md:static left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C778DD]" />

              {/* Right */}
              <div className="w-full md:w-[45%] flex justify-start">
                <TechCard {...item.right} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Identity */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl font-bold text-white">
            Meraj — <span className="text-[#C778DD]">MERN Stack Developer</span>
          </h3>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            I build scalable backend systems and elegant frontend experiences —
            from database to pixel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
