import { css } from "emotion";
import { fontWeights } from "../../typography";

type FontWeights = keyof typeof fontWeights;

export const textWeight = (weight: FontWeights) => css`
  font-weight: ${fontWeights[weight]};
`;
