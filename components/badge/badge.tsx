import * as React from "react";
import { badge } from "./style";

export interface IBadgeProps {
  theme?: string;
  children: JSX.Element | string;
}

export class Badge extends React.PureComponent<IBadgeProps, {}> {
  public static defaultProps: Partial<IBadgeProps> = {
    theme: "default"
  };

  public render() {
    const { theme, children } = this.props;

    return <span className={badge(theme)}>{children}</span>;
  }
}

export default Badge;
