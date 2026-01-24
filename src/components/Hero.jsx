
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-[-15%] w-[420px] h-[420px] bg-[#C778DD]/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[500px] h-[500px] bg-indigo-500/25 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      {/* Custom Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-14 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT — CONTENT */}
        <div>
          <Links />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="cursor-target text-white font-extrabold leading-[1.1]
                       text-[30px] sm:text-[38px] lg:text-[60px]"
          >
            Engineering digital
            <br />
            <span className="relative inline-block text-[#C778DD]">
              experiences
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute left-0 -bottom-0 border-0 rounded-full h-[3px] w-full
                           bg-gradient-to-r from-[#C778DD] to-indigo-400
                           origin-left"
              />
            </span>
            <br />
            that perform, scale,and last.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-xl text-gray-400
                       text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            I’m <span className="text-white font-semibold">Meraj</span> — a
            full-stack software developer building scalable architectures,
            intuitive user experiences, and performance-driven web
            applications that solve real-world problems.
          </motion.p>

          {/* Micro Value Line */}
          <p className="mt-3 text-sm text-gray-500">
            From idea → architecture → production.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <a
              href="#contact"
              className="cursor-target px-9 py-3 rounded-md
                         bg-gradient-to-r from-[#C778DD] to-indigo-400
                         text-black font-semibold
                         hover:scale-105 hover:shadow-[0_0_30px_rgba(199,120,221,0.6)]
                         transition"
            >
              Let’s Build Something
            </a>

            <a
              href="/meraj.ansari.pdf"
              download
              className="cursor-target px-9 py-3 rounded-md
                         border border-white/20 text-white
                         hover:border-[#C778DD] hover:text-[#C778DD]
                         transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT — VISUAL CORE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Pulse Rings */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute w-[340px] h-[340px] lg:w-[440px] lg:h-[440px]
                       rounded-full border border-[#C778DD]/30"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]
                       rounded-full border border-indigo-400/20"
          />

          {/* Profile Image */}
          <motion.img
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 200 }}
            src={Icon.main_hero}
            alt="Meraj"
            className="relative z-10 h-[260px] sm:h-[320px] lg:h-[420px]
                       object-contain
                       drop-shadow-[0_60px_100px_rgba(0,0,0,0.7)]"
          />

          {/* Floating Badge */}
          {/* <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -bottom-8 px-6 py-2 rounded-full
                       bg-white/5 backdrop-blur
                       border border-white/10
                       text-sm text-gray-300"
          >
            Currently building with{" "}
            <span className="text-[#C778DD] font-semibold">#Python</span>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
