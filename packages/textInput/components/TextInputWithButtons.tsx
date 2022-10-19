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
import {
  getIconStartContent,
  getId,
  getInputElement,
  getInputElementProps as getBaseInputElementProps
} from "./utils";
import { renderLabel } from "../../utilities/label";
import { InputAppearance } from "../../shared/types/inputAppearance";

export interface TextInputWithButtonsProps
  extends Omit<TextInputWithIconProps, "iconEnd"> {
  /**
   * An array of TextInputButton components to render at the end of the input
   */
  buttons: Array<React.ReactElement<TextInputButtonProps>>;
}

const TextInputWithButtons = (props: TextInputWithButtonsProps) => {
  const [hasFocus, setHasFocus] = React.useState(false);

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
      return `${props.appearance}-focus`;
    }
    return props.appearance;
  };

  const getInputElementProps = () => {
    const baseProps = getBaseInputElementProps(props);
    const { buttons, iconStart, ...inputProps } =
      baseProps as TextInputWithButtonsProps;
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
          <React.Fragment>
            <div
              className={cx(
                flex(),
                padding("horiz", "s"),
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
              {getButtons()}
            </div>
            {getHintContent}
            {getValidationErrors}
          </React.Fragment>
        )}
      </FormFieldWrapper>
    );
  };

  const getButtons = () => {
    if (!props.buttons.filter(Boolean)) {
      return;
    }

    return props.buttons.map((button, i) => (
      // TODO: consider making a component for this wrapper span
      <span
        className={cx(
          flex({ align: "center", justify: "center" }),
          flexItem("shrink"),
          { [padding("left", "s")]: i !== 0 }
        )}
        key={(React.isValidElement(button) && button.key) || i}
      >
        {button}
      </span>
    ));
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
TextInputWithButtons.defaultProps = {
  type: "text",
  appearance: InputAppearance.Standard,
  showInputLabel: true
};

export default TextInputWithButtons;
