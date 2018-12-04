import { cx } from "emotion";
import * as React from "react";

import { TextInput, TextInputAppearance, TextInputProps } from "./TextInput";

import { inputAppearances, inputContainer, iconEnd } from "../style";
import { flex, flexItem, padding } from "../../shared/styles/styleUtils";

export interface TextInputWithIconProps extends TextInputProps {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export interface TextInputWithIconState {
  hasFocus: boolean;
}

export class TextInputWithIcon extends TextInput<
  TextInputWithIconProps,
  TextInputWithIconState
> {
  public static defaultProps: Partial<TextInputWithIconProps> = {
    type: "text",
    appearance: TextInputAppearance.Standard,
    showInputLabel: true
  };
  constructor(props) {
    super(props);

    this.inputOnFocus = this.inputOnFocus.bind(this);
    this.inputOnBlur = this.inputOnBlur.bind(this);

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
    let inputProps = super.getInputElementProps();
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
          flexItem("shrink")
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
          padding("left", "xs"),
          flex({ align: "center", justify: "center" }),
          flexItem("shrink"),
          iconEnd
        )}
      >
        {this.props.iconEnd}
      </span>
    );
  }

  protected getInputContent() {
    const inputAppearance = this.getInputAppearance();
    return (
      <div
        className={cx(
          flex(),
          padding("left", "s"),
          padding("right", "s"),
          inputContainer,
          inputAppearances[inputAppearance]
        )}
      >
        {this.getIconStartContent()}
        {this.getInputElement([padding("all", "none")])}
        {this.getIconEndContent()}
      </div>
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
