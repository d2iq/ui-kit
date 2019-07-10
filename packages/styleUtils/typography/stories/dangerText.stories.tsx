import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { DangerText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

const readme = require("../README.md");

storiesOf("Style utilities/Typography/DangerText", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <DangerText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </DangerText>
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
      <DangerText size={size as FontSize}>
        Use the knobs to change the size
      </DangerText>
    );
  })
  .add("medium weight", () => (
    <DangerText weight="medium">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </DangerText>
  ));
