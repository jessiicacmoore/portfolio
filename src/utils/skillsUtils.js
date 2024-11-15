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

export const formatAdditionalSkills = (items) => {
  if (items.length === 1) return items[0];
  if (items.length === 2) return items.join(" and ");
  const allButLast = items.slice(0, -1).join(", ");
  const lastItem = items[items.length - 1];
  return `${allButLast}, and ${lastItem}`;
};
