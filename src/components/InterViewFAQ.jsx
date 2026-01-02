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
  const listRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("[data-index]");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // center trigger
      }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black text-white px-4 py-24">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold">
          Interview <span className="text-[#C778DD]">Simulation</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Scroll — questions update, answers respond.
        </p>
      </div>

      {/* MOBILE INTERVIEW FLOW */}
      <div className="relative">
        {/* ANSWER (CENTER FIXED) */}
        <div className="sticky top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mx-auto max-w-[92%]"
            >
              <span className="text-xs uppercase tracking-widest text-[#C778DD]">
                Answer
              </span>
              <p className="mt-4 text-gray-200 text-base leading-relaxed">
                {faqs[active].answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* QUESTIONS (SCROLL ONLY THIS) */}
        <div ref={listRef} className="relative z-0">
          {faqs.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="min-h-screen flex items-start pt-20"
            >
              <div className="sticky top-16 w-full">
                <motion.div
                  animate={{
                    opacity: active === index ? 1 : 0.3,
                    scale: active === index ? 1 : 0.95,
                  }}
                  className={`p-5 rounded-xl border backdrop-blur
                    ${
                      active === index
                        ? "bg-[#C778DD]/10 border-[#C778DD]"
                        : "bg-white/5 border-white/10"
                    }`}
                >
                  <span className="block text-xs uppercase tracking-widest text-[#C778DD] mb-2">
                    Question {index + 1}
                  </span>
                  <p className="text-lg font-medium">
                    {item.question}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewFAQ;
