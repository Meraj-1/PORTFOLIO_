import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Icon } from "../assests/assets.js";

const projects = [
  {
    id: 1,
    title: "EDEN ROSE",
    category: "Photography portfolio",
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
    category: "Real estate business website",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/a5a41d93-af5d-4f4a-bb96-f56d48bacc5f.mp4",
    href: "https://real-estate2-psi.vercel.app/",
    poster: Icon.estate2,
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
    category: "Real estate landing page",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/e1f18114-9a37-40e5-a711-afccacf20861.mp4",
    href: "https://real-estate-henna-nine.vercel.app/",
    poster: Icon.estate1,
    github: "https://github.com/Meraj-1/Real-Estate",
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
    category: "E-commerce website",
    video:
      "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/f68c3592-94c1-4601-a798-5181df00075e.mp4",
    href: "https://ecom-forever-2.vercel.app/",
    poster: Icon.ecom1,
    github: "https://github.com/Meraj-1/Ecom_Backend",
    summary: {
      goal: "Develop a modern e-commerce frontend with a smooth shopping experience.",
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

const ProjectCard = ({ project, index }) => (
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.45, delay: index * 0.04 }}
  >
    <div className="project-media">
      <video
        src={project.video}
        poster={project.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <a
        className="project-open"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title} project`}
      >
        <ArrowUpRight size={19} aria-hidden="true" />
      </a>
    </div>

    <div className="project-content">
      <span className="project-meta">
        {String(index + 1).padStart(2, "0")} / 04 · {project.category}
      </span>
      <h3>{project.title}</h3>

      <div className="project-description">
        <p>
          <strong>Goal</strong> {project.summary.goal}
        </p>
        <p>
          <strong>Challenge</strong> {project.summary.problem}
        </p>
        <p>
          <strong>Approach</strong> {project.summary.solution}
        </p>
      </div>

      <div className="project-details">
        <div>
          <span className="project-detail-label">Key features</span>
          <ul className="project-features">
            {project.summary.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="project-detail-label">Built with</span>
          <ul className="project-stack">
            {project.summary.techStack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="project-outcome">
        <strong>Outcome</strong> {project.summary.outcome}
      </p>
      <p className="project-outcome">
        {project.summary.role} · {project.summary.duration}
      </p>
      <div className="project-links">
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          Visit project <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={15} aria-hidden="true" />
            Source code <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const Work = () => (
  <section className="section" id="projects">
    <div className="site-container">
      <div className="section-heading">
        <div>
          <span className="section-index">04 — Selected work</span>
          <h2>Built to make<br />an impact.</h2>
        </div>
        <p>
          A selection of recent work, from thoughtful brand experiences to
          practical products built for the real world.
        </p>
      </div>

      <div className="work-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="repository-heading" id="github">
        <div>
          <span className="section-index">GitHub / Source</span>
          <h3>Project repositories.</h3>
          <p>Explore the code behind selected projects.</p>
        </div>
        <a
          className="button-secondary"
          href="https://github.com/Meraj-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} aria-hidden="true" />
          GitHub profile
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="repository-grid">
        <a
          className="repository-card"
          href="https://github.com/Meraj-1/Ecom_Backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project-meta">E-commerce · MERN</span>
          <span className="repository-title">Shopping platform</span>
          <span className="repository-link">View repository <ArrowUpRight size={15} /></span>
        </a>
        <a
          className="repository-card"
          href="https://github.com/Meraj-1/Real-Estate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project-meta">Real estate · React / Next.js</span>
          <span className="repository-title">Real Estate</span>
          <span className="repository-link">View repository <ArrowUpRight size={15} /></span>
        </a>
        <a
          className="repository-card"
          href="https://github.com/Meraj-1/Zerodha.2.0/tree/main/frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project-meta">Trading UI · React</span>
          <span className="repository-title">Zerodha Clone</span>
          <span className="repository-link">View repository <ArrowUpRight size={15} /></span>
        </a>
      </div>
    </div>
  </section>
);

export default Work;
