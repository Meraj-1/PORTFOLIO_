import React from "react";

const Footer = () => {

  return (
    <footer className="bg-violet-100 text-black py-4 w-full">      
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
