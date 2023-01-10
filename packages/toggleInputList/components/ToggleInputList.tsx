import * as React from "react";
import { cx } from "@emotion/css";
import CheckboxInput from "../../checkboxInput/components/CheckboxInput";
import RadioInput from "../../radioInput/RadioInput";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import {
  listReset,
  fieldsetReset,
  legendReset,
  padding,
  visuallyHidden
} from "../../shared/styles/styleUtils";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { getLabelStyle } from "../../shared/styles/formStyles";
import { DangerText } from "../../index";

export interface ToggleInputProperties {
  appearance?: InputAppearance;
  inputLabel: string;
  id: string;
  value: string;
  disabled?: boolean;
  errors?: React.ReactNode[];
  hintContent?: React.ReactNode;
}

export interface ToggleInputListProps {
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Sets the contents for validation errors. This will be displayed below the list of options.
   */
  errors?: React.ReactNode[];
  /**
   * hintContent is text or a ReactNode that is displayed directly under the set of options with additional information about the expected input.
   */
  hintContent?: React.ReactNode;
  /**
   * Unique identifier used for the set of toggle inputs
   */
  id: string;
  /**
   * The set of options described as an array of objects
   */
  items: ToggleInputProperties[];
  /**
   * A label to help users understand what they're picking an option for
   */
  listLabel: React.ReactNode | string;
  /**
   * Callback for when a user makes a selection
   */
  onChange?: (selectedItems: string[], affectedItem?: string) => void;
  /**
   * Defaults to `true`, but can be set to `false` to visibly hide the content passed to `listLabel`. The `listLabel` should still be set even when hidden for accessibility support.
   */
  showListLabel?: boolean;
  /**
   * The subset of selected options
   */
  selectedItems?: string[];
  /**
   * How the text content of each option vertically aligns with it's related input
   */
  vertAlign?: "center" | "top";
  /**
   * If this entire input list is a required field
   */
  required?: boolean;
  /**
   * Sets the current appearance of the label component. This defaults to InputAppearance.Standard, but supports `InputAppearance.Error` & `InputAppearance.Success` appearances as well.
   */
  labelAppearance?: InputAppearance;
  /**
   * Whether the inputs are radio buttons
   */
  isRadioGroup?: boolean;
}

const ToggleInputList = ({
  id,
  className,
  showListLabel = true,
  vertAlign = "center",
  selectedItems = [],
  labelAppearance = InputAppearance.Standard,
  errors,
  hintContent,
  required,
  isRadioGroup,
  items,
  onChange,
  listLabel
}: ToggleInputListProps) => {
  const listLegendContent = () => {
    const requiredContent = required ? (
      <DangerText tag="span"> *</DangerText>
    ) : null;
    const hasError = labelAppearance === InputAppearance.Error;
    const legendClassName = showListLabel
      ? getLabelStyle(hasError)
      : cx(visuallyHidden);
    return (
      <legend
        className={cx(legendReset, legendClassName)}
        hidden={!showListLabel}
      >
        {listLabel}
        {requiredContent}
      </legend>
    );
  };

  const inputListItems = () => {
    return items.map(item => {
      const {
        id: itemId,
        value,
        inputLabel,
        appearance,
        disabled,
        errors,
        hintContent
      } = item;

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(getSelectedItems(value, e.target.checked), value);
        }
      };

      const InputComponent = isRadioGroup ? RadioInput : CheckboxInput;

      const inputProps = {
        appearance,
        checked: selectedItems.includes(value),
        disabled,
        errors,
        hintContent,
        id: itemId,
        inputLabel,
        name: id,
        onChange: handleChange,
        value,
        vertAlign
      };

      return (
        <li className={padding("top", "xs")} key={itemId}>
          <InputComponent {...inputProps} />
        </li>
      );
    });
  };

  const getSelectedItems = (value: string, checked: boolean) => {
    if (checked) {
      return isRadioGroup ? [value] : [...selectedItems, value];
    }

    return selectedItems.filter(selectedItem => selectedItem !== value);
  };

  return (
    <FormFieldWrapper errors={errors} hintContent={hintContent} id={id}>
      {({ describedByIds, getValidationErrors, isValid, getHintContent }) => (
        <fieldset
          className={cx(fieldsetReset, className)}
          aria-invalid={!isValid}
          aria-describedby={describedByIds}
          aria-required={required}
          role="listbox"
        >
          {listLegendContent()}
          <ul className={listReset}>{inputListItems()}</ul>
          {getHintContent}
          {getValidationErrors}
        </fieldset>
      )}
    </FormFieldWrapper>
  );
};

export default React.memo(ToggleInputList);
