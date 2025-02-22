// import React from 'react'
// import {motion} from 'framer-motion'
// import {Icon} from "../assests/assests"
// import Dev from './Dev';
// import Cube from './Cube';

// const Hero = () => {

//   const text = "Hi, I'm MERAJ ANSARI"; // The text to animate

//   const container = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.07, // Delay between each letter
//       },
//     },
//   };

//   const child = {
//     hidden: { opacity: 0, y: "100%" },
//     visible: { opacity: 1, y: "0%" },

//   };
//   return (
// <div className='px-3 flex justify-center  items-center'>
//   <div className='flex justify-center items-center h-[70vh] md:h-[100vh]'>
//   <div className='flex flex-col sm:px-10  '>
//         <motion.h2
//       className="text-3xl border-t-4 border-b-4 sm:text-4xl lg:text-7xl md:text-5xl topic_head  text-white mb-8 "
//       variants={container} 
//       initial="hidden"
//       animate="visible"
//     >
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           className="inline-block"
//           variants={child}
//         >
//          {char === " " ? `\u00A0` : char}
//         </motion.span>
//       ))}
//     </motion.h2>
//     <motion.h2
//      initial={{opacity: 0, y:10}}
//      transition={{duration: 2}}
//      whileInView={{opacity: 1, y:0}}
//      viewport={{once: true}}
//     className="text-2xl sm:text-2xl lg:text-4xl md:text-2xl font-bold mt-10 text-white mb-2 sm:mb-4">
//       A Passionate Software Developer
//     </motion.h2>
//     </div>
//   </div>
//   {/* <Dev/> */}
// </div>


//   )
// }

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
// import Herobg from '../assests/'; // Adjust the path if needed

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
    <div 
      className="px-3 flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <div className='flex justify-center items-center h-[70vh] md:h-[100vh]'>
        <div className='flex flex-col sm:px-10'>
          <motion.h2
            className="text-3xl border-t-4 border-b-4 sm:text-4xl lg:text-7xl md:text-5xl topic_head text-white mb-8"
            variants={container} 
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} className="inline-block" variants={child}>
                {char === " " ? `\u00A0` : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-2xl lg:text-4xl md:text-2xl font-bold mt-10 text-white mb-2 sm:mb-4"
          >
            A Passionate Software Developer
          </motion.h2>
        </div>
      </div>
    </div>
  );
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