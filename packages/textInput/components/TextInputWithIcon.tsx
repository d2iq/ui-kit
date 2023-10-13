import * as React from "react";
import { TextInputProps } from "./TextInput";
import {
  getInputAppearanceStyle,
  inputContainer
} from "../../shared/styles/formStyles";
import { flex, flexItem, padding } from "../../shared/styles/styleUtils";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { getInputElementProps as getBaseInputElementProps } from "./shared/utils";
import { cx } from "@emotion/css";
import InputLabel from "../../shared/components/InputLabel";
import { Input } from "./shared/Input";
import { IconStart } from "./shared/IconStart";
import { IconEnd } from "./shared/IconEnd";

export interface TextInputWithIconProps extends TextInputProps {
  /**
   * icon to display at the start of this TextInput.
   */
  iconStart?: string;
  /**
   * icon to display at the end of this TextInput.
   */
  iconEnd?: string;
}

export interface TextInputWithIconState {
  hasFocus?: boolean;
}

const TextInputWithIcon = ({
  type = "text",
  showInputLabel = true,
  appearance = InputAppearance.Standard,
  ...props
}: TextInputWithIconProps) => {
  const [hasFocus, setHasFocus] = React.useState(false);
  const generatedId = `textInput-${React.useId()}`;
  const textInputWithIconId = props.id || generatedId;

  const getInputAppearance = (): string => {
    if (props.disabled) {
      return "disabled";
    }
    if (hasFocus) {
      return `${appearance}-focus`;
    }
    return appearance;
  };

  const getInputElementProps = () => {
    const baseProps = getBaseInputElementProps(props);
    const { iconStart, iconEnd, ...inputProps } =
      baseProps as TextInputWithIconProps;
    inputProps.onFocus = inputOnFocus;
    inputProps.onBlur = inputOnBlur;
    return inputProps;
  };

  const inputOnFocus = e => {
    setHasFocus(true);

    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const inputOnBlur = e => {
    setHasFocus(false);

    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const containerProps: { className?: string } = {};
  const calculatedAppearance = getInputAppearance();
  const dataCy = `textInput textInput.${calculatedAppearance}`;

  if (props.className) {
    containerProps.className = props.className;
  }

  return (
    <div {...containerProps} data-cy={dataCy}>
      <InputLabel
        appearance={calculatedAppearance}
        hidden={!showInputLabel}
        id={textInputWithIconId}
        required={props.required}
        tooltipContent={props.tooltipContent}
      >
        {props.inputLabel}
      </InputLabel>
      <FormFieldWrapper
        id={textInputWithIconId}
        errors={props.errors}
        hintContent={props.hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <div>
            <div
              className={cx(
                flex(),
                padding("left", "s"),
                padding("right", "s"),
                inputContainer,
                getInputAppearanceStyle(calculatedAppearance)
              )}
            >
              <IconStart
                iconStart={props.iconStart}
                appearance={calculatedAppearance}
              />
              <Input
                additionalClasses={[flexItem("grow"), padding("all", "none")]}
                isValid={isValid}
                describedBy={describedByIds}
                textInputProps={props}
                getInputAppearance={getInputAppearance}
                getInputElementProps={getInputElementProps}
              />
              <IconEnd
                iconEnd={props.iconEnd}
                appearance={calculatedAppearance}
              />
            </div>
            {getHintContent}
            {getValidationErrors}
          </div>
        )}
      </FormFieldWrapper>
    </div>
  );
};

export default TextInputWithIcon;
