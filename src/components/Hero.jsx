import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets";
import BlurText from "./BlurText";

const Hero = () => {
  return (
    <div className="px-3 flex relative items-center justify-center md:h-screen w-full bg-cover bg-center bg-no-repeat">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Icon.Backgroundclip} type="video/mp4" /> {/* ✅ Using imported video */}
      </video>

      <div className="flex flex-col xl:flex-row md:mt-[260px] lg:mt-[180px] mt-[180px] items-center gap-6 md:gap-12 relative z-10">
        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 7 }}
          whileInView={{ opacity: 1, y: 4 }}
          viewport={{ once: true }}
          className="h-[260px] cursor-pointer md:h-[550px] rounded-lg object-cover"
          src={Icon.person}
          alt="Profile"
        />

        {/* Hero Text */}
        <div className="flex flex-col text-center">
          <span className="text-white text-3xl font-semibold">Hi, I'm MERAJ ANSARI</span>
          <span className="text-white text-2xl p-3 font-semibold">
            A Passionate <span className="border-b border-yellow-100">Software Developer</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 md:gap-20 mt-10">
          <button>
            <a className="px-9 py-3 border text-white rounded-full text-lg hover:text-black hover:bg-white duration-300" href="/#contact">
              Contact
            </a>
          </button>
          <button>
            <a className="px-9 py-3 border text-white rounded-full text-lg hover:text-black hover:bg-white duration-300" href="">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// A Passionate Software Developer