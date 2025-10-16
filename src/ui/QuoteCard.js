import React from "react";

const QuoteCard = () => {
  return (
    <div className="h-[20vh] flex items-center justify-center text-white font-mono">
      <div className="relative border border-gray-600 px-8 py-6 rounded-sm max-w-2xl">
        {/* Top-left quote mark */}
        <span className="absolute -top-3 bg-[#282C33] px-2 m-auto left-2 text-gray-400 text-5xl">“</span>

        {/* Quote text */}
        <p className="relative text-md lg:text-xl">
         I don’t deploy to impress, I deploy to express.
        </p>

        {/* Bottom-right author box */}
        <div className="absolute -bottom-6 right-8 flex items-center space-x-2 bg-[#2b2f36] px-4 py-1 border border-gray-600 rounded-sm">
          <span className="text-gray-400 absolute bg-[#282C33] -mt-5 -ml-2 text-xl">”</span>
          <p className="text-gray-300 relative">Mr.Meraj</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
