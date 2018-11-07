import { css } from "emotion";
import {
  textColorPrimaryInverted,
  textColorSecondary,
  textColorSecondaryInverted
} from "../../design-tokens-dist/js/designTokens";

// TODO: when we do the design tokens lib,
// generate a type for _only_ our colors
// instead of just accepting any string
export const tintText = (color: string) => css`
  color: ${color};
`;

export const tintSVG = (color: string) => css`
  &,
  svg {
    fill: ${color};
  }
`;

export const darkMode = css`
  ${tintText(textColorPrimaryInverted)};
  ${tintSVG(textColorPrimaryInverted)};
`;

export const tintContentSecondary = css`
  ${tintText(textColorSecondary)};
  ${tintSVG(textColorSecondary)};

  .${darkMode} & {
    ${tintText(textColorSecondaryInverted)};
    ${tintSVG(textColorSecondaryInverted)};
  }
`;
