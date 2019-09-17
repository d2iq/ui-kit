import { cx } from "emotion";
import * as React from "react";

import { TextInput, TextInputProps } from "./TextInput";

import {
  getInputAppearanceStyle,
  inputContainer,
  getIconAppearanceStyle
} from "../../shared/styles/formStyles";
import { flex, flexItem, flush, padding } from "../../shared/styles/styleUtils";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import { InputAppearance } from "../../shared/types/inputAppearance";

export interface TextInputWithIconProps extends TextInputProps {
  /**
   * icon to display at the start of this TextInput.
   */
  iconStart?: React.ReactNode;
  /**
   * icon to display at the end of this TextInput.
   */
  iconEnd?: React.ReactNode;
}

export interface TextInputWithIconState {
  hasFocus?: boolean;
}

export class TextInputWithIcon<
  P extends TextInputWithIconProps,
  S extends TextInputWithIconState
> extends TextInput<P, S> {
  public static defaultProps: Partial<TextInputWithIconProps> = {
    type: "text",
    appearance: InputAppearance.Standard,
    showInputLabel: true
  };
  constructor(props) {
    super(props);

    this.inputOnFocus = this.inputOnFocus.bind(this);
    this.inputOnBlur = this.inputOnBlur.bind(this);

    // I can't find a workaround for this issue:
    // https://stackoverflow.com/questions/51074355/cannot-assign-to-state-because-it-is-a-constant-or-a-read-only-property
    // @ts-ignore
    this.state = {
      hasFocus: false
    };
  }

  protected getInputAppearance(): string {
    if (this.props.disabled) {
      return "disabled";
    }
    if (this.state.hasFocus) {
      return `${this.props.appearance}-focus`;
    }
    return this.props.appearance;
  }

  protected getInputElementProps() {
    let baseProps = super.getInputElementProps();
    const {
      iconStart,
      iconEnd,
      ...inputProps
    } = baseProps as TextInputWithIconProps;
    inputProps.onFocus = this.inputOnFocus;
    inputProps.onBlur = this.inputOnBlur;
    return inputProps;
  }

  protected getIconStartContent() {
    if (!this.props.iconStart) {
      return null;
    }
    return (
      <span
        className={cx(
          padding("right", "xs"),
          flex({ align: "center", justify: "center" }),
          flexItem("shrink"),
          getIconAppearanceStyle(this.getInputAppearance())
        )}
      >
        {this.props.iconStart}
      </span>
    );
  }

  protected getIconEndContent() {
    if (!this.props.iconEnd) {
      return null;
    }
    return (
      <span
        className={cx(
          flex({ align: "center", justify: "center" }),
          flexItem("shrink"),
          flush("left"),
          getIconAppearanceStyle(this.getInputAppearance())
        )}
      >
        {this.props.iconEnd}
      </span>
    );
  }

  protected getInputContent() {
    const inputAppearance = this.getInputAppearance();
    return (
      <FormFieldWrapper
        id={this.props.id}
        errors={this.props.errors}
        hintContent={this.props.hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <div>
            <div
              className={cx(
                flex(),
                padding("left", "s"),
                padding("right", "s"),
                inputContainer,
                getInputAppearanceStyle(inputAppearance)
              )}
            >
              {this.getIconStartContent()}
              {this.getInputElement(
                [flexItem("grow"), padding("all", "none")],
                isValid,
                describedByIds
              )}
              {this.getIconEndContent()}
            </div>
            {getHintContent}
            {getValidationErrors}
          </div>
        )}
      </FormFieldWrapper>
    );
  }

  protected inputOnFocus(e) {
    this.setState({ hasFocus: true });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  protected inputOnBlur(e) {
    this.setState({ hasFocus: false });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
}

export default TextInputWithIcon;
