import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { themeError } from "../../../design-tokens/build/js/designTokens";

const DangerText = (props: BasicTextProps) => (
  <Text color={themeError} {...props} />
);

DangerText.defaultProps = {
  align: "inherit",
  weight: "normal",
  size: "m",
  wrap: "wrap",
  tag: "p"
};

export default DangerText;
