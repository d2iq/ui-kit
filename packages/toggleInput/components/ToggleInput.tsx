import * as React from "react";
import { cx } from "emotion";

import {
  flex,
  flexItem,
  visuallyHidden,
  display,
  tintContent,
  tintContentSecondary,
  vAlignChildren
} from "../../shared/styles/styleUtils";

import {
  themeError,
  themeSuccess
} from "../../design-tokens/build/js/designTokens";
import { bruteForceKillLabelMargin } from "../style";
import { CheckboxInputProps } from "../../checkboxInput/components/CheckboxInput";
import { InputAppearance } from "../../shared/types/inputAppearance";
import {
  toggleInputFeedbackText,
  toggleInputLabel
} from "../../shared/styles/formStyles";

export interface ToggleInputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * Sets the current appearance of the input component. This defaults to InputAppearance.Standard, but supports `InputAppearance.Error` & `InputAppearance.Success` appearances as well.
   */
  appearance: InputAppearance;
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
  /**
   * human-readable selector used for writing tests
   */
  dataCy?: string;
  /**
   * hintContent is text or a ReactNode that is displayed directly under the input with additional information about the expected input.
   */
  hintContent?: React.ReactNode;
  /**
   * Sets the contents for validation errors. This will be displayed below the input element. Errors are only visible when the `TextInput` appearance is also set to `TextInputAppearance.Error`.
   */
  errors?: React.ReactNode[];
}

interface LocalToggleInputProps extends ToggleInputProps {
  children: React.ReactElement<CheckboxInputProps>; // TODO: accept radio and toggle switch components when we have them
  errorContent: React.ReactNode | string;
  hintContent: React.ReactNode | string;
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
      errorContent,
      hintContent,
      id,
      inputLabel,
      showInputLabel,
      dataCy,
      vertAlign
    } = this.props;

    return (
      <div className={vAlignChildren} data-cy={dataCy}>
        <label
          className={cx(
            flex({
              align: vertAlign === "top" ? "flex-start" : "center"
            }),
            display("inline-flex"),
            bruteForceKillLabelMargin // to override CNVS bottom margin on <label>
          )}
          htmlFor={id}
        >
          <div className={cx(flexItem("shrink"), display("inherit"))}>
            {children}
          </div>
          <div
            className={cx(flexItem("grow"), toggleInputLabel, {
              [visuallyHidden]: !showInputLabel,
              [tintContent(themeError)]: appearance === InputAppearance.Error,
              [tintContent(themeSuccess)]:
                appearance === InputAppearance.Success,
              [tintContentSecondary]: disabled
            })}
          >
            {inputLabel}
          </div>
        </label>
        {hintContent && (
          <div className={toggleInputFeedbackText}>
            {hintContent}
            {appearance === InputAppearance.Error && errorContent}
          </div>
        )}
      </div>
    );
  }
}

export default ToggleInput;
