import * as React from "react";
import { cx } from "@emotion/css";
import FocusStyleManager from "../../shared/components/FocusStyleManager";
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
  Success = "success",
  Warning = "warning"
}

export interface ButtonProps extends LinkProps {
  /**
   * If the button triggers new content to appear (e.g.: modals and dropdowns)
   */
  ariaHaspopup?: boolean;
  /**
   * Should be used if the button does not contain text children. For example: a button that is just an icon
   */
  ariaLabel?: string;
  children?: React.ReactNode | string;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Whether or not the button is enabled
   */
  disabled?: boolean;
  /**
   * The icon that appears before the button text
   */
  iconStart?: string;
  /**
   * The icon that appears after the button text
   */
  iconEnd?: string;
  /**
   * Whether the action the button was meant to do has completed
   */
  isProcessing?: boolean;
  /**
   * If the button should fill the width of it's container
   */
  isFullWidth?: boolean;
  /**
   * If the button is on a dark background
   */
  isInverse?: boolean;
  /**
   * The function that is called when the button loses focus
   */
  onBlur?: (e?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * The function that is called when the button gets focus
   */
  onFocus?: (e?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * The function that is called when the button is "clicked" via cursor, touch, or keyboard
   */
  onClick?: (e?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * The type of button matching the HTML "type" attribute on the <button> tag
   */
  type?: "button" | "reset" | "submit";
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

export interface ButtonBaseProps extends ButtonProps {
  appearance: ButtonAppearances;
}

const ButtonContent = ({ iconStart, iconEnd, isProcessing, children }) => {
  return iconStart || iconEnd ? (
    <span className={flex({ align: "center", justify: "center" })}>
      {iconStart && (
        <span className={cx(flexItem("shrink"), display("inherit"))}>
          <IconPropAdapter icon={iconStart} size="xs" color="inherit" />
        </span>
      )}
      {children && (
        <span
          className={cx(flexItem("shrink"), padding("left", "xs"), {
            [processingTextStyle]: isProcessing
          })}
        >
          {children}
        </span>
      )}
      {iconEnd && (
        <span
          className={cx(
            flexItem("shrink"),
            display("inherit"),
            padding("left", "xxs")
          )}
        >
          <IconPropAdapter icon={iconEnd} size="xs" color="inherit" />
        </span>
      )}
    </span>
  ) : (
    <span className={isProcessing ? processingTextStyle : ""}>{children}</span>
  );
};

const ButtonNode = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
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
      ariaHaspopup,
      ariaLabel,
      ...other
    }: ButtonBaseProps,
    ref
  ) => {
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

    if (url) {
      const enabled = !disabled && !isProcessing;
      return (
        <UnstyledLink
          href={enabled ? url : undefined}
          aria-disabled={!enabled}
          className={buttonClassName}
          onClick={handleClick}
          tabIndex={enabled ? 0 : -1}
          openInNewTab={openInNewTab}
          {...other}
        >
          <ButtonContent
            iconStart={iconStart}
            iconEnd={iconEnd}
            isProcessing={isProcessing}
          >
            {children}
          </ButtonContent>
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
        ref={ref}
        aria-haspopup={ariaHaspopup}
        aria-label={ariaLabel}
        {...other}
      >
        <ButtonContent
          iconStart={iconStart}
          iconEnd={iconEnd}
          isProcessing={isProcessing}
        >
          {children}
        </ButtonContent>
      </button>
    );
  }
);

const ButtonBase = (props: ButtonBaseProps) => {
  return (
    <FocusStyleManager
      focusEnabledClass={focusStyleByAppearance(
        props.appearance,
        props.isInverse
      )}
    >
      <ButtonNode {...props} />
    </FocusStyleManager>
  );
};

export default React.memo(ButtonBase);
