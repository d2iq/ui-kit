import { spacingDefault } from "../../spacing";

export type BoxSides = "all" | "top" | "right" | "bottom" | "left";

export const boxSpacing = (property: "margin" | "padding", side: BoxSides) => {
  if (side === "all") {
    return `${property}: ${spacingDefault} !important;`;
  } else {
    return `${property}-${side}: ${spacingDefault} !important;`;
  }
};
