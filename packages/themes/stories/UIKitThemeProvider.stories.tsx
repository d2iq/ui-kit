// TODO fix theme provider stories before reintroducing it. https://jira.d2iq.com/browse/D2IQ-79209

import * as React from "react";
import { Story, Meta } from "@storybook/react";
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

const Template: Story = args => (
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

export const LightMode = Template.bind({});

// TODO fix theme story before reintroducing it. https://jira.d2iq.com/browse/D2IQ-79209
// export const DarkMode = Template.bind({});
// DarkMode.args = {
//   appTheme: {
//     colors: {
//       // brand
//       brandPrimary: purple,

//       // states
//       error: redLighten2,

//       // backgrounds
//       bgPrimary: greyDark,
//       bgPrimaryInverted: white,
//       bgDisabled: greyDarkLighten3,
//       bgHover: greyDarkLighten2,

//       // text
//       textColorPrimary: white,
//       textColorPrimaryInverted: greyDark,
//       textColorSecondary: greyLightLighten3,
//       textColorDisabled: greyLightLighten1,

//       // decorators
//       border: greyDarkLighten4,
//       borderHeavy: white
//     }
//   }
// };
