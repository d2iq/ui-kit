import { css } from "emotion";
import { coreColors } from "../../color";
const { white } = coreColors();

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
  ${tintText(white)};
  ${tintSVG(white)};
`;
