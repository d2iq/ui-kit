import * as React from "react";
import { TextInputProps } from "./TextInput";
import { InputAppearance } from "../../shared/types/inputAppearance";
import {
  flex,
  flexItem,
  flush,
  inputReset,
  padding
} from "../../shared/styles/styleUtils";
import { cx } from "@emotion/css";
import { TextInputWithIconProps } from "./TextInputWithIcon";
import IconPropAdapter from "../../icon/components/IconPropAdapter";
import {
  getIconAppearanceStyle,
  inputIconWrapper
} from "../../shared/styles/formStyles";

const getInputElementProps = (props: TextInputProps): TextInputProps => {
  // omit props for container and that we override, otherwise pass through
  // TextInput props to input element
  const {
    className,
    hintContent,
    inputLabel,
    errors,
    id,
    ...inputElementProps
  } = props;

  return { ...inputElementProps, id };
};

const getInputElement = (
  additionalClasses: string[] = [],
  isValid: boolean,
  describedBy: string,
  textInputProps: TextInputProps,
  getInputAppearance: (props: TextInputProps) => string,
  getInputElementProps: (textInputProps: TextInputProps) => TextInputProps
) => {
  const {
    value,
    showInputLabel,
    appearance,
    tooltipContent,
    type,
    ...inputElementProps
  } = getInputElementProps(textInputProps);
  const textInputAppearance = getInputAppearance(textInputProps);
  const dataCy = [
    "textInput-input",
    ...(textInputAppearance && textInputAppearance !== InputAppearance.Standard
      ? [`textInput-input.${textInputAppearance}`]
      : [])
  ].join(" ");
  let { onChange } = inputElementProps;
  if (onChange == null && value != null) {
    onChange = Function.prototype as (
      event: React.FormEvent<HTMLInputElement>
    ) => void;
  }
  const additionalProps = {
    ...{ ...inputElementProps, onChange, value, type }
  };
  return (
    <input
      className={cx(inputReset, ...additionalClasses)}
      aria-invalid={!isValid}
      aria-describedby={describedBy}
      data-cy={dataCy}
      {...additionalProps}
    />
  );
};

const getInputAppearance = (props: TextInputProps): string => {
  return props.disabled
    ? "disabled"
    : props.appearance ?? InputAppearance.Standard;
};

const getIconStartContent = (
  props: TextInputWithIconProps,
  appearance: string
) => {
  if (!props.iconStart) {
    return null;
  }
  return (
    <span
      className={cx(
        padding("right", "xs"),
        flex({ align: "center", justify: "center" }),
        flexItem("shrink"),
        getIconAppearanceStyle(appearance),
        inputIconWrapper
      )}
    >
      <IconPropAdapter icon={props.iconStart!} size="xs" color="inherit" />
    </span>
  );
};

const getIconEndContent = (
  props: TextInputWithIconProps,
  appearance: string
) => {
  if (!props.iconEnd) {
    return null;
  }
  return (
    <span
      className={cx(
        flex({ align: "center", justify: "center" }),
        flexItem("shrink"),
        flush("left"),
        getIconAppearanceStyle(appearance),
        inputIconWrapper
      )}
    >
      <IconPropAdapter icon={props.iconEnd!} size="xs" color="inherit" />
    </span>
  );
};

export {
  getInputElementProps,
  getInputElement,
  getInputAppearance,
  getIconStartContent,
  getIconEndContent
};
