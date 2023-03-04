import * as React from "react";
import Text from "./Text";
import { HeadingTextProps } from "../textTypes";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

const HeadingText1 = ({
  align = "inherit",
  color = themeTextColorPrimary,
  wrap = "wrap",
  tag = "h3",
  ...props
}: HeadingTextProps) => (
  <Text
    weight="medium"
    size="xl"
    data-cy="headingText1"
    align={align}
    color={color}
    wrap={wrap}
    tag={tag}
    {...props}
  />
);

export default HeadingText1;
