export const formatItemsWithConjunction = (items) => {
  if (items.length === 1) return items[0];
  if (items.length === 2) return items.join(" and ");
  const allButLast = items.slice(0, -1).join(", ");
  const lastItem = items[items.length - 1];
  return `${allButLast}, and ${lastItem}`;
};
