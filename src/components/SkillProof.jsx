import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const skillProof = [
  {
    name: "React",
    icon: Icon.react,
    points: [
      "Built responsive storefront and administrator interfaces",
      "Developed product listings, carts, and wishlist experiences",
      "Created interactive product and brand-focused frontend features",
    ],
  },
  {
    name: "Next.js",
    mark: "N",
    points: [
      "Used for modern web application development",
      "Applied alongside React.js in frontend projects",
      "Supported responsive customer-facing experiences",
    ],
  },
  {
    name: "Node.js & Express",
    icon: Icon.node,
    points: [
      "Developed backend features with Node.js and Express.js",
      "Built and integrated REST APIs",
      "Connected payment and shipping services",
    ],
  },
  {
    name: "MongoDB",
    icon: Icon.Mongo,
    points: [
      "Handled product and customer data operations",
      "Managed cart, wishlist, inventory, and order data",
      "Synchronized guest shopping data with customer accounts",
    ],
  },
  {
    name: "Tailwind CSS",
    icon: Icon.tailwind,
    points: [
      "Built responsive customer and administrator interfaces",
      "Styled product-focused layouts for desktop and mobile",
      "Supported consistent frontend experiences",
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
