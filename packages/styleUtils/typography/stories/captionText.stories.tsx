import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { CaptionText } from "../index";

const readme = require("../README.md");

storiesOf("Style utilities/Typography/CaptionText", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <CaptionText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </CaptionText>
  ));
