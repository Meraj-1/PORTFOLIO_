import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";
import {
  companyById,
  projectCategories,
  projectBySlug,
} from "../data/portfolioData";
import { formatEmploymentDate } from "../utils/experience";

const updateMetadata = (project) => {
  const previousTitle = document.title;
  const description =
    project.shortDescription ||
    project.fullDescription ||
    `${project.title} — project by Meraj Ansari.`;
  document.title = `${project.title} — Meraj Ansari`;

  const descriptionTag = document.querySelector('meta[name="description"]');
  const previousDescription = descriptionTag?.content;
  if (descriptionTag) descriptionTag.content = description;

  const openGraph = [
    ["og:title", document.title],
    ["og:description", description],
    ["og:type", "article"],
    ...((project.thumbnail ||
    project.gallery.find((media) => media.type === "image")?.src)
      ? [
          [
            "og:image",
            new URL(
              project.thumbnail ||
                project.gallery.find((media) => media.type === "image").src,
              window.location.origin,
            ).href,
          ],
        ]
      : []),
  ];
  const previousOpenGraph = openGraph.map(([property]) => {
    const element = document.querySelector(
      `meta[property="${property}"]`,
    );
    return [property, element, element?.content];
  });

  openGraph.forEach(([property, content]) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("property", property);
      document.head.appendChild(element);
    }
    element.content = content;
  });

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  const previousCanonical = canonicalLink?.href;
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = `${window.location.origin}/projects/${project.slug}`;

  return () => {
    document.title = previousTitle;
    if (descriptionTag && previousDescription !== undefined) {
      descriptionTag.content = previousDescription;
    }
    previousOpenGraph.forEach(([property, element, content]) => {
      if (element && content !== undefined) {
        element.content = content;
      } else {
        document.querySelector(`meta[property="${property}"]`)?.remove();
      }
    });
    if (previousCanonical) {
      canonicalLink.href = previousCanonical;
    } else {
      canonicalLink.remove();
    }
  };
};

const ProjectMedia = ({ media, title, eager = false }) => {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={undefined}
        controls
        muted
        playsInline
        preload="none"
        aria-label={media.alt || `${title} video`}
      />
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt || `${title} screenshot`}
      loading={eager ? "eager" : "lazy"}
    />
  );
};

const ProjectDetail = ({ slug }) => {
  const project = projectBySlug(slug);

  useEffect(() => {
    if (!project) {
      document.title = "Project not found — Meraj Ansari";
      return undefined;
    }
    return updateMetadata(project);
  }, [project]);

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="site-container">
          <span className="section-index">Project not found</span>
          <h1>This project isn’t in the portfolio.</h1>
          <a className="button-primary" href="/#projects">
            Back to projects <ArrowLeft size={16} aria-hidden="true" />
          </a>
        </div>
      </main>
    );
  }

  const company = project.companyId ? companyById(project.companyId) : null;
  const category =
    projectCategories.find((item) => item.id === project.category)?.label ||
    projectCategories.find((item) => item.id === "personal").label;
  const gallery = project.gallery.length
    ? project.gallery
    : project.thumbnail
      ? [
          {
            src: project.thumbnail,
            type: "image",
            alt: `${project.title} project screenshot`,
          },
        ]
      : [];
  const details = [
    ["Category", category],
    ["Company", company?.name],
    ["Status", project.status],
    [
      "Started",
      formatEmploymentDate(project.startDate) || project.startDate,
    ],
    [
      "Completed",
      formatEmploymentDate(project.completionDate) || project.completionDate,
    ],
    ["Role", project.role],
  ].filter(([, value]) => value);
  const links = [
    {
      label: "Live project",
      href: project.liveUrl,
      icon: ExternalLink,
    },
    { label: "Source code", href: project.githubUrl, icon: Github },
    {
      label: "Documentation",
      href: project.documentationUrl,
      icon: ExternalLink,
    },
  ].filter((link) => link.href);

  return (
    <main className="project-detail-page">
      <div className="site-container">
        <a className="project-back-link" href="/#projects">
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </a>

        <header className="project-detail-heading">
          <span className="section-index">{category}</span>
          <h1>{project.title}</h1>
          {project.tagline && <p className="project-detail-tagline">{project.tagline}</p>}
          {project.fullDescription && (
            <p className="project-detail-intro">{project.fullDescription}</p>
          )}
          {links.length > 0 && (
            <div className="project-detail-links">
              {links.map(({ label, href, icon: LinkIcon }) => (
                <a
                  className="button-secondary"
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                  <LinkIcon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </header>

        {gallery.length > 0 ? (
          <section className="project-gallery" aria-label="Project gallery">
            {gallery.map((media, index) => (
              <figure
                className={`project-gallery-item${index === 0 ? " is-featured" : ""}`}
                key={`${project.id}-${media.src}`}
              >
                <ProjectMedia
                  media={media}
                  title={project.title}
                  eager={index === 0}
                />
                {gallery.length > 1 && (
                  <figcaption>
                    {media.alt || `${project.title} screenshot ${index + 1}`}
                  </figcaption>
                )}
              </figure>
            ))}
          </section>
        ) : (
          <section
            className="project-case-study-cover"
            aria-label="Project summary"
          >
            <span>
              {company ? `${company.name} · ` : ""}
              {project.role || category}
            </span>
            <h2>{project.tagline || project.title}</h2>
            {(project.fullDescription || project.shortDescription) && (
              <p>{project.fullDescription || project.shortDescription}</p>
            )}
          </section>
        )}

        <div className="project-detail-layout">
          <section className="project-detail-overview">
            <span className="section-index">Project overview</span>
            <h2>{project.shortDescription || "Description not provided."}</h2>
            <dl className="project-detail-facts">
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {project.technologies.length > 0 && (
              <div className="project-detail-block">
                <h3>Technology</h3>
                <ul className="project-stack">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <div className="project-detail-story">
            {[
              ["Problem", project.problem],
              ["Solution", project.solution],
              ["My contribution", project.myContribution],
              ["Challenges", project.challenges],
              ["Technical approach", project.architecture],
              ["Outcome", project.outcome],
            ]
              .filter(([, content]) => content)
              .map(([label, content]) => (
                <section className="project-detail-block" key={label}>
                  <h3>{label}</h3>
                  <p>{content}</p>
                </section>
              ))}
            {project.features.length > 0 && (
              <section className="project-detail-block">
                <h3>Key features</h3>
                <ul className="project-detail-feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        <footer className="project-detail-footer">
          <a href="/#projects">
            <ArrowLeft size={16} aria-hidden="true" />
            Return to all projects
          </a>
          <a href="/#contact">
            Discuss a project <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          {company && (
            <a href="/#experience">
              View {company.name} experience{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </footer>
      </div>
    </main>
  );
};

export default ProjectDetail;
