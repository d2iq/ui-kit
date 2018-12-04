import * as React from "react";
import { cx } from "emotion";
import {
  errorColor,
  inputAppearances,
  inputContainer,
  inputValidation
} from "../style";
import {
  display,
  flex,
  flexItem,
  flush,
  inputReset,
  margin,
  padding,
  textSize,
  textWeight,
  tintText,
  visuallyHidden
} from "../../shared/styles/styleUtils";

export enum TextInputAppearance {
  Standard = "standard",
  Error = "error",
  Success = "success"
}

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * Unique identifier used for the form input component
   */
  id: string;
  /**
   * The HTML input type for this component.
   */
  type: "text" | "number" | "search" | "email" | "password" | "tel" | "url";
  /**
   * Sets the current appearance of the input component. This defaults to TextInputAppearance.Standard, but supports `TextInputAppearance.Error` & `TextInputAppearance.Success` appearances as well.
   */
  appearance: TextInputAppearance;
  /**
   * Sets the contents of the input label. This can be a `string` or any `ReactNode`.
   */
  inputLabel: string | React.ReactNode;
  /**
   * Defaults to `true`, but can be set to `false` to visibly hide the `TextInput`'s label. The `inputLabel` should still be set even when hidden for accessibility support.
   */
  showInputLabel: boolean;
  /**
   * Sets the contents for a validation error, this can be a `string` or any `ReactNode`. This will be displayed below the input element. validationContent is only visible when the `TextInput` appearance is also set to `TextInputAppearance.Error`.
   */
  validationContent?: string | React.ReactNode;
}

export class TextInput<
  P extends TextInputProps,
  S extends {}
> extends React.PureComponent<P, S> {
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
        {this.getValidationContent()}
      </div>
    );
  }

  protected getInputAppearance(): string {
    return this.props.disabled ? "disabled" : this.props.appearance;
  }

  protected getLabelContent() {
    const labelClassName = this.props.showInputLabel
      ? cx(
          flush("top"),
          margin("bottom", "xxs"),
          textWeight("medium"),
          display("block"),
          {
            [tintText(errorColor)]:
              this.props.appearance === TextInputAppearance.Error
          }
        )
      : cx(visuallyHidden);
    return (
      <label className={labelClassName} htmlFor={this.props.id}>
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
  protected getInputElementProps() {
    // omit props for container and that we override, otherwise pass through
    // TextInput props to input element
    const {
      appearance,
      className,
      inputLabel,
      showInputLabel,
      type,
      validationContent,
      ...inputElementProps
    } = this.props as TextInputProps;
    if (appearance === TextInputAppearance.Error) {
      inputElementProps["aria-invalid"] = true;
      if (validationContent) {
        inputElementProps["aria-describedby"] = "errorMsg";
      }
    }
    return inputElementProps;
  }

  protected getInputElement(additionalClasses: string[] = []) {
    const inputElementProps = this.getInputElementProps();

    return (
      <input
        className={cx(inputReset, flexItem("grow"), ...additionalClasses)}
        type={this.props.type}
        {...inputElementProps}
      />
    );
  }

  protected getValidationContent() {
    if (
      this.props.appearance !== TextInputAppearance.Error ||
      !this.props.validationContent
    ) {
      return null;
    }
    return (
      <span
        id="errorMsg"
        className={cx(
          flush("bottom"),
          padding("top", "xxs"),
          textSize("small"),
          inputValidation
        )}
      >
        {this.props.validationContent}
      </span>
    );
  }
}

export default TextInput;
