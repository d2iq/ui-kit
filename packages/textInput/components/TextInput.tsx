import * as React from "react";

import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import {
  getInputAppearanceStyle,
  inputContainer
} from "../../shared/styles/formStyles";
import { padding } from "../../shared/styles/styleUtils";
import { flex, flexItem } from "../../shared/styles/styleUtils/layout/flexbox";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { getInputAppearance, getInputElementProps } from "./shared/utils";
import InputLabel from "../../shared/components/InputLabel";
import { Input } from "./shared/Input";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * The HTML input type for this component.
   */
  type?: "text" | "number" | "search" | "email" | "password" | "tel" | "url";
  /**
   * Sets the current appearance of the input component. This defaults to InputAppearance.Standard, but supports `InputAppearance.Error` & `InputAppearance.Success` appearances as well.
   */
  appearance?: InputAppearance;
  /**
   * Sets the contents of the input label. This can be a `string` or any `ReactNode`.
   */
  inputLabel?: React.ReactNode;
  /**
   * Defaults to `true`, but can be set to `false` to visibly hide the `TextInput`'s label. The `inputLabel` should still be set even when hidden for accessibility support.
   */
  showInputLabel?: boolean;
  /**
   * hintContent is text or a ReactNode that is displayed directly under the input with additional information about the expected input.
   */
  hintContent?: React.ReactNode;
  /**
   * Sets the contents for validation errors. This will be displayed below the input element. Errors are only visible when the `TextInput` appearance is also set to `InputAppearance.Error`.
   */
  errors?: React.ReactNode[];
  /**
   * Sets the text content for the tooltip that can be displayed above the input.
   */
  tooltipContent?: React.ReactNode;
}

const TextInput = ({
  appearance = InputAppearance.Standard,
  type = "text",
  showInputLabel = true,
  ...props
}: TextInputProps) => {
  const generatedId = `textInput-${React.useId()}`;
  const textInputId = props.id || generatedId;
  const containerProps: { className?: string } = {};
  const calculatedAppearance = getInputAppearance({
    appearance,
    type,
    showInputLabel,
    ...props
  });
  const dataCy = `textInput textInput.${calculatedAppearance}`;

  if (props.className) {
    containerProps.className = props.className;
  }
  return (
    <div {...containerProps} data-cy={dataCy}>
      <InputLabel
        appearance={calculatedAppearance}
        hidden={!showInputLabel}
        id={textInputId}
        required={props.required}
        tooltipContent={props.tooltipContent}
      >
        {props.inputLabel}
      </InputLabel>
      <FormFieldWrapper
        id={textInputId}
        errors={props.errors}
        hintContent={props.hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <div>
            <div className={flex()}>
              <Input
                additionalClasses={[
                  padding("horiz", "m"),
                  flexItem("grow"),
                  inputContainer,
                  getInputAppearanceStyle(
                    getInputAppearance({
                      appearance,
                      type,
                      showInputLabel,
                      ...props
                    })
                  )
                ]}
                isValid={isValid}
                describedBy={describedByIds}
                textInputProps={{
                  appearance,
                  type,
                  showInputLabel,
                  ...props
                }}
                getInputAppearance={getInputAppearance}
                getInputElementProps={getInputElementProps}
              />
            </div>
            <div data-cy="textInput-hintContent">
              {getHintContent}
              {calculatedAppearance === InputAppearance.Error &&
                getValidationErrors}
            </div>
          </div>
        )}
      </FormFieldWrapper>
    </div>
  );
};

export default TextInput;
