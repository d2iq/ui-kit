import { css } from "emotion";
import {
  themeError,
  themeBgHover,
  themeBgPrimary,
  themeBgDisabled,
  themeTextColorDisabled
} from "../design-tokens/build/js/designTokens";
import { lighten } from "../shared/styles/color";
import { getCSSVarValue } from "../utilities";

export const fillWidth = css`
  display: block;
  width: 100%;
`;

export const accordionTitle = css`
  background-color: ${themeBgPrimary};
  position: relative;

  &:hover,
  &:focus-within {
    background-color: ${themeBgHover};
  }
`;

export const accordionTitleDisabled = css`
  background-color: ${themeBgDisabled};
  color: ${themeTextColorDisabled};
`;

export const accordionTitleDanger = css`
  background-color: ${lighten(getCSSVarValue(themeError), 4)};
  border-color: ${themeError};

  &:hover,
  &:focus-within {
    background-color: ${lighten(getCSSVarValue(themeError), 5)};
  }
`;

export const accordionButtonOverlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

export const accordionTitleInteractive = css`
  pointer-events: none;
  position: relative;
  z-index: 1;
`;
