import * as React from "react";
import { badge } from "./style";

export interface IBadgeProps {
  appearance?: "default" | "success" | "primary" | "warning" | "danger" | "outline";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: JSX.Element | string;
}

export interface IOpts {
  appearance: IBadgeProps["appearance"];
  isEvent: boolean;
}
export class Badge extends React.PureComponent<IBadgeProps, {}> {
  public static defaultProps: Partial<IBadgeProps> = {
    appearance: "default"
  };

  public render() {
    const { appearance, onClick, children } = this.props;
    const isOnClickOn = !!onClick;
    const opts : IOpts = {
      appearance,
      isEvent: isOnClickOn
    };
    const props = {
      className: badge(opts),
      ...(isOnClickOn ? {
        "onClick": onClick
      } : {})
    };

    return <span {...props}>{children}</span>;
  }
}

export default Badge;
