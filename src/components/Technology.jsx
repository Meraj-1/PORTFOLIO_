import React from 'react'
import { Icon } from "../assests/assests.js";
import { motion } from "framer-motion"


const Technology = () => {
  return (
    <div className="lg:mt-60 mt-20 md:mb-40 mb-20 flex flex-col ">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl  animate-text font-bold flex items-center justify-center  text-center  text-white mb-16">
      My Arsenal of Technologies
    </motion.h2>
    <motion.ul
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-6  sm:gap-10   justify-center items-center ">
      {[
        { name: 'HTML', image: Icon.HTML },
        { name: 'CSS', image: Icon.Css },
        { name: 'JavaScript', image: Icon.javascript },
        { name: 'React', image: Icon.react, animate: true },
        // { name: 'Java', image: Icon.Java },
        { name: 'Mongo DB', image: Icon.Mongo },
        { name: 'GitHub', image: "https://e7.pngegg.com/pngimages/1009/39/png-clipart-github-computer-icons-repository-github-white-cat-like-mammal.png" },
        { name: 'Bootstrap', image: Icon.Bootstrap },
        { name: 'TailwindCSS', image: Icon.tailwind },
      ].map((skill, index) => (
        <li key={index} className="flex flex-col items-center gap-2 group">
          <div
            className={`relative w-16 h-16 cursor-pointer bg-gradient-to-br border-2 
                       rounded-full p-3 transition-transform duration-300 ${skill.name === 'React' ? 'rotateReact' : ''
              }`}>
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-md text-white font-small">
            {skill.name}
          </h2>
        </li>
      ))}
    </motion.ul>
  </div>
  )
}

export default Technology