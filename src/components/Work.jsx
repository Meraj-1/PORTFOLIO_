
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "EDEN ROSE",
    // subtitle: "",
    category: "website development",
    tags: ["ReactJS", "TailwindCSS", "Framer Motion"],
    video: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/d864b282-e067-42ee-aab8-c9141b58d5e5.webm",
    image: "/LOGOS/EDEN.png",
    href:"https://photography-coral-mu.vercel.app/",
    layout: "md:col-span-6 lg:col-span-8 row-span-2",
  },
  {
    id: 2,
    title: "Real Estatein",
    // subtitle: "Application Launch Video",
    category: "website development",
    tags: ["frontend", "tailwind", "react"],
    image: "/LOGOS/estate.png",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/a5a41d93-af5d-4f4a-bb96-f56d48bacc5f.mp4",
    href:"https://real-estate2-psi.vercel.app/",
      layout: "md:col-span-3 lg:col-span-4 row-span-4",
  },
  {
    id: 3,
    title: "Estatein",
    // subtitle: "",
    category: "website development",
    tags: ["react", "tailwind", "js"],
    video: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/e1f18114-9a37-40e5-a711-afccacf20861.mp4",
    image: "/clientlogos/nykaalogo.png",
    href:"https://real-estate-henna-nine.vercel.app/",
    layout: "md:col-span-3 lg:col-span-3 row-span-2",
  },
  {
    id: 4,
    title: "ECOM-WEB",
    // subtitle: "",
    category: "Website Development",
    tags: ["react", "taiwind", "Website Development"],
    video: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/f68c3592-94c1-4601-a798-5181df00075e.mp4",
    image: "/clientlogos/cookease.png",
    href:"https://ecom-forever-2.vercel.app/",
    layout: "md:col-span-3 lg:col-span-5 row-span-2",
  }
]

export default function Work() {
  const mobileCarouselRef = useRef(null);

  useEffect(() => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    if (!window.matchMedia("(max-width: 767px)").matches) return;

    let isPointerDown = false;
    const onDown = () => (isPointerDown = true);
    const onUp = () => (isPointerDown = false);

    container.addEventListener("touchstart", onDown, { passive: true });
    container.addEventListener("touchend", onUp, { passive: true });
    container.addEventListener("mousedown", onDown);
    container.addEventListener("mouseup", onUp);
    container.addEventListener("mouseleave", onUp);

    const getStep = () => {
      const firstCard = container.querySelector(".portfolio-card");
      if (!firstCard) return 280;
      const gap = parseFloat(window.getComputedStyle(container).gap || "0");
      return firstCard.clientWidth + gap;
    };

    const interval = setInterval(() => {
      if (isPointerDown) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      let next = container.scrollLeft + getStep();

      if (next >= maxScroll - 1) next = 0;

      container.scrollTo({ left: next, behavior: "smooth" });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative xl:py-20 2xl:py-32 md:px-[2em] lg:px-[4em] 2xl:px-[22em] bg-[#121316]">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">
            Our Work
          </p> */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-white font-bold mb-6">
            Our works speaks its<span className="text-4xl md:text-5xl lg:text-5xl text-[#C778DD] font-bold mb-6">elf</span>
          </h2>

          <div className="flex justify-center gap-4 mt-8">
            <button className="text-white hover:text-[#C778DD] px-4 py-2 text-sm transition">
              Creative Project<span className="text-[#C778DD] hover:text-white text-sm transition">'s</span>
            </button>

            {/* <a
              href="/work"
              className="text-white bg-gray-900 border rounded-xl px-4 py-2 text-sm hover:bg-gray-800 transition"
            >
              Explore Portfolio
            </a> */}
          </div>
        </motion.div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden">
          <div
            ref={mobileCarouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group snap-center shrink-0 w-80 portfolio-card"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/5">
                  <div className="relative h-[458px] overflow-hidden">
           <a href={project.href} target="_blank" rel="noopener noreferrer" key={project.id}>
              
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />

                    {/* <img
                      src={project.image}
                      alt={project.title}
                      className="absolute top-4 left-4 w-14 h-10 object-contain"
                    /> */}

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>
                 </a>
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#C778DD] text-xs uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    {/* <p className="text-gray-300 text-sm mb-4">
                      {project.subtitle}/
                    </p> */}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-6 lg:grid-cols-12 auto-rows-[290px] md:auto-rows-[149px] gap-4">
          {projects.map((project, index) => (
           <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative cursor-pointer ${project.layout}`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/5 h-full transition-all duration-300">
           <a href={project.href} target="_blank" rel="noopener noreferrer" key={project.id}>
               
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
{/* 
                <img
                  // src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-2 w-auto h-28 object-contain"
                /> */}

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-all">
                  <p className="text-[#C778DD] text-md font-bold uppercase tracking-wider">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                  <p className="text-gray-300 text-sm mb-4">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
            </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
