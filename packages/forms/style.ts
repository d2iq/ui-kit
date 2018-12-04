import { css } from "emotion";
import { coreColors } from "../shared/styles/color";

const {
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
} = coreColors();

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
  border-radius: 4px;
  height: 36px;
  font-size: inherit;
  input {
    font-size: inherit;
  }
`;

export const iconEnd = css`
  order: 2;
`;

export const inputValidation = css`
  color: ${red};
`;
