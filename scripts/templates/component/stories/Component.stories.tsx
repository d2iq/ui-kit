import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import ${Component} from "../${Component}";

const ComponentReadme = require("../README.md");

storiesOf("${Component}", module)
  .addDecorator(withReadme([ComponentReadme]))
  .addWithInfo("default", () => <${Component}>default</${Component}>)
