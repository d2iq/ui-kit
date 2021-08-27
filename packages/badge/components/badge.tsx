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
  children: React.ReactNode | string;
}

export const Badge = ({ appearance = "default", children }: BadgeProps) => {
  return (
    <span className={badge(appearance)} data-cy="badge">
      {children}
    </span>
  );
};
export default React.memo(Badge);
