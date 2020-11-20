import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SmallText } from "../";
import {
  themeTextColorDisabled,
  themeTextColorPrimary,
  themeTextColorSecondary,
  blue
} from "../../../design-tokens/build/js/designTokens";

import readme from "../README.md";

storiesOf("Typography|SmallText", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(withKnobs)
  .add("default", () => (
    <SmallText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </SmallText>
  ))
  .add("color", () => {
    const colors = {
      themeTextColorPrimary,
      themeTextColorSecondary,
      themeTextColorDisabled,
      blue
    };
    const color = select("color", colors, themeTextColorPrimary);

    return (
      <SmallText color={color}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </SmallText>
    );
  })
  .add("medium weight", () => (
    <SmallText weight="medium">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </SmallText>
  ));
