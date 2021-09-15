import * as React from "react";
import { ResetButton } from "../../";
import { Text } from "../../styleUtils/typography";

export default {
  title: "Actions/ResetButton",
  component: ResetButton
};

export const Default = () => (
  <div>
    The{" "}
    <Text tag="span" color="red">
      <ResetButton>red text</ResetButton>
    </Text>{" "}
    is a button, but it is not styled like one
  </div>
);
