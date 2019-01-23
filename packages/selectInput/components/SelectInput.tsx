import * as React from "react";
import { cx } from "emotion";
import { select, selectIcon, selectContainer } from "../style";
import {
  inputContainer,
  inputAppearances,
  getLabelStyle
} from "../../shared/styles/formStyles";
import {
  inputReset,
  padding,
  visuallyHidden,
  display
} from "../../shared/styles/styleUtils";
import Icon from "../../icon/components/Icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";

export enum SelectInputAppearance {
  Standard = "standard",
  Error = "error",
  Success = "success"
}

export interface SelectOption {
  disabled?: boolean;
  label: string;
  value: string;
}

export interface SelectInputProps extends React.HTMLProps<HTMLSelectElement> {
  appearance: SelectInputAppearance;
  errors?: React.ReactNode[];
  hintContent?: React.ReactNode;
  id: string;
  inputLabel: React.ReactNode;
  options: SelectOption[];
  showInputLabel?: boolean;
}

export interface SelectInputState {
  hasFocus: boolean;
}

class SelectInput extends React.PureComponent<
  SelectInputProps,
  SelectInputState
> {
  public static defaultProps: Partial<SelectInputProps> = {
    appearance: SelectInputAppearance.Standard,
    showInputLabel: true
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
      errors,
      hintContent,
      id,
      inputLabel,
      options,
      showInputLabel,
      ...other
    } = this.props;
    delete other.onFocus;
    delete other.onBlur;

    const hasError = this.props.appearance === SelectInputAppearance.Error;

    return (
      <FormFieldWrapper id={id} errors={errors} hintContent={hintContent}>
        {({
          getValidationErrors,
          isValid,
          errorIds,
          hintContentId,
          getHintContent
        }) => (
          <div>
            <label
              className={cx(getLabelStyle(hasError), {
                [visuallyHidden]: !showInputLabel
              })}
              htmlFor={id}
            >
              {inputLabel}
            </label>
            <span
              className={cx(
                selectContainer,
                inputContainer,
                inputAppearances[this.getInputAppearance()],
                display("flex")
              )}
            >
              <select
                className={cx(inputReset, select, display("block"))}
                aria-invalid={!isValid}
                aria-describedby={this.getDescribedBy(hintContentId, errorIds)}
                id={id}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                {...other}
              >
                {options.map((option, key) => (
                  /* tslint:disable react-a11y-role-has-required-aria-props */
                  /* <option> tag doesn't need additional aria markup */
                  <option
                    key={key}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                  /* tslint:enable */
                ))}
              </select>
              <span className={cx(selectIcon, padding("horiz", "m"))}>
                <Icon
                  shape={SystemIcons.TriangleDown}
                  size={iconSizeXs}
                  color="inherit"
                />
              </span>
            </span>
            {getHintContent}
            {appearance === SelectInputAppearance.Error && getValidationErrors}
          </div>
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

  private getInputAppearance() {
    if (this.props.disabled) {
      return "disabled";
    }
    if (this.state.hasFocus) {
      return `${this.props.appearance}-focus`;
    }
    return this.props.appearance;
  }

  private getDescribedBy(hintContent, errors) {
    if (hintContent && errors) {
      return `${hintContent} ${errors}`;
    } else {
      return errors || hintContent;
    }
  }
}

export default SelectInput;
