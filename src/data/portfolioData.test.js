import {
  companies,
  experiences,
  projectCategories,
  projects,
} from "./portfolioData";

describe("portfolio content relationships", () => {
  test("keeps project slugs and IDs unique and categories supported", () => {
    const ids = projects.map((project) => project.id);
    const slugs = projects.map((project) => project.slug);
    const categoryIds = projectCategories.map((category) => category.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(categoryIds).toEqual(
      expect.arrayContaining([
        "personal",
        "professional",
        "open-source",
        "freelance",
        "client",
        "experimental",
        "unclassified",
      ]),
    );
    projects.forEach((project) => {
      expect(categoryIds).toContain(project.category);
    });
  });

  test("only links projects and roles to companies that exist", () => {
    const companyIds = companies.map((company) => company.id);
    const projectIds = projects.map((project) => project.id);

    projects.forEach((project) => {
      if (project.companyId) expect(companyIds).toContain(project.companyId);
    });
    experiences.forEach((experience) => {
      expect(companyIds).toContain(experience.companyId);
      experience.relatedProjectIds.forEach((projectId) => {
        expect(projectIds).toContain(projectId);
      });
    });
  });

  test("leaves unconfirmed employment state and dates unknown", () => {
    experiences.forEach((experience) => {
      if (experience.isCurrent === null) {
        expect(experience.startDate).toBeNull();
        expect(experience.endDate).toBeNull();
      }
    });
  });
});
