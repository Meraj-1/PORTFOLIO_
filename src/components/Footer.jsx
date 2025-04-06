import React from "react";
import RotatingText from "../animate_compo/RotatingText";
import ScrollVelocity from "../animate_compo/ScrollVelocity";

const Footer = () => (
  <footer className="text-black py-3">
    <ScrollVelocity
  texts=
  {[
    '@vue_code'
    ]} 

  // velocity={velocity} 
  className="custom-scroll-text  flex items-center justify-center text-white"
/>
    {/* <div className="container flex justify-center items-center mx-auto text-center">
    <p className="text-sm  text-white  font-light">
   {new Date().toLocaleDateString("en-GB")} 
</p>


    </div> */}
  </footer>
);

export default Footer;
