import * as React from "react";
import { style } from "../style";

export interface CardProps {
  children?: React.ReactNode | string;
}

class Card extends React.PureComponent<CardProps, {}> {
  public render() {
    const { children } = this.props;

    return <div className={style}>{children}</div>;
  }
}

export default Card;
