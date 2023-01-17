import * as React from "react";
import { cx } from "@emotion/css";
import { flexItem, breakWord } from "../../shared/styles/styleUtils";
import { ddReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

interface ConfigurationMapValueProps {
  children: React.ReactNode;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const ConfigurationMapValue = ({
  children,
  "data-cy": dataCy = "configurationMapValue"
}: ConfigurationMapValueProps) => (
  <div className={cx(ddReset, flexItem("grow"), breakWord)} data-cy={dataCy}>
    {children}
  </div>
);

export default ConfigurationMapValue;
