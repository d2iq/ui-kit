import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ResetButton } from "../../";
import { Text } from "../../styleUtils/typography";

const readme = require("../README.md");

storiesOf("Buttons", module)
  .addDecorator(withReadme([readme]))
  .add("ResetButton", () => (
    <div>
      The{" "}
      <Text tag="span" color="red">
        <ResetButton>red text</ResetButton>
      </Text>{" "}
      is a button, but it is not styled like one
    </div>
  ));
