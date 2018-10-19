import {
  spacingXXS,
  spacingXS,
  spacingS,
  spacingM,
  spacingL,
  spacingXL,
  spacingXXL
} from "../../spacing";

export type BoxSides = "all" | "top" | "right" | "bottom" | "left";
export type SpaceSizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

const spaceSizes = {
  xxs: spacingXXS,
  xs: spacingXS,
  s: spacingS,
  m: spacingM,
  l: spacingL,
  xl: spacingXL,
  xxl: spacingXXL
};

export const boxSpacing = (
  property: "margin" | "padding",
  side: BoxSides,
  spaceSize?: SpaceSizes
) => {
  const size = spaceSize || "m";

  if (side === "all") {
    return `${property}: ${spaceSizes[size]} !important;`;
  } else {
    return `${property}-${side}: ${spaceSizes[size]} !important;`;
  }
};
