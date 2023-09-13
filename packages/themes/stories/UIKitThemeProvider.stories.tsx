import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import UIKitThemeProvider from "../components/UIKitThemeProvider";

import StyleTile from "./helpers/StyleTile";
import {
  themeBgDisabled,
  themeBgHover,
  themeBgPrimary,
  themeBgPrimaryInverted,
  themeBorder,
  themeBorderHeavy,
  themeBrandPrimary,
  themeError,
  themeTextColorDisabled,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted,
  themeTextColorSecondary
} from "../../design-tokens/build/js/designTokens";

export default {
  title: "Utils/UIKitThemeProvider",
  component: UIKitThemeProvider,
  parameters: { controls: { disable: true } }
};

const Template: StoryFn = args => (
  <UIKitThemeProvider
    appTheme={{
      menuHasIcon: false,
      coloredRows: [],
      mutedRows: [],
      colors: {
        // brand
        brandPrimary: themeBrandPrimary,

        // states
        error: themeError,

        // backgrounds
        bgPrimary: themeBgPrimary,
        bgPrimaryInverted: themeBgPrimaryInverted,
        bgDisabled: themeBgDisabled,
        bgHover: themeBgHover,

        // text
        textColorPrimary: themeTextColorPrimary,
        textColorPrimaryInverted: themeTextColorPrimaryInverted,
        textColorSecondary: themeTextColorSecondary,
        textColorDisabled: themeTextColorDisabled,

        // decorators
        border: themeBorder,
        borderHeavy: themeBorderHeavy
      }
    }}
    {...args}
  >
    <StyleTile />
  </UIKitThemeProvider>
);

export const LightMode = {
  render: Template
};
