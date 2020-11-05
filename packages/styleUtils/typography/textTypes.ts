import { FontWeights } from "../../shared/styles/styleUtils/typography/weight";
import { FontSize } from "../../shared/styles/styleUtils/typography/textSize";

export interface SharedTextProps {
  /**
   * How the text should be aligned
   */
  align?: React.CSSProperties["textAlign"];
  /**
   * How the text should wrap in it's container
   */
  wrap?: "truncate" | "nowrap" | "wrap";
  /**
   * Which HTML tag to render the text in
   */
  tag?: keyof React.ReactHTML;
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
  children: React.ReactNode;
}

export interface BasicTextProps extends SharedTextProps {
  /**
   * The font weight of the text
   */
  weight: FontWeights;
  /**
   * The size of the text.  Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  size: FontSize;
}

export interface HeadingTextProps extends SharedTextProps {
  /**
   * The color of the text
   */
  color: React.CSSProperties["color"];
}
