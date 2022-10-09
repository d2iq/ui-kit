import * as React from "react";
import nextId from "react-id-generator";

import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import {
  getInputAppearanceStyle,
  inputContainer
} from "../../shared/styles/formStyles";
import { padding } from "../../shared/styles/styleUtils";
import { flex, flexItem } from "../../shared/styles/styleUtils/layout/flexbox";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { renderLabel } from "../../utilities/label";
import {
  getInputAppearance,
  getInputElement,
  getInputElementProps
} from "./utils";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * The HTML input type for this component.
   */
  type: "text" | "number" | "search" | "email" | "password" | "tel" | "url";
  /**
   * Sets the current appearance of the input component. This defaults to InputAppearance.Standard, but supports `InputAppearance.Error` & `InputAppearance.Success` appearances as well.
   */
  appearance: InputAppearance;
  /**
   * Sets the contents of the input label. This can be a `string` or any `ReactNode`.
   */
  inputLabel?: React.ReactNode;
  /**
   * Defaults to `true`, but can be set to `false` to visibly hide the `TextInput`'s label. The `inputLabel` should still be set even when hidden for accessibility support.
   */
  showInputLabel: boolean;
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

const TextInput = (props: TextInputProps) => {
  const placeholderId = nextId("textInput-");

  const getInputContent = (): React.ReactNode => {
    const appearance = getInputAppearance(props);

    return (
      <FormFieldWrapper
        id={getId()}
        errors={props.errors}
        hintContent={props.hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <div>
            <div className={flex()}>
              {getInputElement(
                [
                  padding("horiz", "m"),
                  flexItem("grow"),
                  inputContainer,
                  getInputAppearanceStyle(getInputAppearance(props))
                ],
                isValid,
                describedByIds,
                props,
                getInputAppearance,
                getInputElementProps
              )}
            </div>
            <div data-cy="textInput-hintContent">
              {getHintContent}
              {appearance === InputAppearance.Error && getValidationErrors}
            </div>
          </div>
        )}
      </FormFieldWrapper>
    );
  };

  const getId = (): string => {
    if (typeof props.id === "string") {
      return props.id;
    }

    return placeholderId;
  };

  const containerProps: { className?: string } = {};
  const appearance = getInputAppearance(props);
  const dataCy = `textInput textInput.${appearance}`;

  if (props.className) {
    containerProps.className = props.className;
  }
  return (
    <div {...containerProps} data-cy={dataCy}>
      {renderLabel({
        appearance,
        hidden: !props.showInputLabel,
        id: getId(),
        label: props.inputLabel,
        required: props.required,
        tooltipContent: props.tooltipContent
      })}
      {getInputContent()}
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  appearance: InputAppearance.Standard,
  showInputLabel: true
};

export default TextInput;
