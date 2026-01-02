import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Work() {

  const projects = [
  {
    id: 1,
    title: "EDEN ROSE",
    category: "Photography Portfolio Website",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/d864b282-e067-42ee-aab8-c9141b58d5e5.webm",
    href: "https://photography-coral-mu.vercel.app/",

    summary: {
      goal:
        "Design a visually immersive photography portfolio that highlights emotions, storytelling, and premium aesthetics.",
      problem:
        "The client needed a modern portfolio that feels luxurious and cinematic without sacrificing performance or usability.",
      solution:
        "Built a motion-driven website with fullscreen visuals, subtle animations, and optimized media loading to maintain speed.",
      features: [
        "Cinematic fullscreen video sections",
        "Smooth Framer Motion animations",
        "Responsive gallery layout",
        "Optimized image & video loading",
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      role: "Frontend Developer & UI Designer",
      duration: "2 Weeks",
      outcome:
        "Delivered a premium portfolio experience that enhances brand identity and improves client engagement.",
    },
  },

  {
    id: 2,
    title: "Real Estatein",
    category: "Real Estate Business Website",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/a5a41d93-af5d-4f4a-bb96-f56d48bacc5f.mp4",
    href: "https://real-estate2-psi.vercel.app/",

    summary: {
      goal:
        "Create a clean and professional real estate platform to showcase property listings effectively.",
      problem:
        "Users needed an easy-to-navigate interface to browse properties without feeling overwhelmed by information.",
      solution:
        "Designed a card-based layout with clear typography, intuitive navigation, and a mobile-first approach.",
      features: [
        "Modern property listing cards",
        "Clean and minimal UI",
        "Mobile-first responsive design",
        "Fast page navigation",
      ],
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      role: "Frontend Developer",
      duration: "10 Days",
      outcome:
        "Improved property visibility and user experience, making browsing simple and efficient.",
    },
  },

  {
    id: 3,
    title: "Estatein",
    category: "Real Estate Landing Page",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/e1f18114-9a37-40e5-a711-afccacf20861.mp4",
    href: "https://real-estate-henna-nine.vercel.app/",

    summary: {
      goal:
        "Build a high-conversion landing page for a real estate brand with a strong visual appeal.",
      problem:
        "The challenge was to present trust, clarity, and modern design within a limited content structure.",
      solution:
        "Focused on bold sections, clear CTAs, and a structured layout that guides users naturally.",
      features: [
        "High-impact hero section",
        "Clear call-to-action layout",
        "Minimal yet modern UI",
        "Optimized for conversions",
      ],
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      role: "Frontend Developer",
      duration: "1 Week",
      outcome:
        "Created a conversion-focused landing page that strengthens brand credibility and user trust.",
    },
  },

  {
    id: 4,
    title: "ECOM-WEB",
    category: "E-Commerce Website",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/f68c3592-94c1-4601-a798-5181df00075e.mp4",
    href: "https://ecom-forever-2.vercel.app/",

    summary: {
      goal:
        "Develop a modern e-commerce frontend with a smooth shopping experience.",
      problem:
        "Users often drop off when interfaces are cluttered or slow, especially on mobile devices.",
      solution:
        "Built a clean and fast UI with product-focused layouts and smooth interactions.",
      features: [
        "Product-focused UI design",
        "Clean category & product sections",
        "Responsive shopping layout",
        "Fast and smooth interactions",
      ],
      techStack: ["React", "Tailwind CSS"],
      role: "Frontend Developer",
      duration: "2 Weeks",
      outcome:
        "Delivered a user-friendly shopping experience with improved engagement and clarity.",
    },
  },
];

  return (
    <section className="bg-[#07080b] py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-40">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* 🎥 VIDEO SIDE */}
            <div
              className={`relative rounded-3xl overflow-hidden border border-white/10 ${
                index % 2 !== 0 ? "md:col-start-2" : ""
              }`}
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur"
              >
                <ExternalLink className="text-white" />
              </a>
            </div>

            {/* 🧠 SUMMARY SIDE */}
            <div className="text-white space-y-6">
              <p className="text-sm uppercase tracking-widest text-[#C778DD]">
                {project.category}
              </p>

              <h3 className="text-3xl font-extrabold">
                {project.title}
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Goal:</span>{" "}
                  {project.summary.goal}
                </p>

                <p>
                  <span className="text-white font-semibold">Problem:</span>{" "}
                  {project.summary.problem}
                </p>

                <p>
                  <span className="text-white font-semibold">Solution:</span>{" "}
                  {project.summary.solution}
                </p>
              </div>

              {/* FEATURES */}
              <div>
                <p className="text-white font-semibold mb-2">
                  Key Features
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  {project.summary.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* META */}
              <div className="flex flex-wrap gap-3 pt-4">
                {project.summary.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 text-sm text-gray-400">
                Role: {project.summary.role} • Duration:{" "}
                {project.summary.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
