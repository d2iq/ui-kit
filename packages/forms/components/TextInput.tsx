import * as React from "react";
import { cx } from "emotion";
import { inputAppearances, inputContainer } from "../style";
import {
  display,
  flex,
  flexItem,
  flush,
  inputReset,
  margin,
  padding,
  textWeight
} from "../../shared/styles/styleUtils";

export enum TextInputAppearance {
  Standard = "standard",
  Error = "error",
  Success = "success"
}

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  type: "text" | "number" | "search" | "email" | "password" | "tel" | "url";
  appearance: TextInputAppearance;
  inputLabel: string | React.ReactNode;
  showInputLabel: boolean;
}

export class TextInput<T extends TextInputProps> extends React.PureComponent<
  T,
  {}
> {
  public static defaultProps: Partial<TextInputProps> = {
    type: "text",
    appearance: TextInputAppearance.Standard,
    showInputLabel: true
  };

  public render() {
    const labelContent = this.getLabelContent();
    const containerProps: { className?: string } = {};
    if (this.props.className) {
      containerProps.className = this.props.className;
    }
    return (
      <div {...containerProps}>
        {labelContent}
        {this.getInputContent()}
      </div>
    );
  }

  protected getInputAppearance() {
    return this.props.disabled ? "disabled" : this.props.appearance;
  }

  protected getLabelContent() {
    return (
      <label
        className={cx(
          flush("top"),
          margin("bottom", "xxs"),
          textWeight("medium"),
          display(this.props.showInputLabel ? "block" : "none")
        )}
        htmlFor={this.props.id}
      >
        {this.props.inputLabel}
      </label>
    );
  }

  protected getInputContent(): React.ReactNode {
    return (
      <span className={cx(flex())}>
        {this.getInputElement([
          padding("left", "m"),
          padding("right", "m"),
          inputContainer,
          inputAppearances[this.getInputAppearance()]
        ])}
      </span>
    );
  }
  protected getInputElement(additionalClasses: string[] = []) {
    // omit props for container and that we override, otherwise pass through
    // TextInput props to input element
    const {
      type,
      appearance,
      inputLabel,
      showInputLabel,
      className,
      ...inputElementProps
    } = this.props as TextInputProps;
    return (
      <input
        className={cx(inputReset, flexItem("grow"), ...additionalClasses)}
        type={this.props.type}
        {...inputElementProps}
      />
    );
  }
}

export default TextInput;
