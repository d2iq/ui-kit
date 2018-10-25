//
// TODO: add types
//
import { css } from "emotion";

export const breakpoints = {
  small: "600px",
  medium: "900px",
  large: "1200px",
  jumbo: "1800px"
};

export const atMediaUp = Object.keys(breakpoints).reduce(
  (acc: any, curr: any) => {
    acc[curr] = cls =>
      css`
        @media (min-width: ${breakpoints[curr]}) {
          ${cls};
        }
      `;
    return acc;
  },
  {}
);
