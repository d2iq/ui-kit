import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ToggleContent } from "ui-kit-core/index";

const readme = require("../README.md");

const primary = () => <div>primary component</div>;
const secondary = () => <div>secondary component</div>;

storiesOf("Toggle", module)
  .addDecorator(withReadme([readme]))
  .addWithInfo("string", () => (
    <ToggleContent contentOn="Hello" contentOff="Bye" />
  ))
  .addWithInfo("component", () => (
    <ToggleContent contentOn={primary()} contentOff={secondary()} />
  ));
