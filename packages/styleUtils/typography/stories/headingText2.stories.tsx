import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText2 } from "../index";

const readme = require("../README.md");

storiesOf("Typography|HeadingText2", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => <HeadingText2>Secondary Heading</HeadingText2>)
  .add("custom HTML tag", () => (
    <HeadingText2 tag="h3">{`Using a <h3> tag`}</HeadingText2>
  ));
