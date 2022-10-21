import * as React from "react";
import { cx } from "@emotion/css";
import FocusStyleManager from "../../shared/components/FocusStyleManager";
import { IconShapes } from "../../icon/components/Icon";
import IconPropAdapter from "../../icon/components/IconPropAdapter";
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
  buttonInverse,
  fullWidthButton,
  focusStyleByAppearance,
  getInverseMutedButtonStyles,
  getMutedButtonStyles,
  processingTextStyle
} from "../style";
import { LinkProps } from "../../link/types";
import UnstyledLink from "../../link/components/UnstyledLink";

export enum ButtonAppearances {
  Primary = "primary",
  Secondary = "secondary",
  Standard = "standard",
  Danger = "danger",
  Success = "success"
}

export interface ButtonProps extends LinkProps {
  /**
   * if the button triggers new content to appear (e.g.: modals and dropdowns)
   */
  ariaHaspopup?: boolean;
  /**
   * should be used if the button does not contain text children. For example: a button that is just an icon
   */
  ariaLabel?: string;
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
   * the function that is called when the button loses focus
   */
  onBlur?: (e?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * the function that is called when the button gets focus
   */
  onFocus?: (e?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * the function that is called when the button is "clicked" via cursor, touch, or keyboard
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

const ButtonBase = (props: ButtonBaseProps) => {
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
    type = "button",
    url,
    openInNewTab,
    ...other
  } = props;

  const buttonClassName = cx(
    buttonReset,
    button(appearance),
    buttonBase,
    textWeight("medium"),
    className,
    {
      [fullWidthButton]: isFullWidth,
      [buttonInverse(appearance)]: isInverse,
      [getMutedButtonStyles(appearance)]: disabled || isProcessing,
      [getInverseMutedButtonStyles(appearance)]:
        (disabled || isProcessing) && isInverse
    }
  );

  const handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  const getIconStart = icon => {
    return (
      <span className={cx(flexItem("shrink"), display("inherit"))}>
        <IconPropAdapter icon={icon} size="xs" color="inherit" />
      </span>
    );
  };

  const getIconEnd = icon => {
    return (
      Boolean(icon) && (
        <span
          className={cx(
            flexItem("shrink"),
            display("inherit"),
            padding("left", "xxs")
          )}
        >
          <IconPropAdapter icon={icon} size="xs" color="inherit" />
        </span>
      )
    );
  };

  const getButtonContent = () => {
    const { iconStart, iconEnd, isProcessing, children } = props;

    return iconStart || iconEnd ? (
      <span className={flex({ align: "center", justify: "center" })}>
        {iconStart && getIconStart(iconStart)}
        {children && (
          <span
            className={cx(flexItem("shrink"), padding("left", "xs"), {
              [processingTextStyle]: isProcessing
            })}
          >
            {children}
          </span>
        )}
        {iconEnd && getIconEnd(iconEnd)}
      </span>
    ) : (
      <span className={isProcessing ? processingTextStyle : ""}>
        {children}
      </span>
    );
  };

  const getButtonNode = () => {
    if (url) {
      return !disabled && !isProcessing ? (
        <UnstyledLink
          href={url}
          className={buttonClassName}
          onClick={handleClick}
          tabIndex={0}
          openInNewTab={openInNewTab}
          {...other}
        >
          {getButtonContent()}
        </UnstyledLink>
      ) : (
        <UnstyledLink
          className={buttonClassName}
          aria-disabled="true"
          tabIndex={-1}
          openInNewTab={openInNewTab}
          {...other}
        >
          {getButtonContent()}
        </UnstyledLink>
      );
    }

    return (
      <button
        className={buttonClassName}
        disabled={disabled || isProcessing}
        onClick={handleClick}
        tabIndex={0}
        type={type}
        {...other}
      >
        {getButtonContent()}
      </button>
    );
  };

  return (
    <FocusStyleManager
      focusEnabledClass={focusStyleByAppearance(appearance, isInverse)}
    >
      {getButtonNode()}
    </FocusStyleManager>
  );
};

export default React.memo(ButtonBase);
