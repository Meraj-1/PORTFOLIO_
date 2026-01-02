// import React from "react";

// const QuoteCard = () => {
//   return (
//     <div className="h-[20vh] flex items-center justify-center text-white font-mono">
//       <div className="relative border border-gray-600 px-8 py-6 rounded-sm max-w-2xl">
//         {/* Top-left quote mark */}
//         {/* <span className="absolute -top-2  px-2 m-auto left-5 text-gray-400 text-3xl">“</span> */}
//         {/* Quote text */}
//         <p className="relative text-md lg:text-xl">
//          I don't deploy to impress, I deploy to express.
//         </p>

//         {/* Bottom-right author box */}
//         <div className="absolute -bottom-6 right-8 flex items-center space-x-2 bg-[#2b2f36] px-4 py-1 border border-gray-600 rounded-sm">
//           <span className="text-gray-400 absolute  -mt-5 -ml-2 text-xl">”</span>
//           <p className="text-gray-300 relative">Mr.Meraj</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteCard;
import React from "react";
import { motion } from "framer-motion";

const QuoteCard = () => {
  return (
    <div className="h-[25vh] flex items-center justify-center px-4">
      <motion.div
        // whileHover={{ scale: 1.03, rotateZ: 1 }}
        className="relative w-full max-w-2xl p-8 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#C778DD]/30 rounded-2xl shadow-[0_0_30px_rgba(199,119,221,0.3)] backdrop-blur-sm"
      >
        {/* Top-left glowing quote mark */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute -top-3 left-4  text-5xl text-[#C778DD] opacity-80"
        >
          “
        </motion.span>

        {/* Quote Text */}
        <p className="text-white text-lg lg:text-xl font-mono leading-relaxed text-center">
          I don't deploy to impress, I deploy to express.
        </p>

        {/* Bottom-right author */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-6 right-6 flex items-center gap-2 bg-[#2b2f36]/80 px-4 py-1 border border-[#C778DD]/30 rounded-md shadow-[0_0_15px_rgba(199,119,221,0.4)]"
        >
          <span className="text-[#C778DD] absolute -top-2 left-1 text-xl">”</span>
          <p className="text-gray-300 font-semibold">Mr.Meraj</p>
        </motion.div>

        {/* Bottom subtle glow line */}
        {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C778DD]/50 via-[#8b5cf6]/40 to-[#f472b6]/40 rounded-t-full animate-pulse"></div> */}
      </motion.div>
    </div>
  );
};

export default QuoteCard;

