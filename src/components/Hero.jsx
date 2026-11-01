import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "../assests/assets";

const Hero = () => (
  <section className="hero" id="home">
    <div className="site-container hero-grid">
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Full-stack engineer <span aria-hidden="true">/</span> Mumbai, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          I turn complex ideas
          <span>into useful software.</span>
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          I’m Meraj Ansari, a full-stack engineer building thoughtful web
          experiences from interface to backend.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          <a className="button-primary" href="#contact">
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="button-secondary hero-text-link" href="#projects">
            Selected work <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            className="button-secondary hero-text-link hero-resume-link"
            href="/meraj_ansari.pdf"
            download
          >
            Download résumé <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="hero-meta">
          <span className="availability">Open to conversations</span>
          <span>Frontend · Backend · E-commerce</span>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
      >
        <span className="hero-visual-index" aria-hidden="true">
          M<span> / </span>01
        </span>
        <img src={Icon.main_hero} alt="Illustration representing Meraj Ansari" />
        <div className="visual-caption">
          <span>Meraj Ansari</span>
          <span>Building for the web</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
