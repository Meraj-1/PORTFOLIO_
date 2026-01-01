// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "1. What makes you the right fit for this role?",
//     answer:
//       "I am the right fit because of my MERN stack expertise, problem-solving ability, and proven project experience. I bring both technical skills and a collaborative mindset, which ensures I can add value to your team from day one."
//   },
//   {
//     question: "2. Why should we hire you over others?",
//     answer:
//       "I bring a unique combination of hands-on project work, quick adaptability, and strong commitment to delivering results. I focus not only on writing efficient code but also on solving real business problems effectively."
//   },
//   {
//     question: "3. What value will you add to our company?",
//     answer:
//       "I will contribute by building scalable, user-friendly applications, collaborating closely with team members, and bringing innovative solutions. My goal is to help the company save time, improve efficiency, and deliver high-quality products."
//   },
//   {
//     question: "4. What’s your biggest strength and weakness?",
//     answer:
//       "My strength is problem-solving and adapting quickly to new technologies. My weakness is that I sometimes spend too much time perfecting details, but I’ve been improving by setting realistic deadlines to balance speed and quality."
//   },
//   {
//     question: "5. Where do you see yourself in the next 5 years?",
//     answer:
//       "I see myself growing as a skilled full-stack developer, leading projects, mentoring junior developers, and contributing to the long-term growth of the company I work with."
//   }
// ];

// const InterviewFAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-5xl mx-auto mb-40 p-4">
//       <h2 className="text-2xl  mb-6 text-white">
//         <span className="text-[#C778DD] text-2xl">#</span>
//         Why <span className="text-[#C778DD]">Choose Me</span>
//       </h2> 
//       {faqs.map((faq, index) => (
//         <div key={index} className="mb-3 border border-gray-800 rounded-lg overflow-hidden">
//           <button
//             onClick={() => toggleFAQ(index)}
//             className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-medium focus:outline-none bg-[#1E1E1E] hover:bg-[#C778DD] transition"
//           >
//             {faq.question}
//             <span className="text-[#C778DD] font-bold">
//               {openIndex === index ? "−" : "+"}
//             </span>
//           </button>

//           <AnimatePresence initial={false}>
//             {openIndex === index && (
//               <motion.div
//                 key="content"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="overflow-hidden"
//               >
//                 <div className="px-4 py-3 text-black bg-[#C778DD]">
//                   {faq.answer}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InterviewFAQ;
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
//       <div className="max-w-4xl mx-auto mb-20">
//         <h2 className="text-4xl font-bold text-white">
//           Interview <span className="text-[#C778DD]">Perspective</span>
//         </h2>
//         <p className="mt-4 text-gray-400">
//           Common interview questions — answered with clarity, confidence and real experience.
//         </p>
//       </div>

//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
//         {/* Questions */}
//         <div className="space-y-4">
//           {faqs.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setActive(index)}
//               className={`w-full text-left px-6 py-5 rounded-2xl border transition
//                 ${
//                   active === index
//                     ? "bg-white/5 border-[#C778DD]/50 text-white"
//                     : "bg-transparent border-white/10 text-gray-400 hover:text-white"
//                 }`}
//             >
//               <span className="text-sm uppercase tracking-wide text-[#C778DD]">
//                 Question {index + 1}
//               </span>
//               <p className="mt-2 font-medium">{item.question}</p>
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
//               <span className="text-sm uppercase tracking-wide text-[#C778DD]">
//                 My Answer
//               </span>
//               <p className="mt-4 text-gray-300 leading-relaxed">
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
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes you the right fit for this role?",
    answer:
      "I am a strong fit because of my hands-on MERN stack experience, problem-solving mindset, and ability to adapt quickly. I focus on building scalable, user-friendly solutions that align with real business needs."
  },
  {
    question: "Why should we hire you over other candidates?",
    answer:
      "I bring proven project experience, clean coding practices, and a strong sense of ownership. I don’t just complete tasks — I understand the problem and deliver thoughtful solutions."
  },
  {
    question: "What value will you add to our company?",
    answer:
      "I add value by developing efficient, maintainable applications, collaborating well with teams, and continuously improving systems to save time and improve product quality."
  },
  {
    question: "What are your strengths and weaknesses?",
    answer:
      "My strength is analytical problem-solving and learning new technologies quickly. My weakness is sometimes over-polishing details, which I now manage by prioritizing deadlines and impact."
  },
  {
    question: "Where do you see yourself in five years?",
    answer:
      "I see myself as a senior full-stack developer, leading impactful projects, mentoring juniors, and contributing to long-term company growth."
  }
];

const InterviewFAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black py-32 px-6 md:px-20">
      {/* Heading */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Interview <span className="text-[#C778DD]">Simulation</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Real interview questions — answered with clarity and intent.
        </p>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Questions Panel */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-full text-left p-5 rounded-2xl border transition backdrop-blur
                ${
                  active === index
                    ? "bg-[#C778DD]/10 border-[#C778DD]"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
            >
              <span className="block text-xs uppercase tracking-widest text-[#C778DD] mb-2">
                Question {index + 1}
              </span>
              <p className="text-white font-medium">
                {item.question}
              </p>
            </button>
          ))}
        </div>

        {/* Answer Panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur"
            >
              <span className="text-xs uppercase tracking-widest text-[#C778DD]">
                Answer
              </span>
              <p className="mt-4 text-gray-300 leading-relaxed text-lg">
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
