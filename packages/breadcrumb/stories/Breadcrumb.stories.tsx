import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { Breadcrumb } from "../index";

import readme from "../README.md";

storiesOf("Navigation|Breadcrumb", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
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
