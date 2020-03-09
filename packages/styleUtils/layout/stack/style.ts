import { css } from "emotion";
import {
  boxSpacing,
  SpaceSize
} from "../../../shared/styles/styleUtils/modifiers/modifierUtils";

export const stack = (spaceSize?: SpaceSize) => css`
  > * + * {
    ${boxSpacing("margin", "top", spaceSize)};
    margin-bottom: 0;
  }
`;
