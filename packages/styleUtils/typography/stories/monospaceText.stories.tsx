import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { MonospaceText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";
import {
  themeTextColorDisabled,
  themeTextColorPrimary,
  themeTextColorSecondary,
  blue
} from "../../../design-tokens/build/js/designTokens";

import readme from "../README.md";

storiesOf("Typography|MonospaceText", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(withKnobs)
  .add("default", () => (
    <MonospaceText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </MonospaceText>
  ))
  .add("size", () => {
    const sizes = {
      s: "s",
      m: "m",
      l: "l",
      xl: "xl"
    };
    const size = select("size", sizes, "m");
    return (
      <MonospaceText size={size as FontSize}>
        Use the knobs to change the size
      </MonospaceText>
    );
  })
  .add("color", () => {
    const colors = {
      themeTextColorPrimary,
      themeTextColorSecondary,
      themeTextColorDisabled,
      blue
    };
    const color = select("color", colors, themeTextColorPrimary);

    return (
      <MonospaceText color={color}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </MonospaceText>
    );
  })
  .add("medium weight", () => (
    <MonospaceText weight="medium">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </MonospaceText>
  ));
