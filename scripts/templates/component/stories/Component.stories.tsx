import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ${Component} } from "../index";

const readme = require("../README.md");

storiesOf("${Component}", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <${Component}>default</${Component}>)
