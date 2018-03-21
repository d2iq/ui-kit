import * as React from "react";
import { badge } from "./style";

export interface IBadgeProps {
  appearance?: string;
  children?: React.ReactNode | string;
}

export class Badge extends React.PureComponent<IBadgeProps, {}> {
  public static defaultProps: Partial<IBadgeProps> = {
    appearance: "default"
  };

  public render() {
    const { appearance, children } = this.props;

    return <span className={badge(appearance)}>{children}</span>;
  }
}

export default Badge;
