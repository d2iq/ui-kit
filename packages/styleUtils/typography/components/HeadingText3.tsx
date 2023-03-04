import * as React from "react";
import Text from "./Text";
import { HeadingTextProps } from "../textTypes";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

const HeadingText3 = ({
  align = "inherit",
  color = themeTextColorPrimary,
  wrap = "wrap",
  tag = "h3",
  ...props
}: HeadingTextProps) => (
  <Text
    weight="medium"
    size="m"
    data-cy="headingText3"
    align={align}
    color={color}
    wrap={wrap}
    tag={tag}
    {...props}
  />
);

export default HeadingText3;
