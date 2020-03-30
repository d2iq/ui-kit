import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SuccessText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

const readme = require("../README.md");

storiesOf("Typography|SuccessText", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <SuccessText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </SuccessText>
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
      <SuccessText size={size as FontSize}>
        Use the knobs to change the size
      </SuccessText>
    );
  })
  .add("medium weight", () => (
    <SuccessText weight="medium">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </SuccessText>
  ));
