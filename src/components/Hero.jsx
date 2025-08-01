import React from "react";
import { Icon } from "../assests/assets";
import { motion } from "framer-motion";
import TargetCursor from "../animate_compo/TargetCursor";

const Hero = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row h-auto   lg:pt-20">
      <div className="md:m-20 m-2">
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}/>
         <span className="cursor-target font-bold md:text-[32px] text-[20px] text-white">
          HI I'm MERAJ{" "}
          <span className="text-pink-400 font-extrabold">
            {" "}
            Software Developer{" "}
          </span>{" "}
          &<br />{" "}
          <span className="text-pink-400 font-extrabold">Web Developer</span>
        </span>
        <div></div>
        <br />
        <span className="text-white text-sm">
          I turn complex problems into elegant, efficient code with a focus on{" "}
          <br />
          performance and user experience.
        </span>
        <div className="flex gap-10">
        {/* <span></span> */}
        <button className="text-pink-400 mt-10 flex px-6 py-1 border">
          <a href="#contact"> Contact</a>
        </button>

        <a
          href="/meraj2.pdf"
          download
          className="text-pink-400 mt-10 flex px-6 py-1 border"
        >
          Resume
        </a>
        </div>
      </div>
      <div className="m-2">
        <motion.img
          whileHover={{ scale: 1.05 }}
          className=" md:h-[386px] h-[300px]  cursor-pointer"
          src={Icon.main_hero}
          alt="Profile"
        />
        <div className=" cursor-target flex items-center border   justify-center">
          <span className="text-white">
            I'm starting to explore
            <span className="text-pink-400"> #Python.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
