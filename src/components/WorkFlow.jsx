import React from "react";
import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "UI planning & design",
    desc: "Understand the requirements and plan clear, user-friendly interfaces.",
    tech: ["UI thinking", "Responsive design"],
  },
  {
    step: "02",
    title: "Frontend development",
    desc: "Build scalable, accessible, and performant interfaces with modern tools.",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    step: "03",
    title: "Backend development",
    desc: "Create secure, maintainable REST APIs with thoughtful architecture.",
    tech: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    step: "04",
    title: "Data & authentication",
    desc: "Design flexible data models and implement reliable authentication.",
    tech: ["MongoDB", "JWT", "Auth systems"],
  },
  {
    step: "05",
    title: "Optimization & delivery",
    desc: "Refine performance and prepare the product for production.",
    tech: ["Performance", "Framer Motion", "Deployment"],
  },
];

const WorkFlow = () => (
  <section className="section" id="workflow">
    <div className="site-container">
      <div className="section-heading">
        <div>
          <span className="section-index">06 — How I work</span>
          <h2>From first thought<br />to final build.</h2>
        </div>
        <p>
          A clear, collaborative process keeps every decision purposeful and
          every part of the product working together.
        </p>
      </div>

      <div className="workflow-list">
        {workflow.map((item, index) => (
          <motion.article
            className="workflow-step"
            key={item.step}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <span className="workflow-number">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="workflow-tags">
              {item.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkFlow;
