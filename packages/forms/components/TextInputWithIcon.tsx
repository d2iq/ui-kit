import { cx } from "emotion";
import * as React from "react";

import { TextInput, TextInputAppearance, TextInputProps } from "./TextInput";

import { inputAppearances, inputContainer, iconEnd } from "../style";
import { flex, flexItem, padding } from "../../shared/styles/styleUtils";

export interface TextInputWithIconProps extends TextInputProps {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export class TextInputWithIcon extends TextInput<TextInputWithIconProps> {
  public static defaultProps: Partial<TextInputWithIconProps> = {
    type: "text",
    appearance: TextInputAppearance.Standard,
    showInputLabel: true
  };
  constructor(props) {
    super(props);
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
}

export default TextInputWithIcon;
