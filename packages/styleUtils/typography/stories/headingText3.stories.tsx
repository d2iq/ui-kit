import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText3 } from "../index";

const readme = require("../README.md");

storiesOf("Typography|HeadingText3", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => <HeadingText3>Tertiary Heading</HeadingText3>)
  .add("custom HTML tag", () => (
    <HeadingText3 tag="h4">{`Using a <h4> tag`}</HeadingText3>
  ));
