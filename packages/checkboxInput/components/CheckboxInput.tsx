import * as React from "react";
import { cx } from "@emotion/css";
import { checkboxIconContainer } from "../style";
import { ToggleInput } from "../../toggleInput";
import { Icon } from "../../icon";
import { display } from "../../shared/styles/styleUtils";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { themeBgPrimary } from "../../design-tokens/build/js/designTokens";
import { ToggleInputProps } from "../../toggleInput/components/ToggleInput";

export interface CheckboxInputProps extends ToggleInputProps {
  /**
   * Whether the checkbox is indeterminate or not. Use an indeterminate checkbox to indicate that there are both selected and unselected checkboxes nested under the indeterminate checkbox.
   */
  indeterminate?: boolean;
}

const CheckboxInput = ({
  checked,
  indeterminate,
  ref,
  ...other
}: React.PropsWithRef<CheckboxInputProps>) => {
  const isIndeterminate = indeterminate && !checked;

  return (
    <ToggleInput
      isIndeterminate={isIndeterminate}
      inputType="checkbox"
      checked={checked}
      ref={ref}
      {...other}
    >
      {(checked || isIndeterminate) && (
        <span className={cx(checkboxIconContainer, display("inline-flex"))}>
          <Icon
            shape={indeterminate ? SystemIcons.Minus : SystemIcons.Check}
            size="xs"
            color={themeBgPrimary}
          />
        </span>
      )}
    </ToggleInput>
  );
};

export default CheckboxInput;
