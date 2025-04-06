import React from "react";
import RotatingText from "../animate_compo/RotatingText";
import ScrollVelocity from "../animate_compo/ScrollVelocity";

const Footer = () => {
  const velocity = 50; // Adjust speed as needed

  return (
    <footer className="bg-black text-white py-4 w-full">
      <ScrollVelocity
        texts={["@vue_code"]}
        velocity={velocity}
        className="custom-scroll-text normal_text text-white text-center mb-2"
      />
      
      {/* <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400 font-light">
          {new Date().toLocaleDateString("en-GB")}
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
