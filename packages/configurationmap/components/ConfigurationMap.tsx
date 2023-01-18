import * as React from "react";

interface ConfigurationMapProps {
  children?: React.ReactNode | React.ReactNode[];
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

export default ({
  children,
  className,
  "data-cy": dataCy = "configurationMap"
}: ConfigurationMapProps) => (
  <div data-cy={dataCy} className={className}>
    {children}
  </div>
);
