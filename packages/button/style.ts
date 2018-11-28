import { css } from "emotion";
import {
  borderRadiusSmall,
  green,
  greenDarken1,
  greenDarken2,
  greyLight,
  greyLightDarken1,
  greyLightDarken2,
  greyLightLighten4,
  purple,
  purpleDarken1,
  purpleDarken2,
  purpleLighten1,
  purpleLighten2,
  purpleLighten3,
  red,
  redDarken1,
  redDarken2,
  textColorPrimary,
  white
} from "../design-tokens/build/js/designTokens";
import { isHexDark, hexToRgbA } from "../shared/styles/color";
import { ButtonAppearances } from "./components/ButtonBase";
import { tintContent } from "../shared/styles/styleUtils";

const filledButton = (
  baseColor: string,
  hoverColor: string,
  activeColor: string,
  isInverse?: boolean
) => {
  const contentColor =
    isHexDark(baseColor) || isInverse ? white : textColorPrimary;

  return css`
    ${tintContent(contentColor)};
    background-color: ${baseColor};

    &:hover {
      background-color: ${hoverColor};
    }

    &:active {
      background-color: ${activeColor};
    }
  `;
};

const mutedButton = css`
  ${tintContent(greyLightDarken2)};
  cursor: default;

  &:hover,
  &:focus,
  &:active {
    ${tintContent(greyLightDarken2)};
  }
`;

const inverseMutedButton = css`
  ${tintContent(hexToRgbA(white, 0.35))};
  cursor: default;

  &:hover,
  &:focus,
  &:active {
    ${tintContent(hexToRgbA(white, 0.35))};
  }
`;

const mutedFilledButton = css`
  background-color: ${greyLightLighten4};
  &:hover,
  &:focus,
  &:active {
    background-color: ${greyLightLighten4};
  }
`;

const inverseMutedFilledButton = css`
  background-color: ${hexToRgbA(white, 0.15)};
  &:hover,
  &:focus,
  &:active {
    background-color: ${hexToRgbA(white, 0.15)};
  }
`;

export const processingTextStyle = css`
  &:after {
    content: "...";
  }
`;

export const buttonBase = css`
  border-radius: ${borderRadiusSmall};
  cursor: pointer;
  outline: none;
  padding: 10px 18px;
`;

export const buttonContent = css`
  outline: none;
`;

export const fullWidthButton = css`
  text-align: center;
  width: 100%;
`;

export const focusStyles = (
  bgColor: string,
  borderColor: string = bgColor
) => css`
  outline: none;
  position: relative;

  &:focus {
    background-color: ${bgColor};

    &:after {
      border: 2px solid ${borderColor};
      border-radius: 6px;
      bottom: -3px;
      content: "";
      left: -3px;
      position: absolute;
      right: -3px;
      top: -3px;
    }
  }
`;

export const focusStyleByAppearance = (appearance, isInverse) => {
  switch (appearance) {
    case "primary":
      return focusStyles(purpleDarken1);
      break;
    case "secondary":
      return focusStyles("transparent", purpleDarken1);
      break;
    case "standard":
      return isInverse
        ? focusStyles(hexToRgbA(white, 0.4))
        : focusStyles(greyLightDarken1);
      break;
    case "success":
      return focusStyles(greenDarken1);
      break;
    case "danger":
      return focusStyles(redDarken1);
      break;
    default:
      return "";
  }
};

export const button = {
  primary: filledButton(purple, purpleDarken1, purpleDarken2),
  secondary: css`
    ${tintContent(purple)};
    &:hover {
      ${tintContent(purpleDarken1)};
    }
    &:active {
      ${tintContent(purpleDarken2)};
    }
  `,
  standard: filledButton(greyLight, greyLightDarken1, greyLightDarken2),
  success: filledButton(green, greenDarken1, greenDarken2),
  danger: filledButton(red, redDarken1, redDarken2)
};

export const buttonInverse = {
  secondary: css`
    ${tintContent(purpleLighten3)};
    &:hover {
      ${tintContent(purpleLighten2)};
    }
    &:active {
      ${tintContent(purpleLighten1)};
    }
  `,
  standard: filledButton(
    hexToRgbA(white, 0.3),
    hexToRgbA(white, 0.4),
    hexToRgbA(white, 0.45)
  )
};

export const getMutedButtonStyles = (appearance: ButtonAppearances) => {
  return appearance !== "secondary"
    ? css`
        ${mutedButton};
        ${mutedFilledButton};
      `
    : mutedButton;
};

export const getInverseMutedButtonStyles = (appearance: ButtonAppearances) => {
  return appearance !== "secondary"
    ? css`
        ${inverseMutedButton};
        ${inverseMutedFilledButton};
      `
    : inverseMutedButton;
};
