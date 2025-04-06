import React from "react";
import { Icon } from "../assests/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AnimateText from "../animate_compo/AnimateText";
import ShinyText from "../animate_compo/ShineText";
import TrueFocus from "../animate_compo/TrueFocus";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Ensure your resume is in the 'public' folder
    link.download = "Meraj_Ansari_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="px-3 flex relative items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Icon.Backgroundclip} type="video/mp4" />
      </video>

      <div className="flex flex-col lg:flex-row xl:flex-row items-center gap-6 md:gap-12 relative z-10">
        {/* Profile Image */}
        <img
          className="h-[260px] cursor-pointer md:h-[400px] rounded-lg object-cover"
          src={Icon.person}
        />

        {/* Hero Text */}
        <div className="flex flex-col text-center">
          <span className="text-white text-xl sm:flex items-center  justify-center md:text-4xl lg:text-5xl font-semibold">
          <AnimateText
       text="Hi, I'm"
       className="text-4xl  md:text-4xl normal_text lg:text-5xl font-semibold text-center"
       delay={150}
       animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
       animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
       easing="easeOutCubic"
       threshold={0.2}
       rootMargin="-50px"
       onLetterAnimationComplete={handleAnimationComplete}
      />
      <div className="tech_head mt-5 sm:mt-0 mb-5 sm:mb-0">
      <TrueFocus
      sentence="MERAJ ANSARI"
      manualMode={false}
      blurAmount={5}
      borderColor="white"
      animationDuration={2}
      pauseBetweenAnimations={1}
      />
      </div>
            {/* Hi, I'm <span className="hero_text">MERAJ ANSARI</span> */}
          </span>

          <span className="text-white  px-8 md:text-4xl lg:text-5xl font-semibold">
          <AnimateText
       text="A Passionate Software Developer"
       className="text-3xl md:text-4xl normal_text lg:text-5xl font-semibold text-center"
       delay={150}
       animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
       animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
       easing="easeOutCubic"
       threshold={0.2}
       rootMargin="-50px"
       onLetterAnimationComplete={handleAnimationComplete}
      />
          {/* A Passionate <span className="border-b-4 hero_text">Software Developer</span> */}
          </span>

          {/* Buttons */}
          <div className="flex justify-center gap-4 md:gap-20 mt-10">
            <button>
              <a
                className="px-9 py-3 hero_text border  rounded-full"
                href="/#contact"
              >
                <ShinyText  text="Contact" disabled={false} speed={3} className='custom-class text-lg hero_text' />
              </a>
            </button>

            <button onClick={handleDownload}>
              {/* <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class'/> */}
              <span className="px-9 py-3 hero_text border text-white rounded-full text-lg">
                <ShinyText text="Resume" disabled={false} speed={3} className='custom-class text-lg hero_text'/>
                {/* Resume */}
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