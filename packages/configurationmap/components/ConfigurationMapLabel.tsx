import * as React from "react";
import { cx } from "@emotion/css";
import { breakWord, textWeight, padding } from "../../shared/styles/styleUtils";
import { configurationMapLabel } from "../style";

interface ConfigurationMapLabelProps {
  children: React.ReactNode;
  dataCy?: string;
}

const ConfigurationMapLabel = ({
  children,
  dataCy
}: ConfigurationMapLabelProps) => (
  <div
    className={cx(
      configurationMapLabel,
      padding("right", "s"),
      textWeight("medium"),
      breakWord
    )}
    data-cy={dataCy ?? "configurationMapLabel"}
  >
    {children}
  </div>
);

export default ConfigurationMapLabel;
