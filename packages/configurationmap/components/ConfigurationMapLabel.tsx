import * as React from "react";
import { cx } from "@emotion/css";
import { breakWord, textWeight, padding } from "../../shared/styles/styleUtils";
import { configurationMapLabel } from "../style";

interface ConfigurationMapLabelProps {
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

const ConfigurationMapLabel = ({
  children,
  className,
  "data-cy": dataCy = "configurationMapLabel"
}: ConfigurationMapLabelProps) => (
  <div
    className={cx(
      configurationMapLabel,
      padding("right", "s"),
      textWeight("medium"),
      breakWord,
      className
    )}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default ConfigurationMapLabel;
