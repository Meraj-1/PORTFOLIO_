import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const stats = [
  { label: "Focus", value: "Full-stack products" },
  { label: "Primary stack", value: "MERN stack" },
  { label: "Approach", value: "UI & architecture" },
];

const highlights = [
  "Full-stack development with React.js, Next.js, TypeScript, Node.js, and Express.js",
  "E-commerce features spanning carts, wishlists, checkout, inventory, and orders",
  "REST APIs, MongoDB data operations, and payment and shipping integrations",
  "Responsive interfaces, production support, debugging, and feature testing",
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
            Thoughtful interfaces, dependable engineering, and a focus on
            making useful things for the web.
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
            <div className="about-intro">
              <span className="about-kicker">A little about me</span>
              <h3>Hi, I’m Meraj.</h3>
              <p>
                I’m a full-stack software engineer who turns requirements into
                useful web applications. I work across responsive interfaces,
                backend APIs, databases, and e-commerce integrations.
              </p>
            </div>
            <div className="about-education">
              <span>Education</span>
              <strong>Bachelor of Computer Applications</strong>
              <p>Vikas College of Arts, Commerce &amp; Science</p>
            </div>
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
            <span className="about-image-caption">
              <span>Thoughtful by design</span>
              <span aria-hidden="true">01 / 03</span>
            </span>
          </motion.div>

          <div className="about-details">
            <div className="about-stats" aria-label="Experience highlights">
              {stats.map((stat, index) => (
                <div className="about-stat" key={stat.label}>
                  <span className="about-stat-index">
                    0{index + 1}
                  </span>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-focus">
              <span className="about-focus-label">What I work on</span>
              <ul className="highlight-list">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
