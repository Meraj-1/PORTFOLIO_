import React from 'react'
import {motion} from 'framer-motion'
import {Icon} from "../assests/assests"
import Dev from './Dev';

const Hero = () => {

  const text = "Hi, I'm MERAJ ANSARI"; // The text to animate

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // Delay between each letter
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },

  };
  return (
<div className='px-3 mt-20 pt-10'>
  <div className='flex flex-col sm:px-10 md:px-20 lg:px-40'>
        <motion.h2
      className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl topic_head animate-text font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-8 sm:mb-12 md:mb-16"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
        >
         {char === " " ? `\u00A0` : char}
        </motion.span>
      ))}
    </motion.h2>

    <div className="absolute top-0 left-auto animate-cursor bg-black h-8 w-[3px] sm:h-10 md:h-12 lg:h-14"></div>
    <motion.h2
     initial={{opacity: 0, y:10}}
     transition={{duration: 2}}
     whileInView={{opacity: 1, y:0}}
     viewport={{once: true}}
    className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-2 sm:mb-4">
      "A Passionate Software Developer"
    </motion.h2>
    <motion.h2
     initial={{opacity: 0, y:10}}
     transition={{duration:2}}
     whileInView={{opacity: 1, y:0}}
     viewport={{once: true}}
    className='text-2xl sm:text-2xl md:text-2xl lg:text-3xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6 sm:mb-10'>
      "The software we create today defines the world of tomorrow."
    </motion.h2>
    <motion.p
      initial={{opacity: 0, y:10}}
      transition={{duration:3}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
    className=' topic_head animate-text text-transparent bg-clip-text '>
    "Through innovation and collaboration, we shape a future of endless possibilities.
    Every line of code brings us one step closer to a smarter, more connected world."
    </motion.p>
    <Dev/>

    {/* contact */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=""
    >
      <table className=''>
        <tbody>
          {/* Email Link */}
          <tr>
            <td className="p-2 align-middle">
              <img src={Icon[10]} alt="Email Icon" className="w-8 h-8 bg-white rounded-full" />
            </td>
            <td className="p-2 ">
              <a
                className="text-purple-600 text-lg hover:underline"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdmerajansari76@gmail.com&su=Proposal for Software Development Collaboration&body=Hello,%0D%0AI hope this message finds you well. My name is Meraj Ansari, and I am a Software Developer. I would love to assist you with your project or any technical requirements."
                target="_blank"
                rel="noopener noreferrer"
              >
               : mohdmerajansari76@gmail.com
              </a>
            </td>
          </tr>

          {/* GitHub Link */}
          <tr>
            <td className="p-2 align-middle">
              <img src={Icon[6]} alt="GitHub Icon" className="w-8 h-8 bg-white rounded-full" />
            </td>
            <td className="p-2 align-middle">
              <a
                className="text-purple-600 text-lg hover:underline"
                href="https://github.com/Meraj-1"
                target="_blank"
                rel="noopener noreferrer"
              >
               : vue_code
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  </div>

  <div className='mt-4 flex md:px-20 sm:px-10   lg:px-40'>
    <motion.button 
    initial={{opacity: 0, y:10}}
    transition={{duration: 2}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
    className='bg-purple-600  text-white font-bold text-lg py-3 px-6 rounded-md transition-all duration-300 hover:bg-purple-700 '>
      <a href="#contact" className=" text-center">CONTACT ME</a>
    </motion.button>
  </div>
</div>


  )
}

export default Hero;




// <motion.div 
// initial={{opacity: 0, y:10}}
// transition={{duration: 2}}
// whileInView={{opacity: 1, y:0}}
// viewport={{once: true}}
// className='flex flex-col gap-2'>
//  <a className=' text-purple-900 text-xl flex pt-2 items-center' href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdmerajansari76@gmail.com&su=Proposal for Software Development Collaboration&body=Hello,%0D%0AI
//   hope this message finds you well. My name is Meraj Ansari, and I am a Software Developer. I would love to assist you with your project or any technical requirements.">
//    <img src={Icon[10]} className='w-10 bg-white '/>
// : mohdmerajansari76@gmail.com</a>
//  {/* <a className=' text-purple-900 text-xl flex  pt-2 items-center ' href='https://www.instagram.com/vue_code/'>
//  <img src={Icon[11]} className='w-20 bg-white '/>
// : vue_code</a> */}
//  <a className=' text-purple-900 text-xl flex pt-2 ' href='https://github.com/Meraj-1'>
//  <img src={Icon[6]} className='w-8 pr-1 '/>
// : vue_code</a>
// </motion.div> 