import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { css } from "emotion";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

export interface MonospaceTextProps extends BasicTextProps {
  /**
   * The color of the text
   */
  color: React.CSSProperties["color"];
}

const MonospaceText = (props: MonospaceTextProps) => (
  <Text
    className={css`
      font-family: monospace;
    `}
    {...props}
  />
);

MonospaceText.defaultProps = {
  color: themeTextColorPrimary,
  tag: "code",
  size: "m",
  weight: "medium",
  align: "left",
  wrap: "wrap"
};

export default MonospaceText;