import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { InteractiveText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

import readme from "../README.md";

storiesOf("Typography|InteractiveText", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(withKnobs)
  .add("default", () => <InteractiveText>Click me</InteractiveText>)
  .add("size", () => {
    const sizes = {
      s: "s",
      m: "m",
      l: "l",
      xl: "xl"
    };
    const size = select("size", sizes, "m");
    return (
      <InteractiveText size={size as FontSize}>
        Use the knobs to change the size
      </InteractiveText>
    );
  })
  .add("medium weight", () => (
    <InteractiveText weight="medium">Click me</InteractiveText>
  ));
