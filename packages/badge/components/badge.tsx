import * as React from "react";
import { cx } from "@emotion/css";
import { badge } from "../style";

export type BadgeAppearance =
  | "default"
  | "success"
  | "primary"
  | "warning"
  | "danger"
  | "outline";

export interface BadgeProps {
  /**
   * Sets the style of the badge
   */
  appearance?: BadgeAppearance;
  children: React.ReactNode | string;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

export const Badge = ({
  appearance = "default",
  children,
  className,
  "data-cy": dataCy = "badge"
}: BadgeProps) => {
  return (
    <span className={cx(badge(appearance), className)} data-cy={dataCy}>
      {children}
    </span>
  );
};
export default React.memo(Badge);
