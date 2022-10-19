import * as React from "react";
import { TextInputProps } from "./TextInput";
import {
  getInputAppearanceStyle,
  inputContainer
} from "../../shared/styles/formStyles";
import { flex, flexItem, padding } from "../../shared/styles/styleUtils";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { IconShapes } from "../../icon/components/Icon";
import {
  getIconEndContent,
  getIconStartContent,
  getId,
  getInputElement,
  getInputElementProps as getBaseInputElementProps
} from "./utils";
import { renderLabel } from "../../utilities/label";
import { cx } from "@emotion/css";

export interface TextInputWithIconProps extends TextInputProps {
  /**
   * icon to display at the start of this TextInput.
   */
  iconStart?: IconShapes | React.ReactElement<HTMLElement>;
  /**
   * icon to display at the end of this TextInput.
   */
  iconEnd?: IconShapes | React.ReactElement<HTMLElement>;
}

export interface TextInputWithIconState {
  hasFocus?: boolean;
}

const TextInputWithIcon = (props: TextInputWithIconProps) => {
  const [hasFocus, setHasFocus] = React.useState(false);

  const getInputAppearance = (): string => {
    if (props.disabled) {
      return "disabled";
    }
    if (hasFocus) {
      return `${props.appearance}-focus`;
    }
    return props.appearance;
  };

  const getInputElementProps = () => {
    const baseProps = getBaseInputElementProps(props);
    const { iconStart, iconEnd, ...inputProps } =
      baseProps as TextInputWithIconProps;
    inputProps.onFocus = inputOnFocus;
    inputProps.onBlur = inputOnBlur;
    return inputProps;
  };

  const getInputContent = () => {
    const inputAppearance = getInputAppearance();
    return (
      <FormFieldWrapper
        // TODO: figure out how to get rid of this non-null assertion
        // If we stop generating an `id` prop in the TextInput component,
        // it would be possible for `this.props.id` to be undefined
        id={props.id!}
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
                getInputAppearanceStyle(inputAppearance)
              )}
            >
              {getIconStartContent(props, getInputAppearance())}
              {getInputElement(
                [flexItem("grow"), padding("all", "none")],
                isValid,
                describedByIds,
                props,
                getInputAppearance,
                getInputElementProps
              )}
              {getIconEndContent(props, getInputAppearance())}
            </div>
            {getHintContent}
            {getValidationErrors}
          </div>
        )}
      </FormFieldWrapper>
    );
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
  const appearance = getInputAppearance();
  const dataCy = `textInput textInput.${appearance}`;

  if (props.className) {
    containerProps.className = props.className;
  }
  return (
    <div {...containerProps} data-cy={dataCy}>
      {renderLabel({
        appearance,
        hidden: !props.showInputLabel,
        id: getId(props),
        label: props.inputLabel,
        required: props.required,
        tooltipContent: props.tooltipContent
      })}
      {getInputContent()}
    </div>
  );
};

TextInputWithIcon.defaultProps = {
  type: "text",
  appearance: InputAppearance.Standard,
  showInputLabel: true
};

export default TextInputWithIcon;
