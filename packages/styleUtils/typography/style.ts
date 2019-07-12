import { css } from "emotion";
import {
  fontLineHeightS,
  fontLineHeightM,
  fontLineHeightDefault
} from "../../design-tokens/build/js/designTokens";

export const textBase = css`
  line-height: ${fontLineHeightDefault};
`;

export const heading1 = css`
  line-height: ${fontLineHeightS};
`;

export const heading2 = css`
  line-height: ${fontLineHeightM};
`;
