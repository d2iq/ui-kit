import * as React from "react";
import { style } from "../style";
import { cx } from "emotion";
import { preserveAspectRatio, padding } from "../../shared/styles/styleUtils";

export interface CardProps {
  /**
   * `[width, height]` Keeps the card's width and height at a specific proportion. e.g.: 2:1 would be [2, 1]
   */
  aspectRatio?: [number, number];
  children?: React.ReactNode | string;
}

class Card extends React.PureComponent<CardProps, {}> {
  public render() {
    const { children, aspectRatio } = this.props;
    const aspectRatioStyle = aspectRatio
      ? preserveAspectRatio(aspectRatio[0], aspectRatio[1])
      : null;

    return (
      <div className={cx(style, aspectRatioStyle)}>
        <div className={padding("all")}>{children}</div>
      </div>
    );
  }
}

export default Card;
