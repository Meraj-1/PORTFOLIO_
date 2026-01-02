import React from "react";
import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "UI Planning & Design",
    desc: "Understanding requirements and planning clean, user-friendly interfaces.",
    tech: ["UI Thinking", "Responsive Design"],
  },
  {
    step: "02",
    title: "Frontend Development",
    desc: "Building scalable and performant UIs using modern frontend technologies.",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    step: "03",
    title: "Backend Development",
    desc: "Creating secure and scalable REST APIs with proper architecture.",
    tech: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    step: "04",
    title: "Database & Authentication",
    desc: "Designing flexible schemas and implementing secure authentication.",
    tech: ["MongoDB", "JWT", "Auth Systems"],
  },
  {
    step: "05",
    title: "Optimization & Deployment",
    desc: "Improving performance, adding animations and preparing production builds.",
    tech: ["Performance", "Framer Motion", "Production Ready"],
  },
];

const WorkFlow = () => {
  return (
    <section
      id="workflow"
      className="relative px-6 md:px-20 py-32 bg-black overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-24"
      >
        <h2 className="text-5xl font-extrabold text-white leading-tight">
          Development <span className="text-[#C778DD]">Workflow</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg">
          A structured approach I follow to build modern, scalable MERN stack
          applications.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-[14px] top-0 h-full w-px bg-[#bd61d6]" />

        <div className="space-y-1">
          {workflow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-8"
            >
              {/* Step Circle */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-[#C778DD] flex items-center justify-center text-black font-bold">
                {item.step}
              </div>

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg w-full hover:border-[#C778DD]/40 transition">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-400">{item.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-[#C778DD] bg-[#C778DD]/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
