import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { css } from "@emotion/css";
import {
  themeTextColorPrimary,
  fontFamilyMonospace
} from "../../../design-tokens/build/js/designTokens";

export interface MonospaceTextProps extends BasicTextProps {
  /**
   * The color of the text
   */
  color?: React.CSSProperties["color"];
}

const MonospaceText = ({
  color = themeTextColorPrimary,
  tag = "code",
  size = "m",
  weight = "medium",
  align = "inherit",
  wrap = "wrap",
  ...props
}: MonospaceTextProps) => (
  <Text
    color={color}
    tag={tag}
    weight={weight}
    size={size}
    align={align}
    wrap={wrap}
    className={css`
      font-family: ${fontFamilyMonospace};
    `}
    data-cy="monospaceText"
    {...props}
  />
);

export default MonospaceText;
