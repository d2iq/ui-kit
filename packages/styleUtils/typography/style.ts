import { css } from "emotion";
import {
  fontLineHeightS,
  fontLineHeightM,
  fontLineHeightDefault,
  fontSizeM
} from "../../design-tokens/build/js/designTokens";

export const textBase = css`
  font-size: ${fontSizeM};
  line-height: ${fontLineHeightDefault};
`;

export const heading1 = css`
  line-height: ${fontLineHeightS};
`;

export const heading2 = css`
  line-height: ${fontLineHeightM};
`;
