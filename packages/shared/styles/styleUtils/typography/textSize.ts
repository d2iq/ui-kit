import { css } from "react-emotion";
import { typeSizes } from "../../typography";

export type TypeSizes = "default" | "small";

export const textSize = (size = "default") => css`
  font-size: ${typeSizes[size]};
`;
