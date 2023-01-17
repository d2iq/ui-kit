import * as React from "react";
import { cx } from "@emotion/css";
import { container } from "../style";

export interface ContainerProps {
  children: React.ReactNode;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * Allows custom styling
   */
  className?: string;
}

const Container = ({
  children,
  "data-cy": dataCy = "container",
  className
}: ContainerProps) => (
  <div className={cx(container, className)} data-cy={dataCy}>
    {children}
  </div>
);

export default Container;
