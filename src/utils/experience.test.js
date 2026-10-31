import {
  formatEmploymentDate,
  getEmploymentDuration,
  isValidExperience,
  parseMonth,
} from "./experience";

describe("experience date helpers", () => {
  const now = new Date(2025, 2, 15);

  test("accepts only valid YYYY-MM values", () => {
    expect(parseMonth("2024-09")).toEqual({ year: 2024, month: 9 });
    expect(parseMonth("2024-13")).toBeNull();
    expect(parseMonth("2024-2")).toBeNull();
    expect(parseMonth(null)).toBeNull();
  });

  test("calculates inclusive completed employment durations", () => {
    expect(
      getEmploymentDuration(
        { startDate: "2024-01", endDate: "2024-12", isCurrent: false },
        now,
      ),
    ).toBe("1 year");
  });

  test("calculates current employment through the current month", () => {
    expect(
      getEmploymentDuration(
        { startDate: "2024-12", endDate: null, isCurrent: true },
        now,
      ),
    ).toBe("4 months");
  });

  test("leaves missing, contradictory, and reversed dates uncalculated", () => {
    expect(
      getEmploymentDuration(
        { startDate: null, endDate: null, isCurrent: null },
        now,
      ),
    ).toBeNull();
    expect(
      isValidExperience(
        { startDate: "2024-01", endDate: null, isCurrent: true },
        now,
      ),
    ).toBe(true);
    expect(
      isValidExperience(
        { startDate: "2024-01", endDate: "2024-12", isCurrent: true },
        now,
      ),
    ).toBe(false);
    expect(
      isValidExperience(
        { startDate: "2025-03", endDate: "2025-02", isCurrent: false },
        now,
      ),
    ).toBe(false);
  });

  test("formats a provided month and leaves missing dates blank", () => {
    expect(formatEmploymentDate("2024-01")).toBe("Jan 2024");
    expect(formatEmploymentDate(null)).toBeNull();
  });
});
