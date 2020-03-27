import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { Breadcrumb } from "../index";

const readme = require("../README.md");

storiesOf("Navigation|Breadcrumb", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <Breadcrumb>
      <span>One</span>
      <span>
        T<em>wo</em>
      </span>
    </Breadcrumb>
  ))
  .add("at top-level", () => (
    <Breadcrumb>
      <span>One</span>
    </Breadcrumb>
  ));
