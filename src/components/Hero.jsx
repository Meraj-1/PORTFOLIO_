import React from "react";
import { Icon } from "../assests/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AnimateText from "../animate_compo/AnimateText";
import ShinyText from "../animate_compo/ShineText";
import TrueFocus from "../animate_compo/TrueFocus";
import Orb from "../animate_compo/Orb";
import Header from "./Header";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Ensure your resume is in the 'public' folder
    link.download = "Meraj_Ansari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="px-3 flex relative items-center justify-center h-[100vh] md:h-[120vh] lg:h-screen xl:h-[90vh] w-full bg-cover bg-center bg-no-repeat">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
        src={Icon.Backgroundclip}
        // src='blob:https://artlist.io/1ed1b620-c43b-4cf6-a854-bab6571b579d'
        type="video/mp4" />
      </video> */}
      <div className="flex flex-col lg:flex-row xl:flex-row items-center gap-6 md:gap-12 relative z-10">
        {/* Profile Image with Orb Background */}
        <div className="">
          {/* Orb as background */}


          {/* Profile Image on top */}
          <img
            className=" md:h-[500px]  mix-blend-lighten h-[300px] md:mt-10 cursor-pointer"
            src={Icon.project}
            alt="Profile"
          />
        </div>

        {/* Hero Text */}
        <div className="flex flex-col text-center">
          <span className="text-black text-xl sm:flex items-center justify-center md:text-4xl lg:text-5xl font-semibold">
            <AnimateText
              text="Hi, I'm"
              className="text-4xl md:text-4xl normal_text lg:text-3xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="tech_head mt-5 text-black sm:mt-0 mb-5 sm:mb-0">
              <TrueFocus
                sentence="MERAJ ANSARI"
                manualMode={false}
                blurAmount={5}
                borderColor="purple"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
          </span>

          <span className="text-black px-8 md:text-4xl mt-3 lg:text-5xl font-semibold">
            <AnimateText
              text="A Passionate "
              className="text-3xl md:text-4xl normal_text lg:text-4xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </span>
          <span className="text-black px-8  md:text-4xl mt-3 lg:text-5xl font-semibold">
            <AnimateText
              text="Full Stack Developer"
              className="text-3xl hero_ md:text-4xl normal_text lg:text-8xl font-bold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </span>

          {/* Buttons */}
          <div className="flex justify-center gap-4 md:gap-20 mt-10">
            <button>
              <a
                className="px-9 py-3 hero_text border rounded-full"
                href="/#contact"
              >
              Contact
              </a>
            </button>

            <button onClick={handleDownload}>
              <span className="px-9 py-3 hero_text border text-black rounded-full text-lg">
               Resume
                <FontAwesomeIcon icon={faDownload} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// A Passionate Software Developer
