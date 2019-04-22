import { cx } from "emotion";
import * as React from "react";

import {
  error,
  greyLightDarken2,
  iconSizeXs
} from "../../design-tokens/build/js/designTokens";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import {
  inputAppearances,
  inputContainer
} from "../../shared/styles/formStyles";
import {
  flex,
  flexItem,
  flush,
  inputReset,
  margin,
  padding,
  textWeight,
  tintContent,
  tintText,
  visuallyHidden
} from "../../shared/styles/styleUtils";
import { InputAppearance } from "../../shared/types/inputAppearance";
import Icon from "../../icon/components/Icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import Tooltip from "../../tooltip/components/Tooltip";

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
   * Sets the current appearance of the input component. This defaults to InputAppearance.Standard, but supports `InputAppearance.Error` & `InputAppearance.Success` appearances as well.
   */
  appearance: InputAppearance;
  /**
   * Sets the contents of the input label. This can be a `string` or any `ReactNode`.
   */
  inputLabel: React.ReactNode;
  /**
   * Defaults to `true`, but can be set to `false` to visibly hide the `TextInput`'s label. The `inputLabel` should still be set even when hidden for accessibility support.
   */
  showInputLabel: boolean;
  /**
   * hintContent is text or a ReactNode that is displayed directly under the input with additional information about the expected input.
   */
  hintContent?: React.ReactNode;
  /**
   * Sets the contents for validation errors. This will be displayed below the input element. Errors are only visible when the `TextInput` appearance is also set to `InputAppearance.Error`.
   */
  errors?: React.ReactNode[];
  /**
   * Sets the text content for the tooltip that can be displayed above the input.
   */
  tooltipContent?: React.ReactNode;
}

export class TextInput<
  P extends TextInputProps,
  S extends {}
> extends React.PureComponent<P, S> {
  public static defaultProps: Partial<TextInputProps> = {
    type: "text",
    appearance: InputAppearance.Standard,
    showInputLabel: true
  };

  public render() {
    const labelContent = this.getLabelContent();
    const tooltipContent = this.getTooltipContent();
    const containerProps: { className?: string } = {};
    if (this.props.className) {
      containerProps.className = this.props.className;
    }
    return (
      <div {...containerProps}>
        <div className={cx(margin("bottom", "xxs"), flex({ align: "center" }))}>
          {labelContent}
          {tooltipContent}
        </div>
        {this.getInputContent()}
      </div>
    );
  }

  protected getInputAppearance(): string {
    return this.props.disabled ? "disabled" : this.props.appearance;
  }

  protected getLabelContent() {
    const requiredContent = this.props.required ? (
      <span className={cx(tintText(error))}> *</span>
    ) : null;
    const labelClassName = this.props.showInputLabel
      ? cx(flush("top"), textWeight("medium"), {
          [tintContent(error)]: this.props.appearance === InputAppearance.Error
        })
      : cx(visuallyHidden);
    return (
      <label className={labelClassName} htmlFor={this.props.id}>
        {this.props.inputLabel}
        {requiredContent}
      </label>
    );
  }

  protected getInputContent(): React.ReactNode {
    const appearance = this.getInputAppearance();

    return (
      <FormFieldWrapper
        id={this.props.id}
        errors={this.props.errors}
        hintContent={this.props.hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <div>
            <div className={cx(flex())}>
              {this.getInputElement(
                [
                  padding("horiz", "m"),
                  flexItem("grow"),
                  inputContainer,
                  inputAppearances[this.getInputAppearance()]
                ],
                isValid,
                describedByIds
              )}
            </div>
            <div>
              {getHintContent}
              {appearance === InputAppearance.Error && getValidationErrors}
            </div>
          </div>
        )}
      </FormFieldWrapper>
    );
  }
  protected getInputElementProps() {
    // omit props for container and that we override, otherwise pass through
    // TextInput props to input element
    const {
      appearance,
      className,
      hintContent,
      inputLabel,
      showInputLabel,
      type,
      errors,
      ...inputElementProps
    } = this.props as TextInputProps;

    return inputElementProps;
  }

  protected getInputElement(
    additionalClasses: string[] = [],
    isValid,
    describedBy
  ) {
    const { value, ...inputElementProps } = this.getInputElementProps();
    let { onChange } = inputElementProps;
    if (onChange == null && value != null) {
      onChange = Function.prototype as (
        event: React.FormEvent<HTMLInputElement>
      ) => void;
    }

    return (
      <input
        className={cx(inputReset, ...additionalClasses)}
        type={this.props.type}
        aria-invalid={!isValid}
        aria-describedby={describedBy}
        {...{ ...inputElementProps, onChange, value }}
      />
    );
  }

  protected getTooltipContent(): React.ReactNode {
    if (!this.props.tooltipContent) {
      return null;
    }

    return (
      <span className={margin("left", "xs")}>
        <Tooltip
          trigger={
            <Icon
              color={greyLightDarken2}
              shape={SystemIcons.CircleQuestion}
              size={iconSizeXs}
            />
          }
          id={`labelTooltip-${this.props.id}`}
          maxWidth={200}
        >
          {this.props.tooltipContent}
        </Tooltip>
      </span>
    );
  }
}

export default TextInput;
