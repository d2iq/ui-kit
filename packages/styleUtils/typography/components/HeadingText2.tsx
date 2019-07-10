import * as React from "react";
import { heading2 } from "../style";
import Text from "./Text";
import { HeadingTextProps } from "../textTypes";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

const HeadingText2 = (props: HeadingTextProps) => (
  <Text weight="medium" size="l" className={heading2} {...props} />
);

HeadingText2.defaultProps = {
  align: "inherit",
  color: themeTextColorPrimary,
  wrap: "wrap",
  tag: "h2"
};

export default HeadingText2;
