import {
  spacingXXS,
  spacingXS,
  spacingS,
  spacingM,
  spacingL,
  spacingXL,
  spacingXXL
} from "../../spacing";

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
  xxs: spacingXXS,
  xs: spacingXS,
  s: spacingS,
  m: spacingM,
  l: spacingL,
  xl: spacingXL,
  xxl: spacingXXL,
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
    case "horiz":
      return `
        ${property}-left: ${spaceSizes[size]};
        ${property}-right: ${spaceSizes[size]};
      `;
    case "vert":
      return `
        ${property}-bottom: ${spaceSizes[size]};
        ${property}-top: ${spaceSizes[size]};
      `;
    default:
      return `${property}-${side}: ${spaceSizes[size]};`;
  }
};
