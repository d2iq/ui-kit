import { css } from "emotion";
import {
  border,
  borderRadius,
  padding
} from "../shared/styles/styleUtils/index";
import { themeBgPrimary } from "../design-tokens/build/js/designTokens";

export const style = css`
  background-color: ${themeBgPrimary};
  ${border("all")};
  ${borderRadius("default")};
  ${padding("all")};
`;
