import { css } from "emotion";
import { coreColors } from "../shared/styles/color";

const { white } = coreColors();
export const outline = css`
  &:focus {
    box-shadow: 0 0 0 1px ${white}, 0 0 0 3px currentColor;
    outline: 0;
  }
`;
