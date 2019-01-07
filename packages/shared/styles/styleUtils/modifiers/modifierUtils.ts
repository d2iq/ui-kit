import {
  spaceXxs,
  spaceXs,
  spaceS,
  spaceM,
  spaceL,
  spaceXl,
  spaceXxl
} from "../../../../design-tokens/build/js/designTokens";

export type BoxSides =
  | "all"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "horiz"
  | "vert";
export type SpaceSizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none";

export const spaceSizes = {
  xxs: spaceXxs,
  xs: spaceXs,
  s: spaceS,
  m: spaceM,
  l: spaceL,
  xl: spaceXl,
  xxl: spaceXxl,
  none: 0
};

export const boxSpacing = (
  property: "margin" | "padding",
  side: BoxSides,
  spaceSize?: SpaceSizes
) => {
  const size = spaceSize || "m";

  switch (side) {
    case "all":
      return `${property}: ${spaceSizes[size]};`;
      break;
    case "horiz":
      return `
        ${property}-left: ${spaceSizes[size]};
        ${property}-right: ${spaceSizes[size]};
      `;
      break;
    case "vert":
      return `
        ${property}-bottom: ${spaceSizes[size]};
        ${property}-top: ${spaceSizes[size]};
      `;
      break;
    default:
      return `${property}-${side}: ${spaceSizes[size]};`;
  }
};
