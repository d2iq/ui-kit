import { css, cx } from "@emotion/css";
import * as React from "react";
import Clickable from "../../clickable/components/clickable";
import { badge as badgeButton } from "../style";

export interface BadgeButtonProps {
  appearance?:
    | "default"
    | "success"
    | "primary"
    | "warning"
    | "danger"
    | "outline";
  /**
   * Allows custom styling
   */
  className?: string;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * Tab index indicates if an element can be focused for more information see
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * browser default value for this is -1
   */
  tabIndex?: number;
  children: React.ReactNode[] | React.ReactNode;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const BadgeButton = ({
  appearance = "default",
  children,
  className,
  onClick,
  tabIndex = -1,
  "data-cy": dataCy = "badgeButton"
}: BadgeButtonProps) => {
  const defaultClassName = css`
    outline: none;
    cursor: pointer;
    ${badgeButton(appearance)};
  `;

  return (
    <Clickable action={onClick} tabIndex={tabIndex} data-cy={dataCy}>
      <span className={cx(defaultClassName, className)}>{children}</span>
    </Clickable>
  );
};

export default React.memo(BadgeButton);
