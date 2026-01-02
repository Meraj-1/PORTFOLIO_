import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#0E0E11] text-white overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#C778DD]/20 blur-[120px]" />
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 text-center">
        
        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
        >
          We’d <span className="text-[#C778DD] font-medium">love</span> to hear
          from you. Whether it’s an idea, a project, or just a hello —
          <br className="hidden sm:block" />
          <span className="text-white">
            drop a message and we’ll get back soon.
          </span>
        </motion.p>

        {/* Soft CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xs uppercase tracking-widest text-[#C778DD]"
        >
          Open for conversations
        </motion.div>
      </div>

      {/* Bottom Strip */}
      <div className="relative z-10 bg-black/40 backdrop-blur border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-gray-500">
            © {new Date().getFullYear()} Meraj • All rights reserved
          </span>

          <span className="text-xs text-gray-500">
            Crafted with focus & intent
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  