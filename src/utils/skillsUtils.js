export const calculateYearsOfExperience = (skills, currentYear) => {
  return skills.map((skill) => ({
    ...skill,
    years: currentYear - skill.since,
  }));
};

export const getMaxYears = (skills) => {
  return Math.max(...skills.map((skill) => skill.years));
};

export const formatYears = (years) => {
  if (years === 0) {
    return "Less than a year";
  }
  return `${years}+ year${years > 1 ? "s" : ""}`;
};
