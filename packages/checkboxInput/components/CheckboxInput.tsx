import * as React from "react";
import { cx } from "emotion";
import { checkbox, checkboxIconContainer } from "../style";
import {
  toggleInput,
  toggleInputApperances
} from "../../shared/styles/formStyles";
import { ToggleInput } from "../../toggleInput";
import { Icon } from "../../icon";
import { visuallyHidden, display } from "../../shared/styles/styleUtils";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeXs, white } from "../../design-tokens/build/js/designTokens";
import { ToggleInputProps } from "../../toggleInput/components/ToggleInput";
import { InputAppearance } from "../../shared/types/inputAppearance";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";

export interface CheckboxInputState {
  hasFocus: boolean;
}

export interface CheckboxInputProps extends ToggleInputProps {
  /**
   * The value being toggled
   */
  value: string;
  /**
   * Whether the checkbox is neither checked or unchecked
   */
  indeterminate: boolean;
}

class CheckboxInput extends React.PureComponent<
  CheckboxInputProps,
  CheckboxInputState
> {
  public static defaultProps: Partial<CheckboxInputProps> = {
    appearance: InputAppearance.Standard
  };

  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      hasFocus: false
    };
  }

  public render() {
    const {
      appearance,
      checked,
      id,
      indeterminate,
      inputLabel,
      showInputLabel,
      vertAlign,
      disabled,
      value,
      errors,
      hintContent,
      ...other
    } = this.props;
    delete other.onFocus;
    delete other.onBlur;
    const isIndeterminate = indeterminate && !checked;
    const parentDataCy = [
      "checkboxInput",
      ...(checked ? ["checkboxInput.checked"] : []),
      ...(isIndeterminate ? ["checkboxInput.indeterminate"] : []),
      ...(appearance && appearance !== InputAppearance.Standard
        ? [`checkboxInput.${appearance}`]
        : [])
    ].join(" ");
    const inputDataCy = [
      "checkboxInput-input",
      ...(checked ? ["checkboxInput-input.checked"] : []),
      ...(isIndeterminate ? ["checkboxInput-input.indeterminate"] : []),
      ...(appearance && appearance !== InputAppearance.Standard
        ? [`checkboxInput-input.${appearance}`]
        : [])
    ].join(" ");

    return (
      <FormFieldWrapper id={id} errors={errors} hintContent={hintContent}>
        {({ getValidationErrors, isValid, describedByIds, getHintContent }) => (
          <ToggleInput
            appearance={appearance}
            disabled={disabled}
            errorContent={getValidationErrors}
            hintContent={getHintContent}
            id={id}
            inputLabel={inputLabel}
            showInputLabel={showInputLabel}
            vertAlign={vertAlign}
            dataCy={parentDataCy}
          >
            <div
              className={cx(toggleInput, checkbox, {
                [toggleInputApperances[`${this.props.appearance}-focus`]]: this
                  .state.hasFocus,
                [toggleInputApperances[`${this.props.appearance}-active`]]:
                  checked || isIndeterminate,
                [toggleInputApperances["focus-active"]]:
                  checked && this.state.hasFocus,
                [toggleInputApperances.disabled]: disabled,
                [toggleInputApperances["disabled-active"]]: disabled && checked
              })}
            >
              {/* tslint:disable react-a11y-role-has-required-aria-props */}
              <input
                type="checkbox"
                id={id}
                className={visuallyHidden}
                checked={checked}
                disabled={disabled}
                value={value}
                aria-invalid={!isValid}
                aria-describedby={describedByIds}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                data-cy={inputDataCy}
                {...other}
              />
              {/* tslint:enable */}

              {(checked || isIndeterminate) && (
                <span
                  className={cx(checkboxIconContainer, display("inline-flex"))}
                >
                  <Icon
                    shape={
                      indeterminate ? SystemIcons.Minus : SystemIcons.Check
                    }
                    size={iconSizeXs}
                    color={white}
                  />
                </span>
              )}
            </div>
          </ToggleInput>
        )}
      </FormFieldWrapper>
    );
  }

  private handleFocus(e) {
    this.setState({ hasFocus: true });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  private handleBlur(e) {
    this.setState({ hasFocus: false });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
}

export default CheckboxInput;
