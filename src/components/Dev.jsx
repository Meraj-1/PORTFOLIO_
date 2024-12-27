import React from 'react'
import { Icon } from '../assests/assests'
import { motion } from 'framer-motion'

const Dev = () => {
  return ( 
    <div className='mt-40 mb-10'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-2xl sm:text-2xl flex justify-center md:text-2xl lg:text-3xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-20 lg:mb-20 sm:mb-10'>
        "End-to-End Software Development"
      </motion.h2>

      <div className='flex flex-col xl:flex-row  '>
        <div className='flex flex-col items-center mb-10 sm:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-2xl flex justify-center md:text-2xl lg:text-2xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6 sm:mb-10'>
            Development
          </motion.h2>
          <img
            src={Icon[12]}
            className='w-full xl:w-1/2  sm:max-w-full mb-4 md:mb-0 border rounded-full'
            alt=""
          />
        </div>

        <div className='flex flex-col items-center mb-10 sm:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-2xl flex justify-center md:text-2xl lg:text-2xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6 sm:mb-10'>
            Growth
          </motion.h2>
          <img
            src={Icon[13]}
            className='w-full xl:w-1/2 max-w-xs sm:max-w-full mb-4 md:mb-0 border rounded-full'
            alt=""
          />
        </div>

        <div className='flex flex-col items-center'>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-2xl flex justify-center md:text-2xl lg:text-2xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6 sm:mb-10'>
            "Empowering Teamwork"
          </motion.h2>
          <img
            src={Icon[14]}
            className='w-full xl:w-1/2 max-w-xs sm:max-w-full mb-4 md:mb-0 border rounded-full'
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Dev
