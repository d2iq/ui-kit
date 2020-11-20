import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { BorderedList } from "../index";

import readme from "../README.md";

storiesOf("Data listing|BorderedList", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("default", () => (
    <BorderedList>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </BorderedList>
  ));
