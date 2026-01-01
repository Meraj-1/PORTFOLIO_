import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", projects: ["Portfolio Website", "E-commerce App"] },
  { name: "Node.js", projects: ["Backend API", "Chat App"] },
  { name: "MongoDB", projects: ["Database Layer"] },
  { name: "Tailwind", projects: ["UI/UX Styling"] },
];

const SkillPlayGround = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="bg-black min-h-screen flex flex-col items-center py-32 px-6">
      <h2 className="text-4xl font-bold text-white mb-10">
        My <span className="text-[#C778DD]">Skill Playground</span>
      </h2>

      <div className="relative w-full max-w-5xl h-[500px] flex flex-wrap justify-center items-center gap-20">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
            className="relative w-40 h-40 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition"
          >
            <span className="text-white font-semibold text-lg">{skill.name}</span>

            {activeSkill === skill && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-[#C778DD]/20 p-4 rounded-xl shadow-lg text-white text-sm flex flex-col gap-1"
              >
                {skill.projects.map((proj, i) => (
                  <span key={i}>• {proj}</span>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillPlayGround;
