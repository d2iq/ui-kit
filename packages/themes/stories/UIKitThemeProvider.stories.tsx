import * as React from "react";
import { Story, Meta } from "@storybook/react";
import UIKitThemeProvider from "../components/UIKitThemeProvider";

import StyleTile from "./helpers/StyleTile";
import {
  greyDark,
  greyDarkLighten2,
  greyDarkLighten3,
  greyDarkLighten4,
  greyLightLighten1,
  greyLightLighten3,
  redLighten2,
  white,
  purple
} from "../../design-tokens/build/js/designTokens";

export default {
  title: "Utils/UIKitThemeProvider",
  component: UIKitThemeProvider,
  parameters: { controls: { disable: true } }
};

const Template: Story = args => (
  <UIKitThemeProvider
    appTheme={{
      colors: {
        // brand
        brandPrimary: purple,

        // states
        error: redLighten2,

        // backgrounds
        bgPrimary: greyDark,
        bgPrimaryInverted: white,
        bgDisabled: greyDarkLighten3,
        bgHover: greyDarkLighten2,

        // text
        textColorPrimary: white,
        textColorPrimaryInverted: greyDark,
        textColorSecondary: greyLightLighten3,
        textColorDisabled: greyLightLighten1,

        // decorators
        border: greyDarkLighten4,
        borderHeavy: white
      }
    }}
    {...args}
  >
    <StyleTile />
  </UIKitThemeProvider>
);

export const DarkMode = Template.bind({});
