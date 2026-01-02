// import React from "react";
// import { Icon } from "../assests/assets";
// import Links from "../ui/Links";
// import { motion } from "framer-motion";
// import TargetCursor from "../animate_compo/TargetCursor";

// const Hero = () => {
//   return (
//     <div className="flex justify-center flex-col md:flex-row h-auto   lg:pt-20">
//       <div className="md:m-20 m-2">
//         <Links/>
//         <TargetCursor 
//         spinDuration={2}
//         hideDefaultCursor={true}/>
//          <span className="cursor-target font-bold md:text-[32px] lg:text-[50px] text-[20px] text-white">
//           HI I'm MERAJ{" "}
//           <span className="text-[#C778DD] font-extrabold">
//             {" "}
//             Software Developer{" "}
//           </span>{" "}
//           &<br />{" "}
//           <span className="text-[#C778DD] font-extrabold">Web Developer</span>
//         </span>
//         <div></div>
//         <br />
//         <div>
//           <TargetCursor 
//         spinDuration={2}
//         hideDefaultCursor={true}/>
//         <span className="text-white text-sm lg:text-lg">
         
//           I turn complex problems into elegant, efficient code with a focus on{" "}
//           <br />
//           performance and user experience.
//         </span>
//         </div>
//         <div className="flex gap-10">
//         {/* <span></span> */}
//         <button className="text-[#C778DD] mt-10 flex px-6 py-1 lg:px-10 lg:py-3 lg:text-[20px] border rounded-md">
//           <a href="#contact"> Contact</a>
//         </button>

//         <a
//           href="/meraj2.pdf"
//           download
//           className="text-[#C778DD] mt-10 flex px-6 py-1 lg:px-10 lg:py-3 lg:text-[20px] border rounded-md"
//         >
//           Resume
//         </a>
//         </div>
//       </div>
//       <div className="m-2">
//         <motion.img
//           whileHover={{ scale: 1.05 }}
//           className=" md:h-[386px] h-[300px]  cursor-pointer"
//           src={Icon.main_hero}
//           alt="Profile"
//         />
//         <div className=" cursor-target flex items-center border   justify-center">
//           <span className="text-white">
//             I'm starting to explore
//             <span className="text-[#C778DD]"> #Python.</span>
//           </span>
//         </div>
//       </div>
//       {/* <QuoteCard/> */}
//     </div>
//   );
// };

// export default Hero;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets";
import Links from "../ui/Links";
import TargetCursor from "../animate_compo/TargetCursor";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#C778DD]/25 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] bg-indigo-500/20 blur-[140px] rounded-full" />
      </div>

      {/* Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-14 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — CONTENT */}
        <div>
          <Links />

          {/* Identity Line */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="cursor-target text-white font-extrabold leading-tight
                       text-[28px] sm:text-[36px] lg:text-[56px]"
          >
            Building digital
            <br />
            <span className="relative inline-block text-[#C778DD]">
              experiences
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute left-0 -bottom-2 h-[3px] bg-[#C778DD]"
              />
            </span>
            <br />
            that actually work.
          </motion.h1>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-gray-400 text-sm sm:text-base lg:text-lg"
          >
            Hi, I’m <span className="text-white font-semibold">Meraj</span> — a
            software developer focused on scalable architecture, smooth UX,
            and real-world performance.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            <a
              href="#contact"
              className="cursor-target px-8 py-3 rounded-md 
                         bg-[#C778DD] text-black font-semibold 
                         hover:scale-105 transition"
            >
              Let’s Talk
            </a>

            <a
              href="/meraj2.pdf"
              download
              className="cursor-target px-8 py-3 rounded-md 
                         border border-white/20 text-white
                         hover:border-[#C778DD] hover:text-[#C778DD]
                         transition"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT — IDENTITY CORE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Pulse Ring */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px]
                       rounded-full border border-[#C778DD]/30"
          />

          <motion.img
            whileHover={{ scale: 1.06 }}
            src={Icon.main_hero}
            alt="Meraj"
            className="relative z-10 h-[260px] sm:h-[320px] lg:h-[420px]
                       object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          />

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 px-6 py-2 rounded-full
                       bg-white/5 backdrop-blur border border-white/10
                       text-sm text-gray-300"
          >
            Exploring <span className="text-[#C778DD] font-semibold">#Python</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
