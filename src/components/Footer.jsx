import React from "react";
import RotatingText from "../animate_compo/RotatingText";

const Footer = () => (
  <footer className="text-black   py-3">
    <div className="container flex justify-center items-center mx-auto text-center">
    <p className="text-sm  text-white  font-light">
   {new Date().toLocaleDateString("en-GB")} 
</p>

    </div>
  </footer>
);

export default Footer;
