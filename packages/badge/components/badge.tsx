import * as React from "react";
import { badge } from "../style";

export type BadgeAppearance =
  | "default"
  | "success"
  | "primary"
  | "warning"
  | "danger"
  | "outline";

export interface BadgeProps {
  appearance?: BadgeAppearance;
  children: React.ReactNode;
}

export class Badge extends React.PureComponent<BadgeProps, {}> {
  public static defaultProps: Partial<BadgeProps> = {
    appearance: "default"
  };

  public render() {
    const { appearance, children } = this.props;

    return (
      <span className={badge(appearance)} data-cy="badge">
        {children}
      </span>
    );
  }
}

export default Badge;
