import { css } from "emotion";
import {
  boxSpacing,
  SpaceSize
} from "../../../shared/styles/styleUtils/modifiers/modifierUtils";

export const stack = (spaceSize?: SpaceSize) => css`
  > * {
    margin-bottom: 0;
  }
  > * + * {
    ${boxSpacing("margin", "top", spaceSize)};
  }
`;
