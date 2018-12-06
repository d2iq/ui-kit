import { css } from "emotion";
import {
  borderRadiusSmall,
  borderRadiusDefault,
  themeBrandPrimary,
  themeSuccess,
  themeError,
  themeTextColorInteractive,
  themeTextColorInteractiveInverted,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted,
  themeBgDisabled,
  themeBgDisabledInverted,
  themeTextColorDisabled,
  themeBgNeutral,
  themeBgNeutralInverted,
  themeBrandPrimaryInverted,
  themeSuccessInverted,
  themeErrorInverted,
  themeTextColorDisabledInverted
} from "../design-tokens/build/js/designTokens";
import { darken, pickReadableTextColor } from "../shared/styles/color";
import { ButtonAppearances } from "./components/ButtonBase";
import { tintContent } from "../shared/styles/styleUtils";
import getCSSVarValue from "../utilities/components/getCSSVarValue";

const buttonPadding = {
  vert: "10px",
  horiz: "18px"
};

const getHoverColor = color => darken(color, 1);
const getActiveColor = color => darken(color, 2);

export const filledButton = (
  baseColor: string,
  hoverColor: string,
  activeColor: string,
  isInverse?: boolean
) => {
  const contentColor = isInverse
    ? themeTextColorPrimaryInverted
    : pickReadableTextColor(
        baseColor,
        getCSSVarValue(themeTextColorPrimary),
        getCSSVarValue(themeTextColorPrimaryInverted)
      );

  return css`
    ${tintContent(contentColor)};
    background-color: ${baseColor};
    border-radius: ${borderRadiusSmall};
    padding: ${buttonPadding.vert} ${buttonPadding.horiz};

    &:hover {
      background-color: ${hoverColor};
    }

    &:active {
      background-color: ${activeColor};
    }
  `;
};

const mutedButton = css`
  ${tintContent(themeTextColorDisabled)};
  cursor: default;
  pointer-events: none;

  &:hover,
  &:focus,
  &:active {
    ${tintContent(themeTextColorDisabled)};
  }
`;

const inverseMutedButton = css`
  ${tintContent(themeTextColorDisabledInverted)};
  cursor: default;

  &:hover,
  &:focus,
  &:active {
    ${tintContent(themeTextColorDisabledInverted)};
  }
`;

const mutedFilledButton = css`
  background-color: ${themeBgDisabled};
  &:hover,
  &:focus,
  &:active {
    background-color: ${themeBgDisabled};
  }
`;

const inverseMutedFilledButton = css`
  background-color: ${themeBgDisabledInverted};
  &:hover,
  &:focus,
  &:active {
    background-color: ${themeBgDisabledInverted};
  }
`;

export const processingTextStyle = css`
  &:after {
    content: "...";
  }
`;

export const buttonBase = css`
  cursor: pointer;
  outline: none;
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
      border-radius: ${borderRadiusDefault};
      bottom: -3px;
      content: "";
      left: -3px;
      position: absolute;
      right: -3px;
      top: -3px;
    }
  }
`;

export const focusStyleByAppearance = (
  appearance: ButtonAppearances,
  isInverse?: boolean
) => {
  switch (appearance) {
    case ButtonAppearances.Primary:
      return isInverse
        ? focusStyles(getHoverColor(getCSSVarValue(themeBrandPrimaryInverted)))
        : focusStyles(getHoverColor(getCSSVarValue(themeBrandPrimary)));
    case ButtonAppearances.Secondary:
      return css`
        ${isInverse
          ? focusStyles(
              "transparent",
              getHoverColor(getCSSVarValue(themeTextColorInteractiveInverted))
            )
          : focusStyles(
              "transparent",
              getHoverColor(getCSSVarValue(themeTextColorInteractive))
            )};
        &:focus {
          &:after {
            border-radius: 0;
            border-left-width: 0;
            border-right-width: 0;
            border-top-width: 0;
          }
        }
      `;
    case ButtonAppearances.Standard:
      return isInverse
        ? focusStyles(getHoverColor(getCSSVarValue(themeBgNeutralInverted)))
        : focusStyles(getHoverColor(getCSSVarValue(themeBgNeutral)));
    case ButtonAppearances.Success:
      return isInverse
        ? focusStyles(getHoverColor(getCSSVarValue(themeSuccessInverted)))
        : focusStyles(getHoverColor(getCSSVarValue(themeSuccess)));
    case ButtonAppearances.Danger:
      return isInverse
        ? focusStyles(getHoverColor(getCSSVarValue(themeErrorInverted)))
        : focusStyles(getHoverColor(getCSSVarValue(themeError)));
    default:
      return "";
  }
};

