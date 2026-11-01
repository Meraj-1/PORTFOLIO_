import React from "react";
import { Icon } from "../assests/assets.js";

const groups = [
  {
    name: "Frontend",
    technologies: [
      { name: "React.js", icon: Icon.react },
      { name: "Next.js", mark: "N" },
      { name: "Tailwind CSS", icon: Icon.tailwind },
    ],
  },
  {
    name: "Languages & web",
    technologies: [
      { name: "JavaScript (ES6+)", icon: Icon.javascript },
      { name: "TypeScript", mark: "TS" },
      { name: "HTML5", icon: Icon.HTML },
      { name: "CSS3", icon: Icon.Css },
    ],
  },
  {
    name: "Backend & APIs",
    technologies: [
      { name: "Node.js", icon: Icon.node },
      { name: "Express.js", icon: Icon.express },
      { name: "REST APIs", mark: "API" },
    ],
  },
  {
    name: "Database",
    technologies: [{ name: "MongoDB", icon: Icon.Mongo }],
  },
  {
    name: "Tools",
    technologies: [
      { name: "Git", mark: "Git" },
      { name: "GitHub", icon: Icon.github },
      { name: "Postman", mark: "PM" },
      { name: "VS Code", mark: "VS" },
    ],
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
          From responsive interfaces to backend APIs and database operations,
          these are the tools I use to build and maintain web applications.
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
