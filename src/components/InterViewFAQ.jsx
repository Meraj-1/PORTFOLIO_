import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. What makes you the right fit for this role?",
    answer:
      "I am the right fit because of my MERN stack expertise, problem-solving ability, and proven project experience. I bring both technical skills and a collaborative mindset, which ensures I can add value to your team from day one."
  },
  {
    question: "2. Why should we hire you over others?",
    answer:
      "I bring a unique combination of hands-on project work, quick adaptability, and strong commitment to delivering results. I focus not only on writing efficient code but also on solving real business problems effectively."
  },
  {
    question: "3. What value will you add to our company?",
    answer:
      "I will contribute by building scalable, user-friendly applications, collaborating closely with team members, and bringing innovative solutions. My goal is to help the company save time, improve efficiency, and deliver high-quality products."
  },
  {
    question: "4. What’s your biggest strength and weakness?",
    answer:
      "My strength is problem-solving and adapting quickly to new technologies. My weakness is that I sometimes spend too much time perfecting details, but I’ve been improving by setting realistic deadlines to balance speed and quality."
  },
  {
    question: "5. Where do you see yourself in the next 5 years?",
    answer:
      "I see myself growing as a skilled full-stack developer, leading projects, mentoring junior developers, and contributing to the long-term growth of the company I work with."
  }
];

const InterviewFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto mb-40 p-4">
      <h2 className="text-2xl  mb-6 text-white">
        <span className="text-[#C778DD] text-2xl">#</span>
        Why <span className="text-[#C778DD]">Choose Me</span>
      </h2> 
      {faqs.map((faq, index) => (
        <div key={index} className="mb-3 border border-gray-800 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-medium focus:outline-none bg-[#1E1E1E] hover:bg-pink-400 transition"
          >
            {faq.question}
            <span className="text-[#C778DD] font-bold">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 py-3 text-black bg-pink-300">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default InterviewFAQ;
