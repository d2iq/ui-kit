import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ToggleContent } from "../../index";

const readme = require("../README.md");

const primary = () => <div>primary component</div>;
const secondary = () => <div>secondary component</div>;

storiesOf("Utils|Toggle", module)
  .addDecorator(withReadme([readme]))
  .add("string", () => <ToggleContent contentOn="Hello" contentOff="Bye" />)
  .add("component", () => (
    <ToggleContent contentOn={primary()} contentOff={secondary()} />
  ));
