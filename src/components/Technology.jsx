// import React from "react";
// import { Icon } from "../assests/assets.js";
// import { motion } from "framer-motion";
// import RotatingText from "../animate_compo/RotatingText.jsx";
// import ShinyText from "../animate_compo/ShineText.jsx";

// const Technology = () => {
//   return (
//     <div className="px-4 sm:px-[5vw] md:px-[7vw] bg-1E1E1E lg:px-[15vw] py-10">

//       {/* Heading */}
//       <div className="flex justify-center mt-20 md:mt-30 lg:mb-20 items-center gap-2 mb-10">
//         <RotatingText
//           texts={["TOOL'S", "&", "Technologie's"]}
//           mainClassName="cursor-target px-3 py-1 text-white text-2xl md:text-5xl rounded-lg overflow-hidden"
//           staggerFrom="last"
//           initial={{ y: "100%" }}
//           animate={{ y: 0 }}
//           exit={{ y: "-120%" }}
//           staggerDuration={0.025}
//           splitLevelClassName="overflow-hidden"
//           transition={{ type: "spring", damping: 30, stiffness: 400 }}
//           rotationInterval={2000}
//         />
//       </div>

//       {/* Skills Grid */}
//       <motion.ul
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 3 }}
//         viewport={{ once: true }}
//         className="flex flex-wrap gap-6 sm:gap-10 justify-center items-center"
//       >
//         {[
//           { name: "HTML", image: Icon.HTML },
//           { name: "CSS", image: Icon.Css },
//           { name: "JavaScript", image: Icon.javascript },
//           { name: "React", image: Icon.react },
//           {
//             name: "Node.js",
//             image:
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExv78hTzcjlPAXrxbaAy7zTF1KLE_597yjIMxEx00zj0n7U2WM-KH26q6vpk-F7NAjIM&usqp=CAU",
//           },
//           {
//             name: "Express",
//             image:
//               "https://tse4.mm.bing.net/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=Api&P=0&h=180",
//           },
//           { name: "Mongo DB", image: Icon.Mongo },
//           { name: "GitHub", image: Icon.github },
//           { name: "Bootstrap", image: Icon.Bootstrap },
//           { name: "TailwindCSS", image: Icon.tailwind },
//         ].map((skill, index) => (
//           <li
//             key={index}
//             className="cursor-target flex flex-col items-center gap-2 group"
//           >
//             <div className="w-20 h-20 md:w-36 cursor-pointer rounded-lg p-3 flex items-center justify-center transition-transform duration-300 hover:scale-110">
//               <img
//                 src={skill.image}
//                 alt={skill.name}
//                 className="h-full w-full object-contain"
//               />
//             </div>
//             <ShinyText
//               text={skill.name}
//               disabled={false}
//               speed={3}
//               className="custom-class text-lg text-pink-300"
//             />
//           </li>
//         ))}
//       </motion.ul>
//     </div>
//   );
// };

// export default Technology;
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

/* ===================== UNIQUE TECHNOLOGY SECTION =====================
   Concept: "Technology as Capabilities"
   Not just tools — what you can BUILD with them
================================================ */

const capabilities = [
  {
    title: "Frontend Engineering",
    desc: "Building fast, accessible and visually polished user interfaces.",
    stack: ["React", "Next.js", "Tailwind", "JavaScript", "TypeScript"],
    icon: Icon.react,
  },
  {
    title: "Backend Development",
    desc: "Designing scalable APIs and server-side logic with clean architecture.",
    stack: ["Node.js", "Express", "MongoDB", "REST APIs"],
    icon: Icon.node,
  },
  {
    title: "Full‑Stack Applications",
    desc: "End-to-end MERN applications ready for real-world production use.",
    stack: ["Auth", "Dashboards", "Admin Panels", "CRUD Systems"],
    icon: Icon.Mongo,
  },
  {
    title: "UI / UX & Performance",
    desc: "Smooth interactions, animations and performance-focused design.",
    stack: ["Framer Motion", "Responsive UI", "Optimization"],
    icon: Icon.tailwind,
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="relative px-6 md:px-20 py-32 bg-black overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(199,120,221,0.08),transparent)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mb-24"
      >
        <h2 className="text-5xl font-extrabold text-white leading-tight">
          What I <span className="text-[#C778DD]">Build</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg">
          Technologies are tools — what matters is how they come together to
          create scalable, high-quality products.
        </p>
      </motion.div>

      {/* Capability Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {capabilities.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#C778DD]/50 hover:-translate-y-1">
              {/* Icon */}
              <div className="w-14 h-14 mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#C778DD] bg-[#C778DD]/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
