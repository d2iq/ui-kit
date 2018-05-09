import React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import Clickable from "../components/clickable";
import { action } from "@storybook/addon-actions";

const readme = require("../README.md");

storiesOf("Clickable", module)
  .addDecorator(withReadme([readme]))
  .addWithInfo("default", () => (
    <Clickable action={action("action trigger")} tabIndex="0">
      <span>Click me!</span>
    </Clickable>
  ));
