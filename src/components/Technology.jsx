import React from "react";
import { Icon } from "../assests/assets.js";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <div className="relative gap-20 h-screen  md:mb-40 mb-20 flex flex-col lg:flex-row  items-center justify-center ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Icon.tech} type="video/mp4" />{" "}
        {/* ✅ Using imported video */}
      </video>
      <div className="flex justify-center relative mb-2 items-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-[260px] cursor-pointer md:h-[400px]"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/male-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-programmer-web-development-pack-design-icons-6547028.png?f=webp"
          alt=""
        />
      </div>
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-6  sm:gap-10   justify-center items-center "
      >
        {[
          { name: "HTML", image: Icon.HTML },
          { name: "CSS", image: Icon.Css },
          { name: "JavaScript", image: Icon.javascript },
          { name: "React", image: Icon.react, animate: true },
          // { name: 'Java', image: Icon.Java },
          { name: "Mongo DB", image: Icon.Mongo },
          {
            name: "GitHub",
            image:
              "https://e7.pngegg.com/pngimages/1009/39/png-clipart-github-computer-icons-repository-github-white-cat-like-mammal.png",
          },
          { name: "Bootstrap", image: Icon.Bootstrap },
          { name: "TailwindCSS", image: Icon.tailwind },
        ].map((skill, index) => (
          <li key={index} className="flex flex-col items-center gap-2 group">
            <div
              className={`relative w-16 h-16 cursor-pointer bg-gradient-to-br border-2 
                       rounded-full p-3 transition-transform duration-300 
              }`}
            >
              <img
                src={skill.image}
                alt={skill.name}
              />
            </div>
            <h2 className="text-md text-white relative font-md">{skill.name}</h2>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Technology;
