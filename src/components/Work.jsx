import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import {
  companyById,
  projectCategories,
  projects,
} from "../data/portfolioData";
import { formatEmploymentDate } from "../utils/experience";

const getProjectPeriod = (project) => {
  const start = formatEmploymentDate(project.startDate);
  if (!start) return null;
  const end =
    project.status === "Ongoing"
      ? "Present"
      : formatEmploymentDate(project.completionDate);
  return end ? `${start} – ${end}` : start;
};

const ProjectMedia = ({ project }) => {
  const firstMedia = project.gallery[0];

  if (firstMedia?.type === "video") {
    return (
      <div className="project-media-placeholder">
        <span className="project-placeholder-label">Project preview</span>
        <div className="project-placeholder-copy">
          <span className="project-placeholder-mark" aria-hidden="true">
            ▶
          </span>
          <div>
            <span>{project.title}</span>
            <span>Video preview available on project page</span>
          </div>
        </div>
      </div>
    );
  }

  const image = project.thumbnail || firstMedia?.src;
  if (!image) {
    return (
      <div className="project-media-placeholder">
        <span className="project-placeholder-label">
          {companyById(project.companyId)?.name || "Selected work"}
        </span>
        <div className="project-placeholder-copy">
          <span className="project-placeholder-mark" aria-hidden="true">
            {project.title
              .split(/[\s—-]+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </span>
          <div>
            <span>{project.title}</span>
            <span>
              {project.tagline || project.shortDescription || "Project case study"}
            </span>
          </div>
        </div>
        <span className="project-placeholder-note">
          Project visuals are not available
        </span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={firstMedia?.alt || `${project.title} project preview`}
      loading="lazy"
    />
  );
};

const ProjectCard = ({ project, index }) => {
  const company = companyById(project.companyId);
  const projectPeriod = getProjectPeriod(project);
  const categoryLabel = projectCategories.find(
    (item) => item.id === project.category,
  )?.label;
  const layout =
    project.category === "company"
      ? `project-card--company ${
          index === 0
            ? "project-card--company-feature"
            : "project-card--company-secondary"
        }`
      : index === 0 || index === 3
        ? "project-card--bento-feature"
        : index === 1 || index === 2
          ? "project-card--bento-secondary"
          : "project-card--bento-compact";

  return (
    <motion.article
      className={`project-card ${layout}${project.isFeatured ? " is-featured" : ""}`}
      data-project-id={project.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: Math.min(index, 4) * 0.04 }}
    >
      <a
        className="project-card-link"
        href={`/projects/${project.slug}`}
        aria-label={`View details for ${project.title}`}
      >
        <div className="project-media">
          <ProjectMedia project={project} />
          <span className="project-open" aria-hidden="true">
            <ArrowUpRight size={19} />
          </span>
        </div>
        <div className="project-content">
          <div className="project-card-kicker">
            <span className="project-meta">{categoryLabel}</span>
            {project.isFeatured && (
              <span className="project-featured-label">Selected</span>
            )}
          </div>
          <h3>{project.title}</h3>
          {(project.role || company?.name) && (
            <p className="project-card-context">
              {[project.role, company?.name].filter(Boolean).join(" · ")}
            </p>
          )}
          <p className="project-card-description">
            {project.shortDescription || "Description not provided."}
          </p>
          {project.features.length > 0 && (
            <ul
              className="project-card-highlights"
              aria-label="Project highlights"
            >
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          {projectPeriod && (
            <span className="project-card-period">
              {projectPeriod}
              {project.status === "Ongoing" && <span> · Ongoing</span>}
            </span>
          )}
          <ul className="project-stack" aria-label="Technologies">
            {project.technologies.slice(0, 4).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <span className="project-view-link">
            View project <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </div>
      </a>
      {project.githubUrl && (
        <a
          className="project-source-link"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <Github size={15} aria-hidden="true" />
          Source code
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </motion.article>
  );
};

const CategorySection = ({ category, items }) => (
  <section
    className="project-category-section"
    data-category={category.id}
    aria-labelledby={`category-${category.id}`}
  >
    <div className="project-category-heading">
      <h3 id={`category-${category.id}`}>{category.label}</h3>
      <span>{String(items.length).padStart(2, "0")}</span>
    </div>
    {items.length > 0 ? (
      <div className={`work-list${items.length === 1 ? " is-single" : ""}`}>
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    ) : (
      <p className="project-category-empty">
        No project entries have been assigned to this category yet.
      </p>
    )}
  </section>
);

const Work = () => {
  const sortedProjects = [...projects].sort(
    (first, second) => first.displayOrder - second.displayOrder,
  );
  const featuredProjects = sortedProjects.filter((project) => project.isFeatured);
  const activeCategoryCount = new Set(
    sortedProjects.map((project) => project.category),
  ).size;

  return (
    <section className="section" id="projects">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <span className="section-index">04 — Project portfolio</span>
            <h2>
              Selected work.
              <br />
              Made with intent.
            </h2>
          </div>
          <p>
            Browse official company work separately from personal and
            independent projects. Client work remains identified in its
            project details.
          </p>
        </div>

        <div
          className="project-portfolio-summary"
          aria-label="Project portfolio summary"
        >
          {[
            ["Projects", sortedProjects.length],
            ["Selected", featuredProjects.length],
            ["Categories", activeCategoryCount],
          ].map(([label, count]) => (
            <div className="project-summary-item" key={label}>
              <span>{String(count).padStart(2, "0")}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="project-categories">
          {projectCategories
            .filter((category) =>
              sortedProjects.some((project) => project.category === category.id),
            )
            .map((category) => (
              <CategorySection
                category={category}
                key={category.id}
                items={sortedProjects.filter(
                  (project) => project.category === category.id,
                )}
              />
            ))}
        </div>

        <div className="repository-heading" id="github">
          <div>
            <span className="section-index">GitHub / Source</span>
            <h3>Browse the code.</h3>
            <p>
              Public repositories are linked to their projects; a repository
              alone does not imply an open-source contribution.
            </p>
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
      </div>
    </section>
  );
};

export default Work;