export const button = appearance => {
  switch (appearance) {
    case "primary":
      return filledButton(
        getCSSVarValue(themeBrandPrimary),
        getHoverColor(getCSSVarValue(themeBrandPrimary)),
        getActiveColor(getCSSVarValue(themeBrandPrimary))
      );
    case "secondary":
      return css`
        ${tintContent(themeTextColorInteractive)};
        &:hover {
          ${tintContent(
            getHoverColor(getCSSVarValue(themeTextColorInteractive))
          )};
        }
        &:active {
          ${tintContent(
            getActiveColor(getCSSVarValue(themeTextColorInteractive))
          )};
        }
      `;
    case "standard":
      return filledButton(
        getCSSVarValue(themeBgNeutral),
        getHoverColor(getCSSVarValue(themeBgNeutral)),
        getActiveColor(getCSSVarValue(themeBgNeutral))
      );
    case "success":
      return filledButton(
        getCSSVarValue(themeSuccess),
        getHoverColor(getCSSVarValue(themeSuccess)),
        getActiveColor(getCSSVarValue(themeSuccess))
      );
    case "danger":
      return filledButton(
        getCSSVarValue(themeError),
        getHoverColor(getCSSVarValue(themeError)),
        getActiveColor(getCSSVarValue(themeError))
      );
    default:
      return "";
  }
};

export const getButtonInverseStyles = (appearance: ButtonAppearances) => {
  switch (appearance) {
    case ButtonAppearances.Primary:
      return css`
        ${filledButton(
          getCSSVarValue(themeBrandPrimaryInverted),
          getHoverColor(getCSSVarValue(themeBrandPrimaryInverted)),
          getActiveColor(getCSSVarValue(themeBrandPrimaryInverted))
        )};
      `;
    case ButtonAppearances.Secondary:
      return css`
        ${tintContent(themeTextColorInteractiveInverted)};
        &:hover {
          ${tintContent(
            getHoverColor(getCSSVarValue(themeTextColorInteractiveInverted))
          )};
        }
        &:active {
          ${tintContent(
            getActiveColor(getCSSVarValue(themeTextColorInteractiveInverted))
          )};
        }
      `;
    case ButtonAppearances.Standard:
      return css`
        ${filledButton(
          getCSSVarValue(themeBgNeutralInverted),
          getHoverColor(getCSSVarValue(themeBgNeutralInverted)),
          getActiveColor(getCSSVarValue(themeBgNeutralInverted))
        )};
      `;
    case ButtonAppearances.Success:
      return css`
        ${filledButton(
          getCSSVarValue(themeSuccessInverted),
          getHoverColor(getCSSVarValue(themeSuccessInverted)),
          getActiveColor(getCSSVarValue(themeSuccessInverted))
        )};
      `;
    case ButtonAppearances.Danger:
      return css`
        ${filledButton(
          getCSSVarValue(themeErrorInverted),
          getHoverColor(getCSSVarValue(themeErrorInverted)),
          getActiveColor(getCSSVarValue(themeErrorInverted))
        )};
      `;
    default:
      return "";
  }
};

export const getMutedButtonStyles = (appearance: ButtonAppearances) => {
  return appearance !== ButtonAppearances.Secondary
    ? css`
        ${mutedButton};
        ${mutedFilledButton};
      `
    : mutedButton;
};

export const getInverseMutedButtonStyles = (appearance: ButtonAppearances) => {
  return appearance !== ButtonAppearances.Secondary
    ? css`
        ${inverseMutedButton};
        ${inverseMutedFilledButton};
      `
    : inverseMutedButton;
};
