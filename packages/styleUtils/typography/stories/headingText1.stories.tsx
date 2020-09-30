import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText1 } from "../index";

const readme = require("../README.md");

storiesOf("Typography|HeadingText1", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => <HeadingText1>Primary Heading</HeadingText1>)
  .add("custom HTML tag", () => (
    <HeadingText1 tag="h2">{`Using a <h2> tag`}</HeadingText1>
  ));
