import * as React from "react";
import ConfigurationMapValue from "./ConfigurationMapValue";

interface ConfigurationMapValueWithDefaultProps {
  /**
   * The value to display
   */
  value?: React.ReactNode;
}
const ConfigurationMapValueWithDefault = (
  props: ConfigurationMapValueWithDefaultProps
) => {
  const { value } = props;

  return <ConfigurationMapValue>{value || "—"}</ConfigurationMapValue>;
};

export default ConfigurationMapValueWithDefault;
