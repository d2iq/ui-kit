import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { WarningText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

const readme = require("../README.md");

storiesOf("Style utilities/Typography/WarningText", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <WarningText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </WarningText>
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
      <WarningText size={size as FontSize}>
        Use the knobs to change the size
      </WarningText>
    );
  })
  .add("medium weight", () => (
    <WarningText weight="medium">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </WarningText>
  ));
