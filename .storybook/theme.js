import { create } from "@storybook/theming/create";
import logo from "./static/logo.png";
import { getCSSVarValue } from "../packages/shared/styles/styleUtils/typography/color";
import {
  borderRadiusDefault,
  fontFamilyMonospace,
  fontFamilySansSerif,
  themeBgPrimary,
  themeBorder,
  themeBrandPrimary,
  themeBgSecondary,
  themeTextColorDisabled,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted
} from "../packages/design-tokens/build/js/designTokens";

export default create({
  base: "light",

  // Brand
  brandTitle: "D2iQ UI Kit",
  brandUrl: "./",
  brandImage: logo,
  brandTarget: "_self",

  // Typography
  fontBase: fontFamilySansSerif,
  fontCode: fontFamilyMonospace,

  // Main Colors
  colorPrimary: getCSSVarValue(themeBrandPrimary),
  colorSecondary: getCSSVarValue(themeBrandPrimary),

  // Text Colors
  textColor: getCSSVarValue(themeTextColorPrimary),
  textInverseColor: getCSSVarValue(themeTextColorPrimaryInverted),
  textMutedColor: getCSSVarValue(themeTextColorDisabled),

  // App Styles
  appBg: getCSSVarValue(themeBgPrimary),
  appContentBg: getCSSVarValue(themeBgSecondary),
  appBorderColor: getCSSVarValue(themeBorder),
  appBorderRadius: borderRadiusDefault,

  // Toolbar Colors
  barTextColor: getCSSVarValue(themeTextColorPrimary),
  barSelectedColor: getCSSVarValue(themeBrandPrimary),
  barBg: getCSSVarValue(themeBgPrimary),

  // Form Styles
  inputBg: getCSSVarValue(themeBgPrimary),
  inputBorder: getCSSVarValue(themeBorder),
  inputTextColor: getCSSVarValue(themeTextColorPrimary),
  inputBorderRadius: borderRadiusDefault
});
