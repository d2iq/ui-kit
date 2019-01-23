import { css } from "emotion";
import {
  accent,
  borderRadiusSmall,
  error,
  greenLighten5,
  greyDark,
  greyDarkLighten3,
  greyLight,
  greyLightDarken2,
  greyLightLighten3,
  purpleLighten5,
  redLighten5,
  success,
  white
} from "../../design-tokens/build/js/designTokens";

import {
  padding,
  flush,
  margin,
  textWeight,
  display,
  tintContent
} from "./styleUtils";

const toggleInputHeight = 16;
const toggleInputBorderWidth = 1;

export const toggleInput = css`
  border-color: ${greyLight};
  background-color: ${white};
  border-style: solid;
  border-width: ${toggleInputBorderWidth}px;
  height: ${toggleInputHeight - toggleInputBorderWidth}px;
  width: ${toggleInputHeight - toggleInputBorderWidth}px;
`;

export const toggleInputApperances = {
  disabled: css`
    background-color: ${greyLightLighten3};
    border-color: ${greyLightLighten3};
  `,
  "standard-focus": css`
    border-color: ${accent};
  `,
  "error-focus": css`
    border-color: ${error};
  `,
  "success-focus": css`
    border-color: ${success};
  `,
  "standard-active": css`
    background-color: ${accent};
    border-color: ${accent};
  `,
  "error-active": css`
    background-color: ${error};
    border-color: ${error};
  `,
  "success-active": css`
    background-color: ${success};
    border-color: ${success};
  `,
  "disabled-active": css`
    background-color: ${greyLightDarken2};
    border-color: ${greyLightDarken2};
  `,
  "focus-active": css`
    box-shadow: inset 0px 0px 0px 1px ${white};
  `
};

export const inputAppearances = {
  standard: css`
    background-color: ${white};
    border-color: ${greyLight};
    svg {
      fill: ${greyDark};
    }
    &:focus {
      background-color: ${purpleLighten5};
      border-color: ${accent};
      svg {
        fill: ${accent};
      }
    }
  `,
  disabled: css`
    background-color: ${greyLightLighten3};
    border-color: ${greyLightLighten3};
    color: ${greyDarkLighten3};
    svg {
      fill: ${greyDarkLighten3};
    }
    &::placeholder {
      color: ${greyDarkLighten3};
    }
    input {
      color: ${greyDarkLighten3};
      ::placeholder {
        color: ${greyDarkLighten3};
      }
    }
  `,
  error: css`
    background-color: ${white};
    border-color: ${error};
    svg {
      fill: ${error};
    }
    &:focus {
      background-color: ${redLighten5};
    }
  `,
  success: css`
    background-color: ${white};
    border-color: ${success};
    svg {
      fill: ${success};
    }
    &:focus {
      background-color: ${greenLighten5};
    }
  `,
  "standard-focus": css`
    background-color: ${purpleLighten5};
    border-color: ${accent};
    svg {
      fill: ${accent};
    }
  `,
  "error-focus": css`
    background-color: ${redLighten5};
    border-color: ${error};
    svg {
      fill: ${error};
    }
  `,
  "success-focus": css`
    background-color: ${greenLighten5};
    border-color: ${success};
    svg {
      fill: ${success};
    }
  `
};

export const inputContainer = css`
  border: 1px solid;
  border-radius: ${borderRadiusSmall};
  height: 36px;
  font-size: inherit;
  ${padding("horiz", "m")};
  input {
    font-size: inherit;
  }
`;

export const getLabelStyle = (hasError?: boolean) => css`
  ${display("block")};
  ${flush("top")};
  ${margin("bottom", "xxs")};
  ${textWeight("medium")};
  ${hasError ? tintContent(error) : null};
`;
