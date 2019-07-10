import * as React from "react";
import { css } from "emotion";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { themeTextColorInteractive } from "../../../design-tokens/build/js/designTokens";

const InteractiveText = (props: BasicTextProps) => (
  <Text
    className={css`
      cursor: pointer;
    `}
    color={themeTextColorInteractive}
    {...props}
  />
);

InteractiveText.defaultProps = {
  align: "inherit",
  weight: "normal",
  size: "m",
  wrap: "wrap",
  tag: "p"
};

export default InteractiveText;
