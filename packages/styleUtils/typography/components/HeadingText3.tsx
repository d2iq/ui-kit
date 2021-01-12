import * as React from "react";
import Text from "./Text";
import { HeadingTextProps } from "../textTypes";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

const HeadingText3 = (props: HeadingTextProps) => (
  <Text weight="medium" size="m" data-cy="headingText3" {...props} />
);

HeadingText3.defaultProps = {
  align: "inherit",
  color: themeTextColorPrimary,
  wrap: "wrap",
  tag: "h3"
};

export default HeadingText3;
