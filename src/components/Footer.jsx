import React from "react";

const Footer = () => {

  return (
    <footer className="bg-[#1E1E1E] text-white py-4 w-full">      
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
