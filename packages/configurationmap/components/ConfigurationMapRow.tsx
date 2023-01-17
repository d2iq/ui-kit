import * as React from "react";
import { cx } from "@emotion/css";
import { configurationMapRow, showActionOnHoverStyle } from "../style";
import { flex, padding, border } from "../../shared/styles/styleUtils";

interface ConfigurationMapRowProps {
  children: React.ReactNode;
  /**
   * If the style for the action is applied on hover
   */
  onlyShowActionOnHover?: boolean;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const ConfigurationMapRow = ({
  children,
  onlyShowActionOnHover,
  className,
  "data-cy": dataCy = "configurationMapRow"
}: ConfigurationMapRowProps) => (
  <div
    className={cx(
      { [showActionOnHoverStyle]: onlyShowActionOnHover },
      configurationMapRow,
      border("bottom"),
      flex(),
      padding("vert", "xs"),
      className
    )}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default ConfigurationMapRow;
