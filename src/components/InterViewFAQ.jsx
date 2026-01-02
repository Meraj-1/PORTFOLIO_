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
 const mobileListRef = useRef(null);

  /* ---------- MOBILE SCROLL LOGIC ---------- */
useEffect(() => {
  if (window.innerWidth >= 768) return;

  const items = mobileListRef.current?.querySelectorAll("[data-index]");
  if (!items) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(Number(entry.target.dataset.index));
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  items.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

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
        root: null,
        rootMargin: "-45% 0px -45% 0px", // center of screen
        threshold: 0,
      }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="bg-black text-white px-4 md:px-20 py-32">
      {/* Heading */}
      <div className="mb-16 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold">
          Interview <span className="text-[#C778DD]">Simulation</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Scroll on mobile. Select on desktop.
        </p>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative">
        {/* Fixed Answer */}
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
              <p className="mt-4 text-gray-200 leading-relaxed">
                {faqs[active].answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll Questions */}
        <div ref={mobileListRef}>
          {faqs.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="min-h-screen pt-24"
            >
              <div className="sticky top-16">
                <motion.div
                  animate={{
                    opacity: active === index ? 1 : 0.35,
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
                  <p className="text-lg font-medium">{item.question}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
 <div className="hidden md:grid grid-cols-2 gap-16 max-w-6xl mx-auto">
      
      {/* LEFT — QUESTIONS (SCROLL NATURALLY) */}
      <div ref={listRef}>
        {faqs.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className="min-h-[70vh] flex items-center"
          >
            <motion.div
              animate={{
                opacity: active === index ? 1 : 0.35,
                scale: active === index ? 1 : 0.96,
              }}
              transition={{ duration: 0.3 }}
              className={`w-full p-6 rounded-2xl border backdrop-blur
                ${
                  active === index
                    ? "bg-[#C778DD]/10 border-[#C778DD]"
                    : "bg-white/5 border-white/10"
                }`}
            >
              <span className="block text-xs uppercase tracking-widest text-[#C778DD] mb-3">
                Question {index + 1}
              </span>
              <p className="text-xl font-medium text-white">
                {item.question}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* RIGHT — ANSWER (STICKY + AUTO UPDATE) */}
      <div className="relative">
        <div className="sticky top-32">
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
    </div>
    </section>
  );
};

export default InterviewFAQ;
