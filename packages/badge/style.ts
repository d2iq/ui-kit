import { css } from "@emotion/css";
import {
  borderRadiusDefault,
  greyLight,
  themeSuccess,
  themeWarning,
  themeError,
  themeBrandPrimary,
  themeBgPrimary,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted,
  themeBorder
} from "../design-tokens/build/js/designTokens";
import { getTextColor } from "../shared/styles/color";
import { getCSSVarValue } from "../shared/styles/styleUtils/typography/color";

const badgeAppearanceStyle = (color, isOutlined?: boolean) => {
  const bgColor = isOutlined ? getCSSVarValue(themeBgPrimary) : color;

  return css`
    background-color: ${bgColor};
    border-color: ${color};
    color: ${getTextColor(
      bgColor,
      getCSSVarValue(themeTextColorPrimary),
      getCSSVarValue(themeTextColorPrimaryInverted)
    )};
  `;
};

const badgeAppearance = appearance => {
  switch (appearance) {
    case "default":
      return badgeAppearanceStyle(greyLight);
    case "success":
      return badgeAppearanceStyle(getCSSVarValue(themeSuccess));
    case "primary":
      return badgeAppearanceStyle(getCSSVarValue(themeBrandPrimary));
    case "warning":
      return badgeAppearanceStyle(getCSSVarValue(themeWarning));
    case "danger":
      return badgeAppearanceStyle(getCSSVarValue(themeError));
    case "outline":
      return badgeAppearanceStyle(getCSSVarValue(themeBorder), true);
    case "outline-primary":
      return badgeAppearanceStyle(getCSSVarValue(themeBrandPrimary), true);
  }
};

export const badge = appearance => {
  return css`
    ${badgeAppearance(appearance)};
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    padding: 0 8px 0;
    font-size: 80%;
    line-height: 20px;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    border-radius: ${borderRadiusDefault};
    align-items: center;
    display: inline-flex;
    justify-content: center;
  `;
};
