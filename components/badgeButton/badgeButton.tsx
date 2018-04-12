import * as React from "react";
import { badgeButton } from "./style";

export interface IBadgeButtonProps {
  appearance?: "default" | "success" | "primary" | "warning" | "danger" | "outline";
  children: JSX.Element | string;
}

export class BadgeButton extends React.PureComponent<IBadgeButtonProps, {}> {
  public static defaultProps: Partial<IBadgeButtonProps> = {
    appearance: "default"
  };

  public render() {
    const { appearance, children } = this.props;

    return <span className={badgeButton(appearance)}>{children}</span>;
  }
}

export default BadgeButton;
