import {
  companies,
  experiences,
  projectCategories,
  projectBySlug,
  projects,
} from "./portfolioData";

describe("portfolio content relationships", () => {
  test("keeps project slugs and IDs unique and categories supported", () => {
    const ids = projects.map((project) => project.id);
    const slugs = projects.map((project) => project.slug);
    const categoryIds = projectCategories.map((category) => category.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(categoryIds).toEqual(["company", "personal"]);
    projects.forEach((project) => {
      expect(categoryIds).toContain(project.category);
    });
  });

  test("includes the three supplied projects and their local media", () => {
    expect(projectBySlug("power-kick")).toMatchObject({
      thumbnail: "/project/click_powerkick/powercick.jpg",
      gallery: expect.arrayContaining([
        expect.objectContaining({
          src: "/project/click_powerkick/powercick.jpg",
          type: "image",
        }),
        expect.objectContaining({
          src: "/project/click_powerkick/Screen%20Recording%202026-11-01%20225232.mp4",
          type: "video",
        }),
      ]),
    });
    expect(projectBySlug("artitory")).toMatchObject({
      thumbnail: "/project/click_artiory/logo.png",
      gallery: [
        expect.objectContaining({
          src: "/project/click_artiory/logo.png",
          type: "image",
        }),
      ],
    });
    expect(projectBySlug("vicky-tailor")).toMatchObject({
      thumbnail: "/project/vickytailor/logo.png",
      gallery: [
        expect.objectContaining({
          src: "/project/vickytailor/logo.png",
          type: "image",
        }),
      ],
    });
    expect(projectBySlug("artitory")).toMatchObject({
      category: "company",
      companyId: "clicktrik",
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

  test("records the internship and subsequent full-time role with confirmed dates", () => {
    expect(experiences).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          role: "Software Engineer",
          employmentType: "Full-time",
          startDate: "2026-03",
          endDate: "2026-09",
          isCurrent: false,
        }),
        expect.objectContaining({
          role: "Software Engineer Intern",
          employmentType: "Internship",
          startDate: "2025-09",
          endDate: "2026-02",
          isCurrent: false,
        }),
      ]),
    );
  });

  test("removes the requested projects and keeps company and personal work distinct", () => {
    const projectSlugs = projects.map((project) => project.slug);
    const companyProjects = projects.filter(
      (project) => project.category === "company",
    );

    expect(projectSlugs).not.toContain("kids-ecommerce-platform");
    expect(projectSlugs).not.toContain("connected-saas");
    expect(projectBySlug("kids-ecommerce-platform")).toBeUndefined();
    expect(projectBySlug("connected-saas")).toBeUndefined();
    expect(projectSlugs).toContain("power-kick");
    expect(companyProjects).toHaveLength(2);
    companyProjects.forEach((project) => {
      expect(project.companyId).toBe("clicktrik");
    });
    expect(projectBySlug("power-kick").features.length).toBeGreaterThan(0);
    expect(projectBySlug("power-kick").technologies.length).toBeGreaterThan(0);
    projects
      .filter((project) => project.category === "personal")
      .forEach((project) => {
        expect(project.companyId).toBeNull();
      });
  });
});
