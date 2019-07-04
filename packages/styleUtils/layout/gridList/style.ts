import { getResponsiveStyle } from "../../../shared/styles/styleUtils";

export const gridColumnTemplate = columnCount => {
  const gridTemplateColumns =
    typeof columnCount === "object" && columnCount !== null
      ? Object.keys(columnCount).reduce((acc, breakpoint) => {
          acc[breakpoint] = `repeat(${columnCount[breakpoint]}, 1fr)`;
          return acc;
        }, {})
      : `repeat(${columnCount}, 1fr)`;

  return getResponsiveStyle("grid-template-columns", gridTemplateColumns);
};
