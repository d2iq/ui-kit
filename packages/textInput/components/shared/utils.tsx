import { TextInputProps } from "../TextInput";
import { InputAppearance } from "../../../shared/types/inputAppearance";

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

const getInputAppearance = (props: TextInputProps): string => {
  return props.disabled
    ? "disabled"
    : props.appearance ?? InputAppearance.Standard;
};

export { getInputElementProps, getInputAppearance };
