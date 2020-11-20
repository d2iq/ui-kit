import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
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

import readme from "../README.md";

storiesOf("Utils|UIKitThemeProvider", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add("dark mode", () => (
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
    >
      <StyleTile />
    </UIKitThemeProvider>
  ));
