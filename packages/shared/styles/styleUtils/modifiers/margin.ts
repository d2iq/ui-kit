import { css } from "@emotion/css";
import { boxSpacing, BoxSides, SpaceSizes } from "./modifierUtils";
import { atMediaUp, breakpoints } from "../../breakpoints";

export const margin = (side: BoxSides, spaceSize?: SpaceSizes) => {
  return css`
    ${boxSpacing("margin", side, spaceSize)};
  `;
};

// TODO: you still need to write better types
export const marginAt = Object.keys(breakpoints).reduce(
  (acc: any, curr: string) => {
    acc[curr] = (side: BoxSides, spaceSize: SpaceSizes) => css`
      ${atMediaUp[curr](css`
        ${margin(side, spaceSize)};
      `)};
    `;
    return acc;
  },
  {}
);
