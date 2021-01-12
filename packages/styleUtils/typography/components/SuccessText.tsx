import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { themeSuccess } from "../../../design-tokens/build/js/designTokens";

const SuccessText = (props: BasicTextProps) => (
  <Text color={themeSuccess} data-cy="successText" {...props} />
);

SuccessText.defaultProps = {
  align: "inherit",
  weight: "normal",
  size: "m",
  wrap: "wrap",
  tag: "p"
};

export default SuccessText;
