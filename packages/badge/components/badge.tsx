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
  appearance?: BadgeAppearance;
  children: React.ReactNode | string;
  /**
   * Allows custom styling
   */
  className?: string;
}

export const Badge = ({
  appearance = "default",
  children,
  className
}: BadgeProps) => {
  return (
    <span className={cx(badge(appearance), className)} data-cy="badge">
      {children}
    </span>
  );
};
export default React.memo(Badge);
