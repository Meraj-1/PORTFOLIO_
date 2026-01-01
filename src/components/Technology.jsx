// import React from "react";
// import { motion } from "framer-motion";
// import { Icon } from "../assests/assets.js";

// const Technology = () => {
//   return (
//     <section className="bg-black py-32 px-6 md:px-20">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mb-20"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-white">
//           Technology <span className="text-[#C778DD]">Stack</span>
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl">
//           A carefully chosen set of technologies I use to design, build and scale
//           modern web applications.
//         </p>
//       </motion.div>

//       {/* Bento Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {/* Frontend */}
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="col-span-1 md:col-span-2 rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8"
//         >
//           <h3 className="text-2xl font-semibold text-white mb-6">
//             Frontend Development
//           </h3>

//           <div className="flex flex-wrap gap-6">
//             {[
//               { name: "HTML", icon: Icon.HTML },
//               { name: "CSS", icon: Icon.Css },
//               { name: "JavaScript", icon: Icon.javascript },
//               { name: "React", icon: Icon.react },
//               { name: "Next.js", icon: Icon.react },
//               { name: "TypeScript", icon: Icon.ts },
//             ].map((tech, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 bg-black/30 px-4 py-3 rounded-xl border border-white/10"
//               >
//                 <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
//                 <span className="text-white text-sm font-medium">
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Backend */}
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8"
//         >
//           <h3 className="text-2xl font-semibold text-white mb-6">
//             Backend & APIs
//           </h3>

//           <div className="space-y-4">
//             {[
//               { name: "Node.js", icon: Icon.node },
//               { name: "Express", icon: Icon.express },
//               { name: "MongoDB", icon: Icon.Mongo },
//             ].map((tech, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-4 bg-black/30 px-4 py-3 rounded-xl border border-white/10"
//               >
//                 <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
//                 <span className="text-white font-medium">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Tools */}
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8"
//         >
//           <h3 className="text-2xl font-semibold text-white mb-6">
//             Styling & Tools
//           </h3>

//           <div className="flex flex-wrap gap-4">
//             {[
//               { name: "Tailwind CSS", icon: Icon.tailwind },
//               { name: "GitHub", icon: Icon.github },
//             ].map((tech, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 bg-black/30 px-4 py-3 rounded-xl border border-white/10"
//               >
//                 <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
//                 <span className="text-white text-sm">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Highlight Card */}
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="rounded-3xl bg-gradient-to-br from-[#C778DD]/20 to-transparent border border-[#C778DD]/30 p-8 flex flex-col justify-center"
//         >
//           <h3 className="text-2xl font-bold text-white mb-4">
//             Full-Stack Focus
//           </h3>
//           <p className="text-gray-300 leading-relaxed">
//             I specialize in building complete MERN applications — from clean,
//             interactive frontends to secure, scalable backend systems.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Technology;
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const dnaStack = [
  {
    left: { name: "HTML", icon: Icon.HTML },
    right: { name: "Node.js", icon: Icon.node },
  },
  {
    left: { name: "CSS", icon: Icon.Css },
    right: { name: "Express", icon: Icon.express },
  },
  {
    left: { name: "JavaScript", icon: Icon.javascript },
    right: { name: "MongoDB", icon: Icon.Mongo },
  },
  {
    left: { name: "React", icon: Icon.react },
    right: { name: "TypeScript", icon: Icon.ts },
  },
  {
    left: { name: "Next.js", icon: Icon.react },
    right: { name: "Tailwind", icon: Icon.tailwind },
  },
];

const Technology = () => {
  return (
    <section className="bg-black py-32 px-6 md:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-24 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#C778DD]">DNA Stack</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          How frontend and backend technologies come together to define my
          full-stack development process.
        </p>
      </motion.div>

      {/* DNA Structure */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#C778DD]/40 via-white/20 to-[#C778DD]/40" />

        <div className="space-y-20">
          {dnaStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between"
            >
              {/* Left Tech */}
              <div className="w-[45%] flex justify-end">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur">
                  <img
                    src={item.left.icon}
                    alt={item.left.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-white font-medium">
                    {item.left.name}
                  </span>
                </div>
              </div>

              {/* Connector Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C778DD]" />

              {/* Right Tech */}
              <div className="w-[45%] flex justify-start">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur">
                  <img
                    src={item.right.icon}
                    alt={item.right.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-white font-medium">
                    {item.right.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Identity */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl font-bold text-white">
            Meraj — <span className="text-[#C778DD]">MERN Stack Developer</span>
          </h3>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            I bridge modern frontend experiences with scalable backend systems to
            build complete, production-ready web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
