import { css } from "emotion";
import {
  iconSizeXs,
  spaceM,
  textColorPrimary
} from "../design-tokens/build/js/designTokens";

export const selectContainer = css`
  position: relative;
`;

export const select = css`
  appearance: none;
  font-size: inherit;
  padding-right: ${parseInt(iconSizeXs, 10) + parseInt(spaceM, 10)}px;
  width: 100%;

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${textColorPrimary};
  }

  &::-ms-expand {
    display: none;
  }
`;

export const selectIcon = css`
  font-size: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
