import { css } from "emotion";
import {
  borderRadiusSmall,
  themeTextColorDisabled,
  themeSuccess,
  themeBorder,
  themeBgPrimary,
  themeTextColorPrimary,
  themeBrandPrimary,
  themeError,
  themeBgDisabled
} from "../../design-tokens/build/js/designTokens";

import {
  padding,
  flush,
  margin,
  textWeight,
  display,
  tintContent
} from "./styleUtils";
import getCSSVarValue from "../../utilities/components/getCSSVarValue";
import { hexToRgbA } from "./color";
const getFocusFieldBg = color => hexToRgbA(color, 0.05);

const toggleInputHeight = 16;
const toggleInputBorderWidth = 1;

export const toggleInput = css`
  border-color: ${themeBorder};
  background-color: ${themeBgPrimary};
  border-style: solid;
  border-width: ${toggleInputBorderWidth}px;
  height: ${toggleInputHeight - toggleInputBorderWidth}px;
  width: ${toggleInputHeight - toggleInputBorderWidth}px;
`;

export const toggleInputApperances = {
  disabled: css`
    background-color: ${themeBgDisabled};
    border-color: ${themeBgDisabled};
  `,
  "standard-focus": css`
    border-color: ${themeBrandPrimary};
  `,
  "error-focus": css`
    border-color: ${themeError};
  `,
  "success-focus": css`
    border-color: ${themeSuccess};
  `,
  "standard-active": css`
    background-color: ${themeBrandPrimary};
    border-color: ${themeBrandPrimary};
  `,
  "error-active": css`
    background-color: ${themeError};
    border-color: ${themeError};
  `,
  "success-active": css`
    background-color: ${themeSuccess};
    border-color: ${themeSuccess};
  `,
  "disabled-active": css`
    background-color: ${themeTextColorDisabled};
    border-color: ${themeTextColorDisabled};
  `,
  "focus-active": css`
    box-shadow: inset 0px 0px 0px 1px ${themeBgPrimary};
  `
};

export const getInputAppearanceStyle = appearance => {
  switch (appearance) {
    case "standard":
      return css`
        background-color: ${themeBgPrimary};
        border-color: ${themeBorder};
        svg {
          fill: ${themeTextColorPrimary};
        }
        &:focus {
          background-color: ${getFocusFieldBg(
            getCSSVarValue(themeBrandPrimary)
          )};
          border-color: ${themeBrandPrimary};
          svg {
            fill: ${themeBrandPrimary};
          }
        }
      `;
    case "disabled":
      return css`
        background-color: ${themeBgDisabled};
        border-color: ${themeBgDisabled};
        color: ${themeTextColorDisabled};
        svg {
          fill: ${themeTextColorDisabled};
        }
        &::placeholder {
          color: ${themeTextColorDisabled};
        }
        input {
          color: ${themeTextColorDisabled};
          ::placeholder {
            color: ${themeTextColorDisabled};
          }
        }
      `;
    case "error":
      return css`
        background-color: ${themeBgPrimary};
        border-color: ${themeError};
        svg {
          fill: ${themeError};
        }
        &:focus {
          background-color: ${getFocusFieldBg(getCSSVarValue(themeError))};
        }
      `;
    case "success":
      return css`
        background-color: ${themeBgPrimary};
        border-color: ${themeSuccess};
        svg {
          fill: ${themeSuccess};
        }
        &:focus {
          background-color: ${getFocusFieldBg(getCSSVarValue(themeSuccess))};
        }
      `;
    case "standard-focus":
      return css`
        background-color: ${getFocusFieldBg(getCSSVarValue(themeBrandPrimary))};
        border-color: ${themeBrandPrimary};
        svg {
          fill: ${themeBrandPrimary};
        }
      `;
    case "error-focus":
      return css`
        background-color: ${getFocusFieldBg(getCSSVarValue(themeError))};
        border-color: ${themeError};
        svg {
          fill: ${themeError};
        }
      `;
    case "success-focus":
      return css`
        background-color: ${getFocusFieldBg(getCSSVarValue(themeSuccess))};
        border-color: ${themeSuccess};
        svg {
          fill: ${themeSuccess};
        }
      `;
    default:
      return "";
  }
};

export const inputContainer = css`
  border: 1px solid;
  border-radius: ${borderRadiusSmall};
  color: inherit;
  height: 36px;
  font-size: inherit;
  ${padding("horiz", "m")};
  &::placeholder {
    color: ${themeTextColorPrimary};
    opacity: 0.4;
  }
  input {
    font-size: inherit;
    color: inherit;
    &::placeholder {
      color: ${themeTextColorPrimary};
      opacity: 0.4;
    }
  }
`;

export const getLabelStyle = (hasError?: boolean) => css`
  ${display("block")};
  ${flush("top")};
  ${margin("bottom", "xxs")};
  ${textWeight("medium")};
  ${hasError ? tintContent(themeError) : null};
`;
