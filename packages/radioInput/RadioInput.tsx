import * as React from "react";
import ToggleInput, {
  ToggleInputProps
} from "../toggleInput/components/ToggleInput";

export interface RadioInputProps extends ToggleInputProps {
  /**
   * The name used to identify the radio input group
   */
  name: string;
}

const RadioInput: React.FC<React.PropsWithRef<RadioInputProps>> = props => (
  <ToggleInput inputType="radio" {...props} />
);

export default RadioInput;
