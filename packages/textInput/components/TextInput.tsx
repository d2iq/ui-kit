import * as React from "react";
import { cx } from "emotion";
import {
  dangerColor,
  errorColor,
  inputAppearances,
  inputContainer
} from "../style";
import {
  display,
  flush,
  inputReset,
  liReset,
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
   * Sets the contents for validation errors. This will be displayed below the input element. Errors are only visible when the `TextInput` appearance is also set to `TextInputAppearance.Error`.
   */
  errors?: string[];
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
        {this.getValidationErrors()}
      </div>
    );
  }

  protected getInputAppearance(): string {
    return this.props.disabled ? "disabled" : this.props.appearance;
  }

  protected getLabelContent() {
    const requiredContent = this.props.required ? (
      <span className={cx(tintText(dangerColor))}> *</span>
    ) : null;
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
        {requiredContent}
      </label>
    );
  }

  protected getInputContent(): React.ReactNode {
    return (
      <span>
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
      errors,
      ...inputElementProps
    } = this.props as TextInputProps;
    if (appearance === TextInputAppearance.Error) {
      inputElementProps["aria-invalid"] = true;
      if (errors && errors.length > 0) {
        inputElementProps["aria-describedby"] = errors
          .map((_, index) => `errorMsg${index}`)
          .join(" ");
      }
    }
    return inputElementProps;
  }

  protected getInputElement(additionalClasses: string[] = []) {
    const inputElementProps = this.getInputElementProps();

    return (
      <input
        className={cx(inputReset, ...additionalClasses)}
        type={this.props.type}
        {...inputElementProps}
      />
    );
  }

  protected getValidationErrors() {
    if (
      this.props.appearance !== TextInputAppearance.Error ||
      !this.props.errors ||
      (this.props.errors && this.props.errors.length === 0)
    ) {
      return null;
    }
    return (
      <ul className={cx(flush("all"), textSize("small"), tintText(errorColor))}>
        {this.props.errors.map((error, index) => (
          <li
            key={index}
            id={`errorMsg${index}`}
            className={cx(liReset, padding("top", "xxs"))}
          >
            {error}
          </li>
        ))}
      </ul>
    );
  }
}

export default TextInput;
