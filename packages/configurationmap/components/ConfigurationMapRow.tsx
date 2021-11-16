import * as React from "react";
import { cx } from "@emotion/css";
import { configurationMapRow, showActionOnHoverStyle } from "../style";
import { flex, padding, border } from "../../shared/styles/styleUtils";

interface ConfigurationMapRowProps {
  children: React.ReactNode;
  onlyShowActionOnHover?: boolean;
  dataCy?: string;
}

const ConfigurationMapRow = (props: ConfigurationMapRowProps) => (
  <div
    className={cx(
      { [showActionOnHoverStyle]: props.onlyShowActionOnHover },
      configurationMapRow,
      border("bottom"),
      flex(),
      padding("vert", "xs")
    )}
    data-cy={props.dataCy ?? "configurationMapRow"}
  >
    {props.children}
  </div>
);

export default ConfigurationMapRow;
