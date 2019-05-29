import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { Card } from "../index";

const readme = require("../README.md");

storiesOf("Card", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <Card>default</Card>);
