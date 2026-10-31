export const getProjectSlugFromPath = (pathname) => {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
};

export const isPortfolioHomePath = (pathname) =>
  pathname === "/" || pathname === "/index.html";
