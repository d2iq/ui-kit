import { css } from "emotion";
import {
  borderRadiusSmall,
  green,
  greenLighten5,
  greyDark,
  greyDarkLighten3,
  greyLight,
  greyLightLighten3,
  purple,
  purpleLighten5,
  red,
  redLighten5,
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

export const dangerColor = red;
export const errorColor = red;

export const inputAppearances = {
  standard: css`
    background-color: ${white};
    border-color: ${greyLight};
    svg {
      fill: ${greyDark};
    }
    &:focus {
      background-color: ${purpleLighten5};
      border-color: ${purple};
      svg {
        fill: ${purple};
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
    border-color: ${errorColor};
    svg {
      fill: ${errorColor};
    }
    &:focus {
      background-color: ${redLighten5};
    }
  `,
  success: css`
    background-color: ${white};
    border-color: ${green};
    svg {
      fill: ${green};
    }
    &:focus {
      background-color: ${greenLighten5};
    }
  `,
  "standard-focus": css`
    background-color: ${purpleLighten5};
    border-color: ${purple};
    svg {
      fill: ${purple};
    }
  `,
  "error-focus": css`
    background-color: ${redLighten5};
    border-color: ${errorColor};
    svg {
      fill: ${errorColor};
    }
  `,
  "success-focus": css`
    background-color: ${greenLighten5};
    border-color: ${green};
    svg {
      fill: ${green};
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
  ${hasError ? tintContent(errorColor) : null};
`;
