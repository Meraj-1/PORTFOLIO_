import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assests";
import BlurText from "./BlurText";
const Hero = () => {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  

  return (
<div
  className="px-3 flex items-center justify-center md:h-screen w-full bg-cover bg-center bg-no-repeat"
  // style={{ backgroundImage: "url('https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg')" }}
>
  <div className="flex flex-col xl:flex-row md:mt-[260px] lg:mt-[180px] mt-[180px] items-center gap-6 md:gap-12">
    {/* Profile Image */}
     <motion.img
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 7 }}
      whileInView={{ opacity: 1, y: 4 }}
      viewport={{ once: true }}
      className="h-[260px] cursor-pointer md:h-[550px] rounded-lg  object-cover"
      // src={Icon.person}
      src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-coding-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--html-logo-programming-developer-futuristic-20-pack-science-technology-illustrations-9008568.png?f=webp"
      alt="Profile"
    /> 

    {/* Hero Text */}
    <div className="flex flex-col sm:px-10 text-teal-50 text-center md:text-left">
      <BlurText
        text="Hi, I'm MERAJ ANSARI"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete} 
        className="flex justify-center items-center text-4xl lg:text-6xl md:text-7xl  mb-8"
      />
      <div className="flex justify-center text-white md:justify-start">
      <BlurText
        text="A Passionate Software Developer"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete} 
        className="flex  justify-center items-center text-2xl sm:text-2xl lg:text-5xl md:text-6xl font-bold mb-8 "
      />
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;
// A Passionate Software Developer