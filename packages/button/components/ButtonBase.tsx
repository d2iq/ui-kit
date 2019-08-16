import * as React from "react";
import { cx } from "emotion";
import FocusStyleManager from "../../shared/components/FocusStyleManager";
import { IconShapes } from "../../icon/components/Icon";
import IconPropAdapter from "../../icon/components/IconPropAdapter";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";

import {
  buttonReset,
  textWeight,
  flex,
  flexItem,
  display,
  padding
} from "../../shared/styles/styleUtils";
import {
  button,
  buttonBase,
  getButtonInverseStyles,
  fullWidthButton,
  focusStyleByAppearance,
  getInverseMutedButtonStyles,
  getMutedButtonStyles,
  processingTextStyle
} from "../style";

export enum ButtonAppearances {
  Primary = "primary",
  Secondary = "secondary",
  Standard = "standard",
  Danger = "danger",
  Success = "success"
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode | string;
  /**
   * whether or not the button is enabled
   */
  disabled?: boolean;
  /**
   * the icon that appears before the button text
   */
  // TODO: only accept IconShapes when we make a big breaking change
  iconStart?: IconShapes | React.ReactElement<HTMLElement>;
  /**
   * the icon that appears after the button text
   */
  // TODO: only accept IconShapes when we make a big breaking change
  iconEnd?: IconShapes | React.ReactElement<HTMLElement>;
  /**
   * whether the action the button was meant to do has completed
   */
  isProcessing?: boolean;
  /**
   * if the button should fill the width of it's container
   */
  isFullWidth?: boolean;
  /**
   * if the button is on a dark background
   */
  isInverse?: boolean;
  /**
   * the function the button calls
   */
  onClick?: (e?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * the type of button - same as HTML "type" attribute on the <button> tag
   */
  type?: "button" | "reset" | "submit";
}

export interface ButtonBaseProps extends ButtonProps {
  appearance: ButtonAppearances;
  className?: string;
}

class ButtonBase extends React.PureComponent<ButtonBaseProps, {}> {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.buttonContentWithIcons = this.buttonContentWithIcons.bind(this);
  }

  public render() {
    const {
      appearance,
      children,
      className,
      disabled,
      iconStart,
      iconEnd,
      isInverse,
      isProcessing,
      isFullWidth,
      onClick,
      ...other
    } = this.props;

    return (
      <FocusStyleManager
        focusEnabledClass={focusStyleByAppearance(appearance, isInverse)}
      >
        <button
          className={cx(
            buttonReset,
            button(appearance),
            buttonBase,
            textWeight("medium"),
            className,
            {
              [fullWidthButton]: isFullWidth,
              [getButtonInverseStyles(appearance)]: isInverse,
              [getMutedButtonStyles(appearance)]: disabled || isProcessing,
              [getInverseMutedButtonStyles(appearance)]:
                (disabled || isProcessing) && isInverse
            }
          )}
          disabled={disabled || isProcessing}
          onClick={this.onClick}
          tabIndex={0}
          {...other}
        >
          {Boolean(iconStart) || Boolean(iconEnd) ? (
            this.buttonContentWithIcons()
          ) : (
            <span className={isProcessing ? processingTextStyle : ""}>
              {children}
            </span>
          )}
        </button>
      </FocusStyleManager>
    );
  }

  private onClick(e: React.SyntheticEvent<HTMLElement>) {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(e);
    }
  }

  private getIconStart(icon) {
    return (
      <span className={cx(flexItem("shrink"), display("inherit"))}>
        <IconPropAdapter icon={icon} size={iconSizeXs} color="inherit" />
      </span>
    );
  }

  private getIconEnd(icon) {
    return (
      Boolean(icon) && (
        <span
          className={cx(
            flexItem("shrink"),
            display("inherit"),
            padding("left", "xxs")
          )}
        >
          <IconPropAdapter icon={icon} size={iconSizeXs} color="inherit" />
        </span>
      )
    );
  }

  private buttonContentWithIcons() {
    const { iconStart, iconEnd, isProcessing, children } = this.props;
    return (
      <span className={flex({ align: "center", justify: "center" })}>
        {iconStart && this.getIconStart(iconStart)}
        {Boolean(children) && (
          <span
            className={cx(flexItem("shrink"), padding("left", "xs"), {
              [processingTextStyle]: isProcessing
            })}
          >
            {children}
          </span>
        )}
        {iconEnd && this.getIconEnd(iconEnd)}
      </span>
    );
  }
}

function forwardButtonRef(props, ref) {
  return <ButtonBase {...props} forwardedref={ref} />;
}

export default React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  forwardButtonRef
);
