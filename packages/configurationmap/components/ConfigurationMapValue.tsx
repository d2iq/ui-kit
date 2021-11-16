import * as React from "react";
import { cx } from "@emotion/css";
import { flexItem, breakWord } from "../../shared/styles/styleUtils";
import { ddReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

interface ConfigurationMapValueProps {
  children: React.ReactNode;
  dataCy?: string;
}

const ConfigurationMapValue = ({
  children,
  dataCy
}: ConfigurationMapValueProps) => (
  <div
    className={cx(ddReset, flexItem("grow"), breakWord)}
    data-cy={dataCy ?? "configurationMapValue"}
  >
    {children}
  </div>
);

export default ConfigurationMapValue;
