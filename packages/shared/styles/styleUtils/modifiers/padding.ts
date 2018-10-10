import { css } from "react-emotion";
import { boxSpacing, BoxSides } from "./modifierUtils";

export const padding = (side: BoxSides) => {
  return css`
    ${boxSpacing("padding", side)};
  `;
};
