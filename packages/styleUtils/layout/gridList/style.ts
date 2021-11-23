import { getResponsiveStyle } from "../../../shared/styles/styleUtils";

export const gridColumnTemplate = columnCount => {
  const gridTemplateColumns =
    typeof columnCount === "object" && columnCount !== null
      ? Object.keys(columnCount).reduce((acc, breakpoint) => {
          acc[breakpoint] = `repeat(${columnCount[breakpoint]}, 1fr)`;
          return acc;
        }, {})
      : columnCount
      ? `repeat(${columnCount}, minmax(0, 1fr))`
      : `repeat(auto-fill, minmax(min(320px, 100%), 1fr));`;
  // 👆explicitly setting the min to 0 so content doesn't overflow the grid cell
  // see: https://github.com/rachelandrew/cssgrid-ama/issues/25

  return getResponsiveStyle("grid-template-columns", gridTemplateColumns);
};
