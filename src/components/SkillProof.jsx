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
    icon: Icon.react,
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
    name: "TypeScript",
    icon: Icon.ts,
    points: [
      "Type-safe components & APIs",
      "Reduced runtime bugs",
      "Improved code maintainability",
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

const SkillProof = () => {
  return (
    <section className="bg-black py-32 px-6 md:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Skills with <span className="text-[#C778DD]">Proof</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Not just technologies I know — but what I’ve actually built using them.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillProof.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur hover:border-[#C778DD]/40 transition"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-semibold text-white">
                {skill.name}
              </h3>
            </div>

            {/* Proof Points */}
            <ul className="space-y-3">
              {skill.points.map((point, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-sm flex items-start gap-3"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#C778DD]" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillProof;
