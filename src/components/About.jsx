// import React from "react";
// import { Icon } from "../assests/assets.js";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="flex flex-col md:flex-row items-start justify-center gap-12 lg:gap-24 px-6 md:px-20 py-16 md:py-32 bg-transparent"
//     >
//       {/* Text Section */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="flex flex-col max-w-3xl text-start md:text-left"
//       >
//         {/* Title */}
//         <h2 className="cursor-target text-white lg:mb-10 font-semibold text-3xl lg:text-4xl md:text-2xl mb-6">
//           <span className="font-extrabold">#</span>About Me{" "}
//           <span className="text-[#C778DD]">---------</span>
//         </h2>

//         {/* Intro */}
//         <span className="text-[#C778DD] font-semibold mb-4 text-xl">
//           Hi, I'm Meraj 
//         </span>

//         {/* Sections */}
//         <div className="space-y-8">
//           {/* Passion for Development */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-[#C778DD] font-bold text-xl mb-2 flex items-start gap-2">
//                Passion for Development
//             </h3>
//             <p className="text-white text-base leading-relaxed">
//               Coding for me is more than just writing code — it’s about building
//               meaningful digital experiences. I love transforming complex ideas
//               into efficient, scalable, and user-friendly solutions.
//             </p>
//           </motion.div>

//           {/* Full-Stack Expertise */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-[#C778DD] font-bold text-xl mb-2 flex items-center gap-2">
//                Full-Stack Expertise
//             </h3>
//             <p className="text-white text-start text-base leading-relaxed">
//               With strong expertise in both frontend and backend, I specialize in
//               creating responsive UIs, powerful APIs, and secure databases —
//               delivering complete, end-to-end web applications.
//             </p>
//           </motion.div>

//           {/* Problem-Solving Mindset */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-[#C778DD] font-bold text-xl mb-2 flex items-center gap-2">
//                Problem-Solving Mindset
//             </h3>
//             <p className="text-white text-base leading-relaxed">
//               I enjoy breaking down complex challenges into clean, practical
//               solutions. My focus is on writing maintainable and optimized code
//               that supports both present needs and future growth.
//             </p>
//           </motion.div>

//           {/* Growth & Innovation */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-[#C778DD] font-bold text-xl mb-2 flex items-center gap-2">
//                Growth & Innovation
//             </h3>
//             <p className="text-white text-base leading-relaxed">
//               I believe learning never stops. I continuously explore new tools,
//               frameworks, and technologies to stay ahead — ensuring the solutions
//               I build are modern, innovative, and future-ready.
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Image Section */}
//       <motion.img
//         whileHover={{ scale: 1.05 }}
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="cursor-target w-auto pl-10 ms:pl-0 md:w-96 h-auto object-contain drop-shadow-2xl"
//         src={Icon.About}
//         alt="About Icon"
//       />
//     </section>
//   );
// };

// export default About;
// import React from "react";
// import { motion } from "framer-motion";
// import { Icon } from "../assests/assets.js";

// const journey = [
//   {
//     year: "2021",
//     title: "Started Coding",
//     desc: "My journey began with curiosity — learning how the web works and writing my first lines of code.",
//   },
//   {
//     year: "2022",
//     title: "Frontend Craft",
//     desc: "Focused on UI/UX, animations, and responsive layouts to create smooth user experiences.",
//   },
//   {
//     year: "2023",
//     title: "Full-Stack Growth",
//     desc: "Built complete applications with frontend, backend, and databases working together.",
//   },
//   {
//     year: "Now",
//     title: "Building with Purpose",
//     desc: "I now focus on scalable, meaningful, and real-world solutions with clean architecture.",
//   },
// ];

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative px-6 md:px-20 py-24 md:py-36"
//     >
//       {/* Section Title */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center mb-20"
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white">
//           My <span className="text-[#C778DD]">Journey</span>
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           A quick timeline of how I evolved as a developer
//         </p>
//       </motion.div>

//       {/* Timeline */}
//       <div className="relative max-w-4xl mx-auto">
//         {/* Center Line */}
//         <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

//         {journey.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className={`relative mb-16 flex w-full ${
//               index % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
//             }`}
//           >
//             <div className="w-full md:w-[45%] bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-[#C778DD]/40 transition">
//               <span className="text-[#C778DD] font-bold text-sm">
//                 {item.year}
//               </span>
//               <h3 className="text-xl font-semibold text-white mt-2 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>

//             {/* Dot */}
//             <span className="absolute left-1/2 top-6 w-4 h-4 bg-[#C778DD] rounded-full -translate-x-1/2 shadow-[0_0_20px_#C778DD]" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Floating Image */}
//       <motion.img
//         src={Icon.About}
//         alt="Developer Illustration"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="mx-auto mt-24 w-72 md:w-96 opacity-90"
//       />
//     </section>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const stats = [
  { label: "Experience", value: "Clicktrik Company" },
  { label: "Projects Built", value: "6+ Real-World Projects" },
  { label: "Primary Stack", value: "MERN Stack" },
];

const highlights = [
  "MERN Stack Developer (MongoDB, Express, React, Node.js)",
  "Frontend focused on React & Next.js with modern UI/UX",
  "Backend development with Express, Node.js & TypeScript",
  "Experience building real-world, production-level applications",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 md:px-20 py-28 md:py-40 bg-black overflow-hidden"
    >
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(199,120,221,0.15),transparent_40%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Designing <span className="text-[#C778DD]">Interfaces</span><br />
            & Building Full-Stack Solutions
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            I'm <span className="text-[#C778DD] font-semibold">Meraj</span>, a MERN Stack Developer with a strong focus on both
            <span className="text-white"> frontend and backend development</span>. I specialize in building
            scalable web applications using <span className="text-white">React, Next.js, Node.js, Express</span> and
            <span className="text-white"> TypeScript</span>. I enjoy turning ideas into reliable, production-ready products
            with clean UI and solid architecture.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-14 items-center">
          {/* Left – Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-[#C778DD]" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </motion.div>

          {/* Center – Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#C778DD]/30 to-purple-500/20 blur-3xl" />
            <img
              src={Icon.About}
              alt="Frontend Developer"
              className="relative w-72 md:w-80 lg:w-96 object-contain"
            />
          </motion.div>

          {/* Right – Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
              >
                <h3 className="text-3xl font-bold text-white">
                  {item.value}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
