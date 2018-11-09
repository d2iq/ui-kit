import { css } from "emotion";
import {
  textColorPrimary,
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

export const tintContentPrimary = css`
  ${tintText(textColorPrimary)};
  ${tintSVG(textColorPrimary)};

  ${darkMode} &,
  &${darkMode} {
    ${tintText(textColorPrimaryInverted)};
    ${tintSVG(textColorPrimaryInverted)};
  }
`;

export const tintContentSecondary = css`
  ${tintText(textColorSecondary)};
  ${tintSVG(textColorSecondary)};

  ${darkMode} &,
  &${darkMode} {
    ${tintText(textColorSecondaryInverted)};
    ${tintSVG(textColorSecondaryInverted)};
  }
`;
