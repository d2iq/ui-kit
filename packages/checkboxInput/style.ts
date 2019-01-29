import { css } from "emotion";
import { borderRadiusSmall } from "../design-tokens/build/js/designTokens";

export const checkbox = css`
  border-radius: ${borderRadiusSmall};
  position: relative;
`;

export const checkboxIconContainer = css`
  box-sizing: border-box;
  height: 100%;
  padding: 2px;
  position: absolute;
  width: 100%;

  svg {
    height: 100%;
    width: 100%;
  }
`;
