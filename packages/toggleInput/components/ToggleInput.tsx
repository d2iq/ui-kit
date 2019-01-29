import * as React from "react";
import { cx } from "emotion";

import {
  flex,
  flexItem,
  padding,
  visuallyHidden,
  display,
  tintContent,
  tintContentSecondary
} from "../../shared/styles/styleUtils";
import { error, success } from "../../design-tokens/build/js/designTokens";
import { CheckboxInputProps } from "../../checkboxInput/components/CheckboxInput";

export enum ToggleInputAppearance {
  Standard = "standard",
  Error = "error",
  Success = "success"
}

export interface ToggleInputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * Sets the current appearance of the input component. This defaults to ToggleInputAppearance.Standard, but supports `ToggleInputAppearance.Error` & `InputAppearance.Success` appearances as well.
   */
  appearance: ToggleInputAppearance;
  /**
   * Whether or not the input is checked
   */
  checked?: boolean;
  /**
   * Unique identifier used for the input element
   */
  id: string;
  /**
   * The text or node content that appears next to the input
   */
  inputLabel: React.ReactNode | string;
  /**
   * Defaults to `true`, but can be set to `false` to visibly hide the content passed to `inputLabel`. The `inputLabel` should still be set even when hidden for accessibility support.
   */
  showInputLabel?: boolean;
  /**
   * The value of the input
   */
  value: string;
  /**
   * How the text content vertically aligns with the input
   */
  vertAlign?: "center" | "top";
}

interface LocalToggleInputProps extends ToggleInputProps {
  children: React.ReactElement<CheckboxInputProps>; // TODO: accept radio and toggle switch components when we have them
}

class ToggleInput extends React.PureComponent<LocalToggleInputProps, {}> {
  public static defaultProps: Partial<LocalToggleInputProps> = {
    showInputLabel: true,
    vertAlign: "center"
  };

  public render() {
    const {
      appearance,
      children,
      disabled,
      id,
      inputLabel,
      showInputLabel,
      vertAlign
    } = this.props;

    return (
      <div>
        <label
          className={cx(
            flex({
              align: vertAlign === "top" ? "flex-start" : "center"
            }),
            display("inline-flex")
          )}
          htmlFor={id}
        >
          <div className={cx(flexItem("shrink"), display("inherit"))}>
            {children}
          </div>
          <div
            className={cx(flexItem("grow"), padding("left", "s"), {
              [visuallyHidden]: !showInputLabel,
              [tintContent(error)]: appearance === ToggleInputAppearance.Error,
              [tintContent(success)]:
                appearance === ToggleInputAppearance.Success,
              [tintContentSecondary]: disabled
            })}
          >
            {inputLabel}
          </div>
        </label>
      </div>
    );
  }
}

export default ToggleInput;
