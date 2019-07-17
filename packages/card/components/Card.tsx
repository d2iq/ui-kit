import * as React from "react";
import { style } from "../style";
import { cx } from "emotion";
import { preserveAspectRatio, padding } from "../../shared/styles/styleUtils";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

export interface CardProps {
  /**
   * `[width, height]` Keeps the card's width and height at a specific proportion. e.g.: 2:1 would be [2, 1]
   */
  aspectRatio?: [number, number];
  /**
   * The padding between the border and the content. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  paddingSize?: SpaceSize;
  children?: React.ReactNode | string;
}

class Card extends React.PureComponent<CardProps, {}> {
  public static defaultProps: Partial<CardProps> = {
    paddingSize: "m"
  };

  public render() {
    const { children, aspectRatio, paddingSize } = this.props;
    const aspectRatioStyle = aspectRatio
      ? preserveAspectRatio(aspectRatio[0], aspectRatio[1])
      : null;

    return (
      <div className={cx(style, aspectRatioStyle)} data-cy="card">
        <div className={padding("all", paddingSize)}>{children}</div>
      </div>
    );
  }
}

export default Card;
