import { css } from "emotion";
import {
  accent,
  error,
  greyLight,
  greyLightDarken2,
  greyLightLighten3,
  success,
  white
} from "../../design-tokens/build/js/designTokens";

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
