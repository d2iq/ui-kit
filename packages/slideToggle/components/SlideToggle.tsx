import * as React from "react";
import { cx } from "@emotion/css";
import {
  flex,
  flexItem,
  visuallyHidden,
  display,
  tintContent,
  tintContentSecondary,
  vAlignChildren
} from "../../shared/styles/styleUtils";

import {
  themeError,
  themeSuccess,
  themeBgPrimary
} from "../../design-tokens/build/js/designTokens";
import { InputAppearance } from "../../shared/types/inputAppearance";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { Icon } from "../../icon";
import {
  checkContainer,
  toggle,
  toggleRound,
  toggleContainer,
  toggleInputApperances,
  toggleInputLabel,
  toggleInputFeedbackText
} from "../style";

export interface SlideToggleProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * Sets the current appearance of the input component. This defaults to InputAppearance.Standard, but supports `InputAppearance.Error` & `InputAppearance.Success` appearances as well.
   */
  appearance?: InputAppearance;
  /**
   * Whether or not the input is checked
   */
  checked?: boolean;
  /**
   * Unique identifier used for the input element
   */
  id: string;
  /**
   * The text or node content that appears next to the input
   */
  inputLabel: React.ReactNode | string;
  /**
   * Defaults to `true`, but can be set to `false` to visibly hide the content passed to `inputLabel`. The `inputLabel` should still be set even when hidden for accessibility support.
   */
  showInputLabel?: boolean;
  /**
   * The value being toggled
   */
  value?: string;
  /**
   * How the text content vertically aligns with the input
   */
  vertAlign?: "center" | "top";
  /**
   * hintContent is text or a ReactNode that is displayed directly under the input with additional information about the expected input.
   */
  hintContent?: React.ReactNode;
  /**
   * Sets the contents for validation errors. This will be displayed below the input element. Errors are only visible when the `TextInput` appearance is also set to `TextInputAppearance.Error`.
   */
  errors?: React.ReactNode[];
}

const SlideToggle: React.FC<React.PropsWithRef<SlideToggleProps>> = props => {
  const {
    appearance,
    children,
    disabled,
    hintContent,
    id,
    inputLabel,
    showInputLabel,
    vertAlign,
    checked,
    value,
    errors,
    onBlur,
    onFocus,
    ...other
  } = props;
  const inputType = "SlideToggle";
  const inputDataCy = [
    `${inputType}-input`,
    ...(checked ? [`${inputType}-input.checked`] : []),
    ...(appearance && appearance !== InputAppearance.Standard
      ? [`${inputType}-input.${appearance}`]
      : [])
  ].join(" ");
  const parentDataCy = [
    `${inputType}`,
    ...(checked ? [`${inputType}.checked`] : []),
    ...(appearance && appearance !== InputAppearance.Standard
      ? [`${inputType}.${appearance}`]
      : [])
  ].join(" ");
  const [hasFocus, setHasFocus] = React.useState<boolean>(false);
  const handleFocus = e => {
    setHasFocus(true);

    onFocus?.(e);
  };

  const handleBlur = e => {
    setHasFocus(false);

    onBlur?.(e);
  };

  return (
    <FormFieldWrapper id={id} errors={errors} hintContent={hintContent}>
      {({ getValidationErrors, isValid, describedByIds, getHintContent }) => (
        <div className={vAlignChildren} data-cy={parentDataCy}>
          <label
            className={cx(
              flex({
                align: vertAlign === "top" ? "flex-start" : "center"
              }),
              display("inline-flex")
            )}
            htmlFor={id}
          >
            <div className={cx(flexItem("shrink"), display("inherit"))}>
              <>
                <div className={cx(toggleContainer)}>
                  {/* tslint:disable react-a11y-role-has-required-aria-props */}
                  <input
                    type={inputType}
                    id={id}
                    className={visuallyHidden}
                    checked={checked}
                    disabled={disabled}
                    value={value}
                    aria-invalid={!isValid}
                    aria-describedby={describedByIds}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-cy={inputDataCy}
                    {...other}
                  />
                  <div
                    className={cx(toggle, toggleRound, {
                      [toggleInputApperances[`${appearance}-focus`]]: hasFocus,
                      [toggleInputApperances[`${appearance}-active`]]: checked,
                      [toggleInputApperances["focus-active"]]:
                        checked && hasFocus,
                      [toggleInputApperances.disabled]: disabled,
                      [toggleInputApperances["disabled-active"]]:
                        disabled && checked
                    })}
                  >
                    {checked && (
                      <span className={checkContainer}>
                        <Icon
                          shape={SystemIcons.Check}
                          size="xxs"
                          color={themeBgPrimary}
                        />
                      </span>
                    )}
                  </div>
                </div>
              </>
            </div>
            <div
              className={cx(flexItem("grow"), toggleInputLabel, {
                [visuallyHidden]: !showInputLabel,
                [tintContent(themeError)]: appearance === InputAppearance.Error,
                [tintContent(themeSuccess)]:
                  appearance === InputAppearance.Success,
                [tintContentSecondary]: disabled
              })}
            >
              {inputLabel}
            </div>
          </label>
          {(getHintContent || getValidationErrors) && (
            <div className={toggleInputFeedbackText}>
              {getHintContent}
              {appearance === InputAppearance.Error && getValidationErrors}
            </div>
          )}
        </div>
      )}
    </FormFieldWrapper>
  );
};

SlideToggle.defaultProps = {
  appearance: InputAppearance.Standard,
  showInputLabel: true,
  vertAlign: "center"
};

export default SlideToggle;
