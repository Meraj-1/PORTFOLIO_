import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const stats = [
  { label: "Focus", value: "Full-stack products" },
  { label: "Primary stack", value: "MERN stack" },
  { label: "Approach", value: "UI & architecture" },
];

const highlights = [
  "MERN Stack Developer (MongoDB, Express, React, Node.js)",
  "Frontend focused on React & Next.js with modern UI/UX",
  "Backend development with Express, Node.js & TypeScript",
  "Experience building real-world, production-level applications",
];

const About = () => (
  <>
    <section className="section" id="about">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <span className="section-index">02 — A little about me</span>
            <h2>
              Thoughtful by
              <br />
              design. Technical
              <br />
              by nature.
            </h2>
          </div>
          <p>
            I turn complex ideas into useful digital experiences — pairing
            considered interfaces with dependable engineering from the first
            sketch to production.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3>Hi, I’m Meraj.</h3>
            <p>
              I’m a MERN Stack Developer with a strong focus on frontend and
              backend development. I build scalable web applications using
              React, Next.js, Node.js, Express, and TypeScript — bringing ideas
              to life with clean UI and solid architecture.
            </p>
            <ul className="highlight-list">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Icon.About}
              alt="Meraj working on a digital product"
              loading="lazy"
            />
          </motion.div>

          <div className="about-stats" aria-label="Experience highlights">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
