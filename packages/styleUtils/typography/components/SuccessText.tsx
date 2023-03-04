import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { themeSuccess } from "../../../design-tokens/build/js/designTokens";

const SuccessText = ({
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
    color={themeSuccess}
    data-cy="successText"
    {...props}
  />
);

export default SuccessText;
