import { cx } from "emotion";
import * as React from "react";
import nextId from "react-id-generator";

import {
  greyLightDarken2,
  iconSizeXs,
  themeError
} from "../../design-tokens/build/js/designTokens";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import {
  getInputAppearanceStyle,
  inputContainer,
  getLabelStyle
} from "../../shared/styles/formStyles";
import {
  flex,
  flexItem,
  inputReset,
  margin,
  padding,
  tintText,
  visuallyHidden
} from "../../shared/styles/styleUtils";
import { InputAppearance } from "../../shared/types/inputAppearance";
import Icon from "../../icon/components/Icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import Tooltip from "../../tooltip/components/Tooltip";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
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
  inputLabel?: React.ReactNode;
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

export class TextInput<P extends TextInputProps> extends React.Component<P> {
  public static defaultProps = {
    type: "text",
    appearance: InputAppearance.Standard,
    showInputLabel: true
  };
  placeholderId = nextId("textInput-");

  public render() {
    const labelContent = this.getLabelContent();
    const tooltipContent = this.getTooltipContent();
    const containerProps: { className?: string } = {};
    const appearance = this.getInputAppearance();
    const dataCy = [
      "textInput",
      ...(appearance && appearance !== InputAppearance.Standard
        ? [`textInput.${appearance}`]
        : [])
    ].join(" ");

    if (this.props.className) {
      containerProps.className = this.props.className;
    }
    return (
      <div {...containerProps} data-cy={dataCy}>
        {tooltipContent ? (
          <div className={flex({ align: "center" })}>
            {labelContent}
            {tooltipContent}
          </div>
        ) : (
          labelContent
        )}
        {this.getInputContent()}
      </div>
    );
  }

  protected getInputAppearance(): string {
    return this.props.disabled ? "disabled" : this.props.appearance;
  }

  protected getLabelContent() {
    const requiredContent = this.props.required ? (
      <span className={cx(tintText(themeError))}> *</span>
    ) : null;
    const hasError = this.props.appearance === InputAppearance.Error;
    const labelClassName = this.props.showInputLabel
      ? getLabelStyle(hasError)
      : cx(visuallyHidden);
    return (
      <label
        className={labelClassName}
        htmlFor={this.getId()}
        data-cy="textInput-label"
      >
        {this.props.inputLabel}
        {requiredContent}
      </label>
    );
  }

  protected getInputContent(): React.ReactNode {
    const appearance = this.getInputAppearance();

    return (
      <FormFieldWrapper
        id={this.getId()}
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
                  getInputAppearanceStyle(this.getInputAppearance())
                ],
                isValid,
                describedByIds
              )}
            </div>
            <div data-cy="textInput-hintContent">
              {getHintContent}
              {appearance === InputAppearance.Error && getValidationErrors}
            </div>
          </div>
        )}
      </FormFieldWrapper>
    );
  }
  protected getInputElementProps(): TextInputProps {
    // omit props for container and that we override, otherwise pass through
    // TextInput props to input element
    const {
      className,
      hintContent,
      inputLabel,
      errors,
      id = this.placeholderId,
      ...inputElementProps
    } = this.props;

    return { ...inputElementProps, id };
  }

  protected getInputElement(
    additionalClasses: string[] = [],
    isValid: boolean,
    describedBy: string
  ) {
    const {
      value,
      showInputLabel,
      appearance,
      ...inputElementProps
    } = this.getInputElementProps();
    const textInputAppearance = this.getInputAppearance();
    const dataCy = [
      "textInput-input",
      ...(textInputAppearance &&
      textInputAppearance !== InputAppearance.Standard
        ? [`textInput-input.${textInputAppearance}`]
        : [])
    ].join(" ");
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
        data-cy={dataCy}
        {...{ ...inputElementProps, onChange, value }}
      />
    );
  }

  protected getTooltipContent(): React.ReactNode {
    if (!this.props.tooltipContent) {
      return null;
    }

    return (
      <span className={cx(margin("left", "xs"), margin("bottom", "xxs"))}>
        <Tooltip
          trigger={
            <Icon
              color={greyLightDarken2}
              shape={SystemIcons.CircleQuestion}
              size={iconSizeXs}
            />
          }
          id={`labelTooltip-${this.getId()}`}
          maxWidth={200}
        >
          {this.props.tooltipContent}
        </Tooltip>
      </span>
    );
  }

  private getId(): string {
    if (typeof this.props.id === "string") {
      return this.props.id;
    }

    return this.placeholderId;
  }
}

export default TextInput;
