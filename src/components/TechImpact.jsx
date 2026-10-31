import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const impactMap = [
  {
    tech: "React",
    icon: Icon.react,
    use: "Component-based UI architecture",
    impact: "Fast, reusable, and maintainable interfaces",
  },
  {
    tech: "Next.js",
    mark: "N",
    use: "Server-side rendering & SEO",
    impact: "Better performance and search visibility",
  },
  {
    tech: "Node.js",
    icon: Icon.node,
    use: "Backend logic & APIs",
    impact: "Scalable and secure server-side systems",
  },
  {
    tech: "Express",
    icon: Icon.express,
    use: "API routing & middleware",
    impact: "Clean, structured REST APIs",
  },
  {
    tech: "MongoDB",
    icon: Icon.Mongo,
    use: "Database & data modeling",
    impact: "Flexible and scalable data storage",
  },
  {
    tech: "Tailwind CSS",
    icon: Icon.tailwind,
    use: "Utility-first styling",
    impact: "Rapid UI development with consistency",
  },
];

const TechImpact = () => (
  <section className="section" id="impact">
    <div className="site-container">
      <div className="section-heading">
        <div>
          <span className="section-index">08 — The outcome</span>
          <h2>Technology<br />with purpose.</h2>
        </div>
        <p>
          The value of a tool is what it makes possible: more useful products,
          stronger foundations, and better experiences.
        </p>
      </div>

      <div className="impact-list">
        {impactMap.map((item, index) => (
          <motion.div
            className="impact-row"
            key={item.tech}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
          >
            <div className="impact-tech">
              {item.icon ? (
                <img src={item.icon} alt="" loading="lazy" />
              ) : (
                <span className="tech-mark" aria-hidden="true">{item.mark}</span>
              )}
              <span>{item.tech}</span>
            </div>
            <p>{item.use}</p>
            <p>{item.impact}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechImpact;
