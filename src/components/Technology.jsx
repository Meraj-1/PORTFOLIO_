import React from "react";
import { Icon } from "../assests/assets.js";

const groups = [
  {
    name: "Frontend",
    technologies: [
      { name: "React", icon: Icon.react },
      { name: "Next.js", mark: "N" },
      { name: "TypeScript", mark: "TS" },
      { name: "JavaScript", icon: Icon.javascript },
      { name: "HTML", icon: Icon.HTML },
      { name: "CSS", icon: Icon.Css },
      { name: "Tailwind CSS", icon: Icon.tailwind },
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: Icon.node },
      { name: "Express", icon: Icon.express },
      { name: "REST APIs", mark: "API" },
    ],
  },
  {
    name: "Database",
    technologies: [{ name: "MongoDB", icon: Icon.Mongo }],
  },
  {
    name: "Tools",
    technologies: [{ name: "Git & GitHub", icon: Icon.github }],
  },
];

const Technology = () => (
  <section className="section" id="technology">
    <div className="site-container">
      <div className="section-heading">
        <div>
          <span className="section-index">05 — The toolkit</span>
          <h2>
            Tools for the
            <br />
            whole journey.
          </h2>
        </div>
        <p>
          From the first responsive component to the data layer behind it, these
          are the technologies I use to build end-to-end products.
        </p>
      </div>

      <div className="tech-groups">
        {groups.map((group) => (
          <div className="tech-group" key={group.name}>
            <h3>{group.name}</h3>
            <div className="tech-grid">
              {group.technologies.map((technology) => (
                <div className="tech-item" key={technology.name}>
                  {technology.icon ? (
                    <img src={technology.icon} alt="" loading="lazy" />
                  ) : (
                    <span className="tech-mark" aria-hidden="true">
                      {technology.mark}
                    </span>
                  )}
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="tech-note">
        A practical stack for accessible interfaces, reliable APIs, and
        maintainable products.
      </p>
    </div>
  </section>
);

export default Technology;
