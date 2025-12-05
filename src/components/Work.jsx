"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Gulf Oil India",
    subtitle: "Application launch Campaign",
    category: "Production & Marketing",
    tags: ["digital marketing", "motion graphics", "editing", "design"],
    video: "https://files.catbox.moe/dadgkz.mp4",
    image:
      "https://assets.gulfoilltd.com/gulfindia/2025-10/Desktop.webp?VersionId=2jwvVR9qarAujQ1qkLYO9dy7tsLd8jFA/jm6o9a.mp4",
    layout: "md:col-span-6 lg:col-span-8 row-span-2",
  },
  {
    id: 2,
    title: "Bank of Maharashtra",
    subtitle: "Application Launch Video",
    category: "Video Production",
    tags: ["AI", "Motion Graphics", "Video Editing"],
    image: "bg-gradient-to-br from-teal-500 to-cyan-600",
    video: "https://files.catbox.moe/8gknar.mp4",
    layout: "md:col-span-3 lg:col-span-4 row-span-4",
  },
  {
    id: 3,
    title: "NYKAA",
    subtitle: "Motion Graphics & Editing",
    category: "Video Editing",
    tags: ["Video Production", "motion graphics", "color grading"],
    video: "https://files.catbox.moe/d5jsu1.mp4",
    image:
      "https://images-static.nykaa.com/uploads/7239861d-5abc-4064-ba55-af4901f1850c.gif",
    layout: "md:col-span-3 lg:col-span-3 row-span-2",
  },
  {
    id: 4,
    title: "CookEase Uk",
    subtitle: "Brand Creation",
    category: "Brand",
    tags: ["branding", "design", "Website Development", "Digital Marketing"],
    video: "https://files.catbox.moe/h7or0e.mp4",
    image:
      "https://www.cookeaseuk.com/_next/image?url=%2Fproducts%2F3d%2Fpunjabicurry%2Fframe_(1).png&w=1920&q=75",
    layout: "md:col-span-3 lg:col-span-5 row-span-2",
  },
  {
    id: 5,
    title: "Seven Hours",
    subtitle: "Brand Creation",
    category: "Brand",
    tags: [
      "Branding",
      "website development",
      "Digital marketing",
      "SEO",
      "Events Management",
    ],
    image: "bg-gradient-to-br from-red-600 to-red-800",
    video: "https://www.sevenhrs.com/video/sh5.mp4",
    layout: "md:col-span-6 lg:col-span-6 row-span-4",
  },
  {
    id: 6,
    title: "Luma AI",
    subtitle: "Monthly Video",
    category: "Video Production",
    tags: ["Ray 2", "Ray 2 Flash", "Photon"],
    image: "bg-gradient-to-br from-indigo-500 to-blue-600",
    video:
      "https://static.cdn-luma.com/files/a5b1508249f216fd/Dream-Machine.mp4",
    layout: "md:col-span-3 lg:col-span-6 row-span-2",
  },
  {
    id: 7,
    title: "Stability.ai",
    subtitle: "Stable Diffusion 3.5",
    category: "AI Generation",
    tags: ["SD3.5 Large", "SD3.5 Large Turbo"],
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    video: "https://files.catbox.moe/toocyj.mp4",
    layout: "md:col-span-3 lg:col-span-3 row-span-2",
  },
  {
    id: 8,
    title: "Kling AI",
    subtitle: "Alicloud Video",
    category: "Cloud Solutions",
    tags: ["Alicloud Video", "Minimax Video"],
    image: "bg-gradient-to-br from-gray-700 to-gray-900",
    video:
      "https://p4-kling.klingai.com/kcdn/cdn-kcdn112452/kling-website/web-page2-6-new.mp4",
    layout: "md:col-span-3 lg:col-span-3 row-span-2",
  },
];

export default function Work() {
  const mobileCarouselRef = useRef(null);

  useEffect(() => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    let isPointerDown = false;
    const onDown = () => (isPointerDown = true);
    const onUp = () => (isPointerDown = false);

    container.addEventListener("touchstart", onDown, { passive: true });
    container.addEventListener("touchend", onUp, { passive: true });
    container.addEventListener("mousedown", onDown);
    container.addEventListener("mouseup", onUp);
    container.addEventListener("mouseleave", onUp);

    const stepWidth = () => {
      const firstCard = container.querySelector(".portfolio-card");
      if (!firstCard) return 0;
      const styles = window.getComputedStyle(container);
      const gap =
        parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return firstCard.clientWidth + gap;
    };

    const interval = setInterval(() => {
      if (isPointerDown) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const step = stepWidth();
      let next = container.scrollLeft + (step || 280);
      if (next >= maxScroll - 1) next = 0;
      container.scrollTo({ left: next, behavior: "smooth" });
    }, 3500);

    return () => {
      clearInterval(interval);
      container.removeEventListener("touchstart", onDown);
      container.removeEventListener("touchend", onUp);
      container.removeEventListener("mousedown", onDown);
      container.removeEventListener("mouseup", onUp);
      container.removeEventListener("mouseleave", onUp);
    };
  }, []);

  return (
    <section id="work" className="relative py-32 px-6 lg:px-12 bg-[#121316]">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our works speaks itself.
          </h2>
          <div className="flex justify-center gap-4 mt-8">
            <button className="text-white hover:text-orange-500 px-4 py-2 text-sm transition-colors">
              creative projects
            </button>
            <button className="text-gray-400 hover:text-white px-4 py-2 text-sm transition-colors">
              Explore Portfolio
            </button>
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
                <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <p className="text-orange-500 text-xs uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-6 lg:grid-cols-12 auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[180px] gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative cursor-pointer ${project.layout}`}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden h-full">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />


                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-orange-500 text-xs uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
