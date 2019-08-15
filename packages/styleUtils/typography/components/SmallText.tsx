import * as React from "react";
import Text from "./Text";
import { SharedTextProps } from "../textTypes";
import { FontWeights } from "../../../shared/styles/styleUtils/typography/weight";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

export interface SmallTextProps extends SharedTextProps {
  /**
   * The color of the text
   */
  color: React.CSSProperties["color"];
  /**
   * Which HTML tag to render the text in
   */
  tag: keyof React.ReactHTML;
  /**
   * The font weight of the text
   */
  weight: FontWeights;
  /**
   * human-readable selector used for writing tests
   */
  dataCy?: string;
}

const SmallText = (props: SmallTextProps) => <Text size="s" {...props} />;

SmallText.defaultProps = {
  align: "inherit",
  color: themeTextColorPrimary,
  wrap: "wrap",
  weight: "normal",
  tag: "p",
  dataCy: "smallText"
};

export default SmallText;
