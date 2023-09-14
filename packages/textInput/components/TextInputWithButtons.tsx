import * as React from "react";
import { cx } from "@emotion/css";
import { TextInputWithIconProps } from "./TextInputWithIcon";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import { flex, padding, flexItem } from "../../shared/styles/styleUtils";
import {
  inputContainer,
  getInputAppearanceStyle
} from "../../shared/styles/formStyles";
import { TextInputButtonProps } from "../../textInputButton/components/TextInputButton";
import { getInputElementProps as getBaseInputElementProps } from "./shared/utils";
import { InputAppearance } from "../../shared/types/inputAppearance";
import InputLabel from "../../shared/components/InputLabel";
import { IconStart } from "./shared/IconStart";
import { Input } from "./shared/Input";
import { TextInputButtons } from "./shared/TextInputButtons";

export interface TextInputWithButtonsProps
  extends Omit<TextInputWithIconProps, "iconEnd"> {
  /**
   * An array of TextInputButton components to render at the end of the input
   */
  buttons: Array<React.ReactElement<TextInputButtonProps>>;
}

const TextInputWithButtons = ({
  type = "text",
  appearance = InputAppearance.Standard,
  showInputLabel = true,
  ...props
}: TextInputWithButtonsProps) => {
  const [hasFocus, setHasFocus] = React.useState(false);
  const generatedId = `textInput-${React.useId()}`;
  const textInputWithButtonsId = props.id || generatedId;

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
    const baseProps = getBaseInputElementProps({
      type,
      appearance,
      showInputLabel,
      ...props
    });
    const { buttons, iconStart, ...inputProps } =
      baseProps as TextInputWithButtonsProps;
    inputProps.onFocus = inputOnFocus;
    inputProps.onBlur = inputOnBlur;

    return inputProps;
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
        id={textInputWithButtonsId}
        required={props.required}
        tooltipContent={props.tooltipContent}
      >
        {props.inputLabel}
      </InputLabel>
      <FormFieldWrapper
        id={textInputWithButtonsId}
        errors={props.errors}
        hintContent={props.hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <>
            <div
              className={cx(
                flex(),
                padding("horiz", "s"),
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
                textInputProps={{
                  type,
                  appearance,
                  showInputLabel,
                  ...props
                }}
                getInputAppearance={getInputAppearance}
                getInputElementProps={getInputElementProps}
              />
              <TextInputButtons buttons={props.buttons} />
            </div>
            {getHintContent}
            {getValidationErrors}
          </>
        )}
      </FormFieldWrapper>
    </div>
  );
};

export default TextInputWithButtons;
