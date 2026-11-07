import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

const Hero = () => (
  <section className="hero hero-editorial" id="home">
    <div className="hero-stage">
      <div
        className="hero-color-block hero-color-block-left"
        aria-hidden="true"
      />
      <div
        className="hero-color-block hero-color-block-right"
        aria-hidden="true"
      />
      <div className="hero-portrait-panel" aria-hidden="true" />

      <motion.h1
        className="hero-display-name"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Meraj</span>
        <span>Ansari</span>
      </motion.h1>

      <motion.img
        className="hero-portrait"
        src="/Hero%20Image.png"
        alt="Portrait of Meraj Ansari"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08 }}
      />

      <motion.div
        className="hero-intro"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16 }}
      >
        <p className="hero-kicker">
          Software Engineer <span>/</span> Mumbai, India
        </p>
        <h2>Thoughtful web experiences.</h2>
        <p className="hero-copy">
          I’m Meraj, a full-stack engineer creating responsive web experiences
          with React, Next.js, Node.js, and MongoDB—from polished interfaces to
          e-commerce workflows.
        </p>
        <a className="hero-learn-link" href="#about">
          A little about me <ArrowRight size={15} aria-hidden="true" />
        </a>
      </motion.div>

      <nav className="hero-shortcuts" aria-label="Featured links">
        <a href="/meraj_ansari.pdf" download>
          Download résumé <ArrowDownRight size={15} aria-hidden="true" />
        </a>
        <a href="#projects">
          Latest work <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href="#contact">
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </div>
  </section>
);

export default Hero;
