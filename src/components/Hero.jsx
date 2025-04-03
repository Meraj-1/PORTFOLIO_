import React from "react";
import { Icon } from "../assests/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Ensure your resume is in the 'public' folder
    link.download = "Meraj_Ansari_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      <div className="flex flex-col lg:flex-row xl:flex-row md:mt-[260px] lg:mt-[180px] mt-[180px] items-center gap-6 md:gap-12 relative z-10">
        {/* Profile Image */}
        <img
          className="h-[260px] cursor-pointer md:h-[400px] rounded-lg object-cover"
          src={Icon.person}
        />

        {/* Hero Text */}
        <div className="flex flex-col text-center">
          <span className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
            Hi, I'm <span className="hero_text">MERAJ ANSARI</span>
          </span>
          <span className="text-white text-2xl px-8 md:text-4xl lg:text-5xl font-semibold">
            A Passionate <span className="border-b-4 hero_text">Software Developer</span>
          </span>

          {/* Buttons */}
          <div className="flex justify-center gap-4 md:gap-20 mt-10">
            <button>
              <a
                className="px-9 py-3 hero_text border text-white rounded-full text-lg hover:text-black hover:bg-green-400 duration-300"
                href="/#contact"
              >
                Contact
              </a>
            </button>

            <button onClick={handleDownload}>
              <span className="px-9 py-3 hero_text border text-white rounded-full text-lg hover:text-black hover:bg-green-400 duration-300">
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