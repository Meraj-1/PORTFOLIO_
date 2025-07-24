import React from "react";
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16 md:py-32 bg-transparent"
    >
      {/* Text Section */}
      <div className="flex flex-col max-w-xl text-center md:text-left">
        <h2 className="cursor-target text-white font-semibold text-lg md:text-xl mb-4">
          <span className="text-pink-400 font-extrabold">#</span>About-us{" "}
          <span className="text-pink-400">------------</span>
        </h2>
        <p className="cursor-target text-white text-sm md:text-base leading-relaxed">
          Hi, <span className="text-pink-400 font-semibold">I'm Meraj</span> — a
          dedicated Software and Web Developer with a passion for transforming
          complex challenges into clean, efficient, and high-performing
          solutions.
        </p>
        <p className="cursor-target text-white text-sm md:text-base leading-relaxed mt-3">
          With a strong foundation in both front-end and back-end technologies,
          I specialize in building responsive, user-friendly web applications
          that not only meet functional requirements but also deliver seamless
          user experiences.
        </p>
      </div>

      {/* Image Section */}
      <motion.img
        whileHover={{ scale: 1.05 }}
        className="cursor-target w-64 md:w-96 h-auto object-contain cursor-pointer"
        src={Icon.About}
        alt="About Icon"
      />
    </div>
  );
};

export default About;
