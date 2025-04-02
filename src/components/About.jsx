// import { icon } from "@fortawesome/fontawesome-svg-core";
import React from 'react'
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion"



const About = () => {
  return (
    <motion.section
      id="about"
      className="relative   text-black py-20 lg:py-30">
      <div className="absolute bottom-0 left-0 w-full h-24 border-b-2"></div>
    </motion.section>
  )
};

export default About;
