// import React from "react";
// import { motion } from "framer-motion";
// import { Icon } from "../assests/assests";

// const Hero = () => {
//   const text = "Hi, I'm ";
//   const name = " MERAJ ANSARI";

//   const container = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.07,
//       },
//     },
//   };

//   const child = {
//     hidden: { opacity: 0, y: "100%" },
//     visible: { opacity: 1, y: "0%" },
//   };

//   return (
//     <div
//       className="px-3 flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/bg2.png')" }}
//     >
//       <div className="flex flex-col xlg:flex-row items-center gap-6 md:gap-12">
//         {/* Profile Image */}
//         <motion.img
//           initial={{ opacity: 0, y: 10 }}
//           transition={{ duration: 3 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="h-[260px] cursor-pointer md:h-[350px] rounded-lg shadow-lg object-cover"
//           src={Icon.person}
//           alt="Profile"
//         />

//         {/* Hero Text */}
//         <div className="flex flex-col sm:px-10 text-center md:text-left">
//           <motion.h2
//             className="text-3xl border-t-4 sm:text-4xl lg:text-7xl md:text-5xl topic_head text-white mb-8"
//             variants={container}
//             initial="hidden"
//             animate="visible"
//           >
//             {text.split("").map((char, index) => (
//               <motion.span key={index} className="inline-block" variants={child}>
//                 {char === " " ? `\u00A0` : char}
//               </motion.span>
//             ))}
//             {/* Classic MERAJ ANSARI Animation */}
//             <motion.span
//               className="inline-block text-[#35f859] font-bold"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               whileHover={{
//                 textShadow: "0px 0px 10px rgba(255, 204, 0, 0.8)",
//                 scale: 1.05,
//               }}
//             >
//               {name}
//             </motion.span>
//           </motion.h2>

//           <div className="flex justify-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 10 }}
//               transition={{ duration: 2 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-2xl sm:text-2xl lg:text-4xl md:text-2xl font-bold mt-10 text-white mb-2 sm:mb-4 border-t-4"
//             >
//               A Passionate Software Developer
//             </motion.h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assests";
import BlurText from "./BlurText";
const Hero = () => {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  

  return (
<div
  className="px-3 flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bg2.png')" }}
>
  <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-12">
    {/* Profile Image */}
    <motion.img
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-[260px] cursor-pointer md:h-[350px] rounded-lg shadow-lg object-cover"
      src={Icon?.person}
      alt="Profile"
    />

    {/* Hero Text */}
    <div className="flex flex-col sm:px-10 text-white text-center md:text-left">
      <BlurText
        text="Hi, I'm MERAJ ANSARI"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete} 
        className="flex justify-center items-center text-2xl sm:text-2xl lg:text-6xl md:text-2xl font-bold mb-8"
      />

      <div className="flex justify-center md:justify-start">
      <BlurText
        text="A Passionate Software Developer"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete} 
        className="flex justify-center items-center text-2xl sm:text-2xl lg:text-5xl md:text-2xl font-bold mb-8 "
      />
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;
// A Passionate Software Developer