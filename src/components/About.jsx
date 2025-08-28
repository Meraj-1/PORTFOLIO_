import React from "react";
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-start justify-center gap-12 lg:gap-24 px-6 md:px-20 py-16 md:py-32 bg-transparent"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col max-w-3xl text-start md:text-left"
      >
        {/* Title */}
        <h2 className="cursor-target text-white lg:mb-10 font-semibold text-3xl lg:text-4xl md:text-2xl mb-6">
          <span className="font-extrabold">#</span>About Me{" "}
          <span className="text-pink-400">---------</span>
        </h2>

        {/* Intro */}
        <span className="text-pink-400 font-semibold mb-4 text-xl">
          Hi, I'm Meraj 
        </span>

        {/* Sections */}
        <div className="space-y-8">
          {/* Passion for Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-pink-400 font-bold text-xl mb-2 flex items-start gap-2">
               Passion for Development
            </h3>
            <p className="text-white text-base leading-relaxed">
              Coding for me is more than just writing code — it’s about building
              meaningful digital experiences. I love transforming complex ideas
              into efficient, scalable, and user-friendly solutions.
            </p>
          </motion.div>

          {/* Full-Stack Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-pink-400 font-bold text-xl mb-2 flex items-center gap-2">
               Full-Stack Expertise
            </h3>
            <p className="text-white text-start text-base leading-relaxed">
              With strong expertise in both frontend and backend, I specialize in
              creating responsive UIs, powerful APIs, and secure databases —
              delivering complete, end-to-end web applications.
            </p>
          </motion.div>

          {/* Problem-Solving Mindset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-pink-400 font-bold text-xl mb-2 flex items-center gap-2">
               Problem-Solving Mindset
            </h3>
            <p className="text-white text-base leading-relaxed">
              I enjoy breaking down complex challenges into clean, practical
              solutions. My focus is on writing maintainable and optimized code
              that supports both present needs and future growth.
            </p>
          </motion.div>

          {/* Growth & Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-pink-400 font-bold text-xl mb-2 flex items-center gap-2">
               Growth & Innovation
            </h3>
            <p className="text-white text-base leading-relaxed">
              I believe learning never stops. I continuously explore new tools,
              frameworks, and technologies to stay ahead — ensuring the solutions
              I build are modern, innovative, and future-ready.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.img
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="cursor-target w-auto pl-10 ms:pl-0 md:w-96 h-auto object-contain drop-shadow-2xl"
        src={Icon.About}
        alt="About Icon"
      />
    </section>
  );
};

export default About;
