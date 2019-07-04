import { css } from "emotion";
import {
  breakpointSmall,
  breakpointMedium,
  breakpointLarge,
  breakpointJumbo
} from "../../design-tokens/build/js/designTokens";

export const breakpoints = {
  default: 0,
  small: breakpointSmall,
  medium: breakpointMedium,
  large: breakpointLarge,
  jumbo: breakpointJumbo
};

export const atMediaUp = Object.keys(breakpoints).reduce(
  (acc: any, curr: any) => {
    acc[curr] = cls => {
      return css`
        @media (min-width: ${breakpoints[curr]}) {
          ${cls};
        }
      `;
    };
    return acc;
  },
  {}
);
