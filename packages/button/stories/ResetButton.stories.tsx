import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ResetButton } from "../../";
import { Text } from "../../styleUtils/typography";

import readme from "../README.md";

storiesOf("Actions|ResetButton", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("default", () => (
    <div>
      The{" "}
      <Text tag="span" color="red">
        <ResetButton>red text</ResetButton>
      </Text>{" "}
      is a button, but it is not styled like one
    </div>
  ));
