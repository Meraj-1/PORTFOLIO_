import { getProjectSlugFromPath, isPortfolioHomePath } from "./routes";

describe("portfolio route helpers", () => {
  test("matches project detail paths with optional trailing slashes", () => {
    expect(getProjectSlugFromPath("/projects/eden-rose")).toBe("eden-rose");
    expect(getProjectSlugFromPath("/projects/eden-rose/")).toBe("eden-rose");
  });

  test("decodes a valid slug and safely rejects malformed paths", () => {
    expect(getProjectSlugFromPath("/projects/real%20estate")).toBe("real estate");
    expect(getProjectSlugFromPath("/projects/%E0%A4%A")).toBeNull();
    expect(getProjectSlugFromPath("/projects/eden-rose/gallery")).toBeNull();
    expect(getProjectSlugFromPath("/")).toBeNull();
  });

  test("recognizes the portfolio home paths", () => {
    expect(isPortfolioHomePath("/")).toBe(true);
    expect(isPortfolioHomePath("/index.html")).toBe(true);
    expect(isPortfolioHomePath("/projects/eden-rose")).toBe(false);
  });
});
