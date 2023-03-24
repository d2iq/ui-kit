import * as React from "react";
import { css } from "@emotion/css";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { themeTextColorInteractive } from "../../../design-tokens/build/js/designTokens";

const InteractiveText = ({
  align = "inherit",
  weight = "normal",
  size = "m",
  wrap = "wrap",
  tag = "p",
  ...props
}: BasicTextProps) => (
  <Text
    align={align}
    tag={tag}
    weight={weight}
    size={size}
    wrap={wrap}
    className={css`
      cursor: pointer;
    `}
    color={themeTextColorInteractive}
    data-cy="interactiveText"
    {...props}
  />
);

export default InteractiveText;
