import React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import Clickable from "../components/clickable";
import { action } from "@storybook/addon-actions";

const readme = require("../README.md");

storiesOf("Utils|Clickable", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <Clickable action={action("action trigger")} tabIndex="0">
      <span>Click me!</span>
    </Clickable>
  ));
