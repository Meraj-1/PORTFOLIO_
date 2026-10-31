import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const skillProof = [
  {
    name: "React",
    icon: Icon.react,
    points: [
      "Built 4+ dynamic dashboards",
      "Used hooks, context & reusable components",
      "Focused on performance & clean UI",
    ],
  },
  {
    name: "Next.js",
    mark: "N",
    points: [
      "SEO optimized pages",
      "Server-side rendering & routing",
      "Improved page load performance",
    ],
  },
  {
    name: "Node.js & Express",
    icon: Icon.node,
    points: [
      "Built RESTful APIs",
      "Authentication & authorization",
      "Scalable backend architecture",
    ],
  },
  {
    name: "MongoDB",
    icon: Icon.Mongo,
    points: [
      "Designed flexible schemas",
      "CRUD operations & aggregation",
      "Handled real-world data models",
    ],
  },
  {
    name: "Tailwind CSS",
    icon: Icon.tailwind,
    points: [
      "Built responsive layouts",
      "Custom design systems",
      "Rapid UI development",
    ],
  },
];

const SkillProof = () => (
  <section className="section" id="skills">
    <div className="site-container">
      <div className="section-heading">
        <div>
          <span className="section-index">07 — In practice</span>
          <h2>Skills, with<br />proof behind them.</h2>
        </div>
        <p>
          Not just technologies I know — a snapshot of what I’ve put to work in
          real interfaces, APIs, and applications.
        </p>
      </div>

      <div className="proof-grid">
        {skillProof.map((skill, index) => (
          <motion.article
            className="proof-card"
            key={skill.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <div className="proof-card-header">
              {skill.icon ? (
                <img src={skill.icon} alt="" loading="lazy" />
              ) : (
                <span className="tech-mark" aria-hidden="true">{skill.mark}</span>
              )}
              <h3>{skill.name}</h3>
            </div>
            <ul>
              {skill.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SkillProof;
