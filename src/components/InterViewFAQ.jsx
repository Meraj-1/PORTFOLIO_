
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "What makes you the right fit for this role?",
//     answer:
//       "I am a strong fit because of my hands-on MERN stack experience, problem-solving mindset, and ability to adapt quickly. I focus on building scalable, user-friendly solutions that align with real business needs."
//   },
//   {
//     question: "Why should we hire you over other candidates?",
//     answer:
//       "I bring proven project experience, clean coding practices, and a strong sense of ownership. I don’t just complete tasks — I understand the problem and deliver thoughtful solutions."
//   },
//   {
//     question: "What value will you add to our company?",
//     answer:
//       "I add value by developing efficient, maintainable applications, collaborating well with teams, and continuously improving systems to save time and improve product quality."
//   },
//   {
//     question: "What are your strengths and weaknesses?",
//     answer:
//       "My strength is analytical problem-solving and learning new technologies quickly. My weakness is sometimes over-polishing details, which I now manage by prioritizing deadlines and impact."
//   },
//   {
//     question: "Where do you see yourself in five years?",
//     answer:
//       "I see myself as a senior full-stack developer, leading impactful projects, mentoring juniors, and contributing to long-term company growth."
//   }
// ];

// const InterviewFAQ = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="bg-black py-32 px-6 md:px-20">
//       {/* Heading */}
//       <div className="max-w-4xl mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white">
//           Interview <span className="text-[#C778DD]">Simulation</span>
//         </h2>
//         <p className="mt-4 text-gray-400">
//           Real interview questions — answered with clarity and intent.
//         </p>
//       </div>

//       {/* Layout */}
//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
//         {/* Questions Panel */}
//         <div className="space-y-4">
//           {faqs.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setActive(index)}
//               className={`w-full text-left p-5 rounded-2xl border transition backdrop-blur
//                 ${
//                   active === index
//                     ? "bg-[#C778DD]/10 border-[#C778DD]"
//                     : "bg-white/5 border-white/10 hover:bg-white/10"
//                 }`}
//             >
//               <span className="block text-xs uppercase tracking-widest text-[#C778DD] mb-2">
//                 Question {index + 1}
//               </span>
//               <p className="text-white font-medium">
//                 {item.question}
//               </p>
//             </button>
//           ))}
//         </div>

//         {/* Answer Panel */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur"
//             >
//               <span className="text-xs uppercase tracking-widest text-[#C778DD]">
//                 Answer
//               </span>
//               <p className="mt-4 text-gray-300 leading-relaxed text-lg">
//                 {faqs[active].answer}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InterviewFAQ;
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes you the right fit for this role?",
    answer:
      "I am a strong fit because of my hands-on MERN stack experience, problem-solving mindset, and ability to adapt quickly.",
  },
  {
    question: "Why should we hire you over other candidates?",
    answer:
      "I bring proven project experience, clean coding practices, and ownership mindset.",
  },
  {
    question: "What value will you add to our company?",
    answer:
      "I build scalable, maintainable systems that directly support business goals.",
  },
  {
    question: "What are your strengths and weaknesses?",
    answer:
      "My strength is fast learning; my weakness is over-polishing which I now manage.",
  },
  {
    question: "Where do you see yourself in five years?",
    answer:
      "I see myself leading impactful projects and mentoring developers.",
  },
];

const InterviewFAQ = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll("[data-index]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black px-6 md:px-20">
      {/* Heading */}
      <div className="max-w-4xl py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Interview <span className="text-[#C778DD]">Simulation</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Scroll down — questions change automatically.
        </p>
      </div>

      {/* SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* QUESTIONS (SCROLL SIDE) */}
        <div className="space-y-32 pb-32">
          {faqs.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="min-h-[60vh] flex items-center"
            >
              <motion.div
                animate={{
                  opacity: active === index ? 1 : 0.3,
                  scale: active === index ? 1 : 0.95,
                }}
                className={`p-6 rounded-2xl border backdrop-blur
                  ${
                    active === index
                      ? "bg-[#C778DD]/10 border-[#C778DD]"
                      : "bg-white/5 border-white/10"
                  }`}
              >
                <span className="block text-xs uppercase tracking-widest text-[#C778DD] mb-2">
                  Question {index + 1}
                </span>
                <p className="text-white text-lg font-medium">
                  {item.question}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ANSWER (STICKY) */}
        <div className="sticky top-32 h-fit">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur"
            >
              <span className="text-xs uppercase tracking-widest text-[#C778DD]">
                Answer
              </span>
              <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                {faqs[active].answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InterviewFAQ;
