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
          Full-stack developer · Mumbai, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Engineering digital
          <span>experiences that last.</span>
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          I’m Meraj — a full-stack software developer building scalable
          architectures, intuitive user experiences, and performance-driven
          applications that solve real-world problems.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          <a className="button-primary" href="#contact">
            Let’s build something <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="button-secondary" href="#projects">
            View projects <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="button-secondary" href="/meraj_ansari.pdf" download>
            Download résumé <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="hero-meta">
          <span className="availability">Open to conversations</span>
          <span>Idea → architecture → production</span>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
      >
        <img src={Icon.main_hero} alt="Portrait of Meraj Ansari" />
        <div className="visual-caption">
          <span>Meraj Ansari</span>
          <span>Full-stack developer</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
