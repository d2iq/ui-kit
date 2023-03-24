import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { themeError } from "../../../design-tokens/build/js/designTokens";

const DangerText = ({
  align = "inherit",
  weight = "normal",
  size = "m",
  wrap = "wrap",
  tag = "p",
  ...props
}: BasicTextProps) => (
  <Text
    align={align}
    weight={weight}
    size={size}
    wrap={wrap}
    tag={tag}
    color={themeError}
    data-cy="dangerText"
    {...props}
  />
);

export default DangerText;
