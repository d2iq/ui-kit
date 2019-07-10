import * as React from "react";
import Text from "./Text";
import { HeadingTextProps } from "../textTypes";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

const HeadingText1 = (props: HeadingTextProps) => (
  <Text weight="medium" size="xl" {...props} />
);

HeadingText1.defaultProps = {
  align: "inherit",
  color: themeTextColorPrimary,
  wrap: "wrap",
  tag: "h3"
};

export default HeadingText1;
