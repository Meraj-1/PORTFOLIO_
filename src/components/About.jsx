// import { icon } from "@fortawesome/fontawesome-svg-core";
import React from 'react'
import { Icon } from "../assests/assests.js";
import { motion } from "framer-motion"



const About = () => {
  return (
    <motion.section
      id="about"
      className="mt-10 relative   text-black py-20 lg:py-40">
      <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* About Content */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-4xl lg:text-7xl font-bold  flex items-center justify-center text-center mb-20 md:mb-20   lg:mb-20  text-white ">
            Turning Ideas into Reality
          </motion.h2>
          <div className="flex flex-col gap-6  xl:flex-row  justify-between  sm:space-y-4">
            {/* <motion.img
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full xl:w-1/2  mb-4 md:mb-0 border rounded-full" src={Icon.Business} alt="icon" />

            <motion.div
             initial={{ opacity: 0, y: 100 }}
             transition={{ duration: 2 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
              className="text-lg leading-relaxed  text-white w-full">
              <h3 className="font-bold text-start">Transforming Concepts into Functional Solutions</h3>
              <p className="text-start mb-4">Developers turn abstract ideas into tangible applications by writing efficient, scalable code that meets real-world needs.</p>
              <h3 className="font-bold text-start">Crafting User-Centric Experiences</h3>
              <p className="text-start mb-4">Developers design intuitive interfaces, ensuring that complex systems are accessible and easy to use for everyone.</p>
              <h3 className="font-bold text-start">Implementing Scalable Solutions</h3>
              <p className="text-start mb-4">Developers design and implement efficient algorithms and data structures to optimize performance and reduce latency.</p>
              <h3 className="font-bold text-start">Ensuring Seamless Integration and Scalability</h3>
              <p className="text-start">Developers build scalable and maintainable solutions, ensuring they can adapt to evolving user needs and business growth.</p>
            </motion.div> */}

          </div>

          {/* Skills Section */}
    
        </div>
      </div>

      {/* Decorative Footer Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 border-b-2"></div>
    </motion.section>
  )
};

export default About;
