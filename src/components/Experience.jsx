import React from "react";
import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { companyById, experiences, projects } from "../data/portfolioData";
import {
  formatEmploymentDate,
  getEmploymentDuration,
  isValidExperience,
} from "../utils/experience";

const displayDetail = (value, label) => value || `${label} not provided`;

const Experience = () => (
  <section className="section experience-section" id="experience">
    <div className="site-container">
      <div className="section-heading">
        <div>
          <span className="section-index">03 — Professional experience</span>
          <h2>
            Work, with
            <br />
            purpose.
          </h2>
        </div>
        <p>
          A clear record of professional roles. Company experience is listed
          separately from independent and client project work.
        </p>
      </div>

      {experiences.length ? (
        <div className="experience-timeline">
          {experiences.map((experience) => {
            const company = companyById(experience.companyId);
            if (!company) return null;

            const duration = getEmploymentDuration(experience);
            const validDates = isValidExperience(experience);
            const startDate = formatEmploymentDate(experience.startDate);
            const endDate =
              experience.isCurrent === true
                ? "Present"
                : formatEmploymentDate(experience.endDate) ||
                  "End date not provided";
            const employmentPeriod = `${
              startDate || "Start date not provided"
            } – ${endDate}`;
            const relatedProjects = projects.filter((project) =>
              experience.relatedProjectIds.includes(project.id) ||
              project.companyId === experience.companyId,
            );
            return (
              <article className="experience-card" key={experience.id}>
                <span className="experience-marker" aria-hidden="true" />
                <div className="experience-card-main">
                  <div className="experience-company">
                    <span className="company-monogram" aria-hidden="true">
                      {company.logo ? (
                        <img src={company.logo} alt="" />
                      ) : (
                        company.name.slice(0, 1)
                      )}
                    </span>
                    <div className="experience-company-name">
                      <h3>{company.name}</h3>
                      <span>
                        {experience.role || "Position details to be confirmed"}
                      </span>
                    </div>
                    {company.website && (
                      <a
                        className="experience-company-link"
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${company.name} website`}
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>

                  <div className="experience-meta">
                    <span>
                      <BriefcaseBusiness size={15} aria-hidden="true" />
                      {employmentPeriod}
                      {duration && ` · ${duration}`}
                      {!validDates && experience.startDate && " · Check dates"}
                    </span>
                    <span>
                      <MapPin size={15} aria-hidden="true" />
                      {displayDetail(experience.location || company.location, "Location")}
                    </span>
                    <span>
                      {displayDetail(experience.employmentType, "Employment type")}
                    </span>
                    <span>
                      {displayDetail(experience.workplaceType, "Workplace type")}
                    </span>
                  </div>

                  {experience.summary ? (
                    <p className="experience-summary">{experience.summary}</p>
                  ) : (
                    <p className="experience-summary experience-unconfirmed">
                      Role, dates, and responsibilities have not yet been
                      supplied. Add verified details to{" "}
                      <code>src/data/portfolioData.js</code>.
                    </p>
                  )}

                  <details className="experience-details">
                    <summary>Role details</summary>
                    <dl className="experience-facts">
                      {[
                        ["Designation", experience.role],
                        ["Employment type", experience.employmentType],
                        ["Workplace", experience.workplaceType],
                        ["Location", experience.location || company.location],
                        [
                          "Currently working",
                          experience.isCurrent === null
                            ? null
                            : experience.isCurrent
                              ? "Yes"
                              : "No",
                        ],
                        ["Start date", startDate],
                        ["End date", endDate],
                        ["Duration", duration],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{displayDetail(value, label)}</dd>
                        </div>
                      ))}
                    </dl>

                    {[
                      ["Overview", experience.summary ? [experience.summary] : []],
                      ["Responsibilities", experience.responsibilities],
                      ["Contributions & achievements", experience.achievements],
                    ].map(([heading, items]) => (
                      <div className="experience-detail-group" key={heading}>
                        <h4>{heading}</h4>
                        {items.length ? (
                          <ul>
                            {items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>Details not provided.</p>
                        )}
                      </div>
                    ))}

                    <div className="experience-detail-group">
                      <h4>Technologies & tools</h4>
                      {experience.technologies.length ? (
                        <ul className="experience-tags">
                          {experience.technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>Technologies not provided.</p>
                      )}
                    </div>

                    {relatedProjects.length > 0 && (
                      <div className="experience-detail-group">
                        <h4>Related projects</h4>
                        <ul>
                          {relatedProjects.map((project) => (
                            <li key={project.id}>
                              <a href={`/projects/${project.slug}`}>
                                {project.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </details>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="management-empty">
          Experience details have not been added yet.
        </p>
      )}
    </div>
  </section>
);

export default Experience;
