import { css } from "emotion";
import { spaceL } from "../design-tokens/build/js/designTokens";

export const formFieldStack = css`
  > * + * {
    margin-top: ${spaceL};
  }
`;
