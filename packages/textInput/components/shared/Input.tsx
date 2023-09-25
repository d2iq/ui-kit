import { cx } from "@emotion/css";
import React from "react";
import { inputReset } from "../../../shared/styles/styleUtils";
import { InputAppearance } from "../../../shared/types/inputAppearance";
import { TextInputProps } from "../TextInput";

interface InputProps {
  additionalClasses?: string[];
  isValid: boolean;
  describedBy: string;
  textInputProps: TextInputProps;
  getInputAppearance: (props: TextInputProps) => string;
  getInputElementProps: (textInputProps: TextInputProps) => TextInputProps;
}

export const Input = ({
  additionalClasses = [],
  isValid,
  describedBy,
  textInputProps,
  getInputAppearance,
  getInputElementProps
}: InputProps) => {
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
    ...(textInputAppearance &&
    textInputAppearance !== InputAppearance.Standard.toString()
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
