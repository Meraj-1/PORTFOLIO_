// import { icon } from "@fortawesome/fontawesome-svg-core";
import React from 'react'
import { Icon } from "../assests/assests.js";
import { motion } from "framer-motion"



const About = () => {
  return (
    <motion.section
      id="about"
      className="relative   text-black py-20 lg:py-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* About Content */}
        <div className="text-center  md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-4xl lg:text-7xl font-bold  flex items-center justify-center text-center mb-20 md:mb-20   lg:mb-20  text-white ">
            {/* Turning Ideas into Reality */}
          </motion.h2>
    
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-24 border-b-2"></div> */}
    </motion.section>
  )
};

export default About;
