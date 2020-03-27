import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { BorderedList } from "../index";

const readme = require("../README.md");

storiesOf("Data listing|BorderedList", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <BorderedList>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </BorderedList>
  ));
