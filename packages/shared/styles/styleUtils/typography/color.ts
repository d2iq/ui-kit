import { css } from "emotion";
import {
  themeTextColorPrimary,
  themeTextColorPrimaryInverted,
  themeTextColorSecondary,
  themeTextColorSecondaryInverted
} from "../../../../design-tokens/build/js/designTokens";

// TODO: when we do the design tokens lib,
// generate a type for _only_ our colors
// instead of just accepting any string
export const tintText = (color: string) => css`
  color: ${color};
`;

export const tintSVG = (color: string) => css`
  fill: ${color};
`;

export const tintContent = (color: string) => css`
  ${tintText(color)};
  ${tintSVG(color)};
`;

// .inverseColorMode styles are set globally
// in global.ts
export const inverseColorMode = "inverseColorMode";

export const tintContentPrimary = css`
  ${tintContent(themeTextColorPrimary)};

  .${inverseColorMode} &,
  &.${inverseColorMode} {
    ${tintContent(themeTextColorPrimaryInverted)};
  }
`;

export const tintContentSecondary = css`
  ${tintContent(themeTextColorSecondary)};

  .${inverseColorMode} &,
  &.${inverseColorMode} {
    ${tintContent(themeTextColorSecondaryInverted)};
  }
`;
