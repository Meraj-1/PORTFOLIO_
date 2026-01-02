import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EDEN ROSE",
    category: "Website Development",
    tags: ["React", "Tailwind", "Motion"],
    video: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/d864b282-e067-42ee-aab8-c9141b58d5e5.webm",
    href: "https://photography-coral-mu.vercel.app/",
    offset: "lg:ml-[8%]",
  },
  {
    id: 2,
    title: "Real Estatein",
    category: "Web Platform",
    tags: ["Frontend", "UI/UX"],
    video: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/a5a41d93-af5d-4f4a-bb96-f56d48bacc5f.mp4",
    href: "https://real-estate2-psi.vercel.app/",
    offset: "lg:ml-[38%]",
  },
  {
    id: 3,
    title: "Estatein",
    category: "Landing Experience",
    tags: ["React", "JS"],
    video: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/e1f18114-9a37-40e5-a711-afccacf20861.mp4",
    href: "https://real-estate-henna-nine.vercel.app/",
    offset: "lg:ml-[15%]",
  },
  {
    id: 4,
    title: "ECOM-WEB",
    category: "E-Commerce",
    tags: ["UI", "Performance"],
    video: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/f68c3592-94c1-4601-a798-5181df00075e.mp4",
    href: "https://ecom-forever-2.vercel.app/",
    offset: "lg:ml-[45%]",
  },
];

export default function Work() {
  return (
    <section className="relative min-h-screen bg-[#07080b] py-40 overflow-hidden">
      {/* 🌫️ Atmospheric Fog */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#C778DD]/15 blur-[200px]" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* 🧠 TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-32 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Project <span className="text-[#C778DD]">Archive</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-gray-400">
          A frozen timeline of digital experiments — hover to re-activate.
        </p>
      </motion.div>

      {/* 🧊 HOLOGRAM STACK */}
      <div className="relative space-y-32 max-w-7xl mx-auto px-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 }}
            whileHover="active"
            className={`group block relative w-full max-w-[520px] ${project.offset}`}
          >
            {/* Glass Capsule */}
            <motion.div
              variants={{
                active: { rotateX: 0, rotateY: 0 },
              }}
              className="relative rounded-[32px] overflow-hidden
              border border-white/15
              bg-white/5 backdrop-blur-2xl
              shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Video Hologram */}
              <motion.video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[420px] object-cover
                grayscale group-hover:grayscale-0
                transition-all duration-700"
              />

              {/* Scan Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-40
                bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]
                bg-[size:100%_4px]" />

              {/* Hologram Tint */}
              <div className="absolute inset-0 bg-gradient-to-t
                from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-widest text-[#C778DD] mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full
                      bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activate Icon */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                  <ExternalLink size={18} className="text-white" />
                </div>
              </div>

              {/* Energy Edge */}
              <div className="absolute inset-0 rounded-[32px]
                group-hover:shadow-[0_0_80px_#C778DD55]
                transition-all duration-700" />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
