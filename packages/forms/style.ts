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

export const inputAppearances = {
  standard: css`
    background-color: ${white};
    border-color: ${greyLight};
    svg {
      fill: ${greyDark};
    }
    &:focus,
    &:focus-within {
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
    svg {
      fill: ${greyDarkLighten3};
    }
  `,
  error: css`
    background-color: ${white};
    border-color: ${red};
    svg {
      fill: ${red};
    }
    &:focus,
    &:focus-within {
      background-color: ${redLighten5};
    }
  `,
  success: css`
    background-color: ${white};
    border-color: ${green};
    svg {
      fill: ${green};
    }
    &:focus,
    &:focus-within {
      background-color: ${greenLighten5};
    }
  `
};

export const inputContainer = css`
  border: 1px solid;
  border-radius: 4px;
  height: 36px;
`;

export const iconEnd = css`
  order: 2;
`;

export const inputValidation = css`
  color: ${red};
`;
