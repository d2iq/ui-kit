import * as React from "react";
import { css, cx } from "emotion";
import { BasicTextProps } from "../textTypes";
import {
  textWeight,
  textSize,
  tintContent,
  textTruncate
} from "../../../shared/styles/styleUtils";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";
import { textBase } from "../style";

export interface TextProps extends BasicTextProps {
  /**
   * The color of the text
   */
  color?: React.CSSProperties["color"];
  /**
   * human-readable selector used for writing tests
   */
  dataCy?: string;
  className?: string;
}

const defaultTag = "p";

const Text = (props: TextProps) => {
  const {
    align,
    children,
    tag,
    wrap,
    weight,
    color,
    size,
    className,
    dataCy
  } = props;
  const TextTag = tag || defaultTag;

  return (
    <TextTag
      className={cx(
        className,
        textBase,
        textWeight(weight),
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
      data-cy={dataCy}
    >
      {children}
    </TextTag>
  );
};

Text.defaultProps = {
  align: "inherit",
  tag: defaultTag,
  wrap: "wrap",
  weight: "normal",
  color: themeTextColorPrimary,
  size: "m",
  dataCy: "text"
};

export default Text;
