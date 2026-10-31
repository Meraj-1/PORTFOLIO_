const MONTH_PATTERN = /^(\d{4})-(0[1-9]|1[0-2])$/;

export const parseMonth = (value) => {
  if (typeof value !== "string") return null;
  const match = value.match(MONTH_PATTERN);
  if (!match) return null;
  return { year: Number(match[1]), month: Number(match[2]) };
};

export const isValidExperience = (experience, now = new Date()) => {
  if (experience.isCurrent === true && experience.endDate) return false;
  const start = parseMonth(experience.startDate);
  const end = experience.isCurrent === true
    ? { year: now.getFullYear(), month: now.getMonth() + 1 }
    : parseMonth(experience.endDate);
  if (!start || !end) return false;
  return end.year * 12 + end.month >= start.year * 12 + start.month;
};

export const getEmploymentDuration = (experience, now = new Date()) => {
  if (!isValidExperience(experience, now)) return null;
  const start = parseMonth(experience.startDate);
  const end = experience.isCurrent === true
    ? { year: now.getFullYear(), month: now.getMonth() + 1 }
    : parseMonth(experience.endDate);
  const months = (end.year - start.year) * 12 + end.month - start.month + 1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
  if (remainingMonths === 0) return `${years} ${years === 1 ? "year" : "years"}`;
  return `${years} ${years === 1 ? "year" : "years"}, ${remainingMonths} ${
    remainingMonths === 1 ? "month" : "months"
  }`;
};

export const formatEmploymentDate = (value) => {
  const month = parseMonth(value);
  if (!month) return null;
  return new Date(month.year, month.month - 1).toLocaleDateString("en", {
    month: "short",
    year: "numeric",
  });
};
