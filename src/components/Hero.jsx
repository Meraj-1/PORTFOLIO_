import React from "react";
import { Icon } from "../assests/assets";
import Links from "../ui/Links";
import { motion } from "framer-motion";
import TargetCursor from "../animate_compo/TargetCursor";

const Hero = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row h-auto   lg:pt-20">
      <div className="md:m-20 m-2">
        <Links/>
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}/>
         <span className="cursor-target font-bold md:text-[32px] lg:text-[50px] text-[20px] text-white">
          HI I'm MERAJ{" "}
          <span className="text-[#C778DD] font-extrabold">
            {" "}
            Software Developer{" "}
          </span>{" "}
          &<br />{" "}
          <span className="text-[#C778DD] font-extrabold">Web Developer</span>
        </span>
        <div></div>
        <br />
        <div>
          <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}/>
        <span className="text-white text-sm lg:text-lg">
         
          I turn complex problems into elegant, efficient code with a focus on{" "}
          <br />
          performance and user experience.
        </span>
        </div>
        <div className="flex gap-10">
        {/* <span></span> */}
        <button className="text-[#C778DD] mt-10 flex px-6 py-1 lg:px-10 lg:py-3 lg:text-[20px] border rounded-md">
          <a href="#contact"> Contact</a>
        </button>

        <a
          href="/meraj2.pdf"
          download
          className="text-[#C778DD] mt-10 flex px-6 py-1 lg:px-10 lg:py-3 lg:text-[20px] border rounded-md"
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
            <span className="text-[#C778DD]"> #Python.</span>
          </span>
        </div>
      </div>
      {/* <QuoteCard/> */}
    </div>
  );
};

export default Hero;
