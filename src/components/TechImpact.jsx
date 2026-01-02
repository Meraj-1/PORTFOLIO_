import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const impactMap = [
  {
    tech: "React",
    icon: Icon.react,
    use: "Component-based UI architecture",
    impact: "Fast, reusable and maintainable interfaces",
  },
  {
    tech: "Next.js",
    icon: "https://tse3.mm.bing.net/th/id/OIP.T4Cc6edg_0mlnnAFE1ha5gHaHa?pid=Api&P=0&h=180",
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

const TechImpact = () => {
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
          Tech → <span className="text-[#C778DD]">Impact</span>
        </h2>
        <p className="mt-4 text-gray-400">
          How each technology I use translates into real-world impact and value.
        </p>
      </motion.div>

      {/* Mapping Cards */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {impactMap.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur"
          >
            {/* Tech */}
            <div className="flex items-center gap-4">
              <img
                src={item.icon}
                alt={item.tech}
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-semibold text-lg">
                {item.tech}
              </span>
            </div>

            {/* Use */}
            <div className="text-gray-300 text-sm leading-relaxed">
              {item.use}
            </div>

            {/* Impact */}
            <div className="text-[#C778DD] font-medium text-sm">
              {item.impact}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechImpact;
