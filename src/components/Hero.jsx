import React from "react";
import { Icon } from "../assests/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AnimateText from "../animate_compo/AnimateText";
import ShinyText from "../animate_compo/ShineText";
import TrueFocus from "../animate_compo/TrueFocus";
import Orb from "../animate_compo/Orb";
import Header from "./Header";

// const Hero = () => {

//   return (
//     <div className="flex relative lg:px-10 lg:mg-20  h-[100vh] md:h-[120vh] lg:h-screen xl:h-[90vh] bg-cover bg-center bg-no-repeat">
//       <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-evenly">
//         {/* Profile Image with Orb Background */}

//         {/* Hero Text */}
//         <div className="flex flex-col">
//           <span className="text-xl sm:flex  md:text-4xl lg:text-[32px] font-semibold">
//             <AnimateText
//               text="Hi, I'm"
//               className="text-4xl md:text-4xl normal_text lg:text-3xl font-semibold text-center"
//               delay={150}
//               animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
//               animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
//               easing="easeOutCubic"
//               threshold={0.2}
//               rootMargin="-50px"
//               onLetterAnimationComplete={handleAnimationComplete}
//             />
//             <div className="tech_head mt-5 sm:mt-0 mb-5 sm:mb-0">

//             </div>
//           </span>

//           <span className="text-white px-8 md:text-4xl mt-3 lg:text-5xl font-semibold">
//             <AnimateText
//               text="A Passionate "
//               className="text-3xl md:text-4xl normal_text lg:text-4xl font-semibold text-center"
//               delay={150}
//               animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
//               animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
//               easing="easeOutCubic"
//               threshold={0.2}
//               rootMargin="-50px"
//               onLetterAnimationComplete={handleAnimationComplete}
//             />
//           </span>
//           <span className="text-white px-8  md:text-4xl mt-3 lg:text-5xl font-semibold">
//             <AnimateText
//               text="Full Stack Developer"
//               className="text-3xl hero_ md:text-4xl normal_text lg:text-8xl font-bold text-center"
//               delay={150}
//               animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
//               animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
//               easing="easeOutCubic"
//               threshold={0.2}
//               rootMargin="-50px"
//               onLetterAnimationComplete={handleAnimationComplete}
//             />
//           </span>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4 md:gap-20 mt-10">
//             <button>
//               <a
//                 className="px-9 py-3 hero_text border rounded-full"
//                 href="/#contact"
//               >
//               Contact
//               </a>
//             </button>

//             <button onClick={handleDownload}>
//               <span className="px-9 py-3 hero_text border text-white rounded-full text-lg">
//                Resume
//                 <FontAwesomeIcon icon={faDownload} className="ml-2" />
//               </span>
//             </button>
//           </div>
//         </div>
//                <div className="">
//           {/* Orb as background */}
//           {/* Profile Image on top */}
//           <img
//             className=" md:h-[386px] h-[300px]  cursor-pointer"
//             src={Icon.main_hero}
//             alt="Profile"
//           />
//           <div className="flex items-center border   justify-center">
//           <span className="text-white">Currently working on
//           <span className="text-pink-400"> #Portfolio
//           </span>
//           </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// A Passionate Software Developer

const Hero = () => {
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/Resume.pdf"; // Ensure your resume is in the 'public' folder
  //   link.download = "Meraj_Ansari_Resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);

  // };

  return (
    <div className="flex justify-center flex-col md:flex-row h-auto   lg:pt-20">
      <div className="md:m-20 m-2">
        <span className="font-bold md:text-[32px] text-[20px] text-white">
          HI I'm MERAJ <span className="text-pink-400 font-extrabold"> Software Developer </span> &<br />{" "}
          <span className="text-pink-400 font-extrabold">Web Developer</span>
        </span>
        <div></div>
        <br />
        <span className="text-white text-sm">
          I turn complex problems into elegant, efficient code with a focus on{" "}
          <br />
          performance and user experience.
        </span>
        {/* <span></span> */}
        <button className="text-pink-400 mt-10 flex px-6 py-1 border">
          Contact
        </button>
      </div>
      <div className="m-2">
        <img
          className=" md:h-[386px] h-[300px]  cursor-pointer"
          src={Icon.main_hero}
          alt="Profile"
        />
        <div className="flex items-center border   justify-center">
          <span className="text-white">
            Currently working on
            <span className="text-pink-400"> #Portfolio</span>
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
