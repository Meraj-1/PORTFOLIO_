import React from 'react'
import { Icon } from "../assests/assests.js";
import { motion } from "framer-motion"
import Cube from './Cube.jsx';

const Technology = () => {
  return (
    <div className="lg:mt-60 mt-20 flex flex-col  mb-20 ">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl topic_head animate-text flex items-center justify-center  text-center font-mono text-white mb-16">
      My Arsenal of Technologies
    </motion.h2>
    {/* <div className='flex justify-between'>
    <Cube/>
    <Cube/>
    <Cube/>
    </div> */}
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
        // { name: 'TailwindCSS', image : "https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development-thumbnail.png" }
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