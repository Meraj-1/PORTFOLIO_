import React from 'react'
import { Icon } from '../assests/assests'
import { motion } from 'framer-motion'

const Dev = () => {
  return ( 
    <div className='mt-20 md:mt-40 mb-10'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-xl sm:text-2xl md:text-3xl flex justify-center lg:text-3xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-20 lg:mb-20 sm:mb-10'>
        "End-to-End Software Development"
      </motion.h2>

      <div className='flex flex-col xl:flex-row gap-5 lg:gap-2 '>
        <div className='flex flex-col items-center mb-10 sm:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-2xl flex justify-center md:text-2xl lg:text-2xl topic_head animate-text text-transparent bg-clip-text mb-6 sm:mb-10'>
            Development
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={Icon[12]}
            // src= "https://blogimage.vantagecircle.com/content/images/2023/03/employee-engagement-committee-names.png"
            className=' rounded-full'
            alt=""
          />
        </div>

        <div className='flex flex-col items-center mb-10 sm:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-2xl flex justify-center md:text-2xl lg:text-2xl topic_head animate-text text-transparent bg-clip-text mb-6 sm:mb-10'>
            Growth
          </motion.h2>
          <motion.img
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            src={Icon[13]}
            className=' rounded-full '
            alt=""
          />
        </div>

        <div className='flex flex-col items-center'>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-2xl flex justify-center md:text-2xl lg:text-2xl topic_head animate-text text-transparent bg-clip-text mb-6 sm:mb-10'>
            "Empowering Teamwork"
          </motion.h2>
          <motion.img
             initial={{ opacity: 0, y: 10 }}
             transition={{ duration: 2 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            src={Icon[14]}
            className=' rounded-full '
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Dev
