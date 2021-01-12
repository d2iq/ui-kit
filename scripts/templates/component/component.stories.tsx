import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ${Component} } from "../index";

import readme from "../README.md";

storiesOf("${Component}", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("default", () => <${Component}>default</${Component}>)
