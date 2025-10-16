import React from "react";
import { Icon } from "../assests/assets"; // ✅ fix the spelling if it's actually 'assets'

const Links = () => {
  const socialIcons = [
    Icon.discord,
    Icon.github,
    Icon.Linkedin,
    Icon.Twitter,
  ];

  return (
    // ✅ hidden on small & medium, visible from lg screens
    <div className="hidden lg:flex absolute -ml-[10em] -mt-[17em] flex-col items-center">
      {/* Line */}
      <div className="bg-[#ABB2BF] h-[16em] w-[2px]" />

      {/* Icons */}
      <div className="flex flex-col items-center mt-2 space-y-2">
        {socialIcons.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`icon-${index}`}
            className="w-[30px] h-auto hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default Links;

