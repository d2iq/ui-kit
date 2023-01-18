import * as React from "react";
import { cx } from "@emotion/css";
import { margin } from "../../shared/styles/styleUtils";
import { dlReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

interface ConfigurationMapSectionProps {
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

const ConfigurationMapSection = ({
  children,
  className,
  "data-cy": dataCy = "configurationMapSection"
}: ConfigurationMapSectionProps) => (
  <div
    className={cx(dlReset, margin("bottom", "l"), className)}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default ConfigurationMapSection;
