import * as React from "react";
import { css, cx } from "emotion";
import { BasicTextProps } from "../textTypes";
import {
  textWeight,
  textSize,
  tintContent,
  textTruncate
} from "../../../shared/styles/styleUtils";
import { FontWeights } from "../../../shared/styles/styleUtils/typography/weight";
import {
  fontWeightNormal,
  themeTextColorPrimary
} from "../../../design-tokens/build/js/designTokens";
import { textBase } from "../style";

export interface TextProps extends BasicTextProps {
  /**
   * The color of the text
   */
  color: React.CSSProperties["color"];
  className?: string;
}

const Text = (props: TextProps) => {
  const { align, children, tag, wrap, weight, color, size, className } = props;
  const TextTag = tag;

  return (
    <TextTag
      className={cx(
        className,
        textBase,
        textWeight(weight as FontWeights),
        textSize(size),
        tintContent(color),
        css`
          margin: 0;
          text-align: ${align};
        `,
        {
          [textTruncate]: wrap === "truncate",
          [css`
            white-space: nowrap;
          `]: wrap === "nowrap"
        }
      )}
    >
      {children}
    </TextTag>
  );
};

Text.defaultProps = {
  align: "inherit",
  tag: "p",
  wrap: "wrap",
  weight: fontWeightNormal,
  color: themeTextColorPrimary,
  size: "m"
};

export default Text;
