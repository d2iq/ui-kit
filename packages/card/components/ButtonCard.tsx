import * as React from "react";
import Card, { CardProps } from "./Card";
import {
  buttonCard,
  buttonCardActive,
  buttonCardDisabled,
  buttonCardDisabledActive,
  buttonCardFocused,
  buttonCardFocusedActive
} from "../style";
import { cx } from "@emotion/css";

export interface ButtonCardProps extends CardProps {
  /**
   * Whether the component should look and act like a disabled element
   */
  disabled?: boolean;
  /**
   * Whether the component is in the "on" state
   */
  isActive?: boolean;
  /**
   * Whether the component is controlled by a checkbox or radio input
   */
  isInput?: boolean;
  /**
   * Whether the component's child input has focus
   */
  hasFocus?: boolean;
  /**
   * Allows custom styling
   */
  className?: string;
}

const ButtonCard = ({
  isActive,
  isInput,
  disabled,
  hasFocus,
  onClick,
  className,
  onKeyPress,
  "data-cy": dataCy = "buttonCard",
  ...other
}: ButtonCardProps) => {
  const tabIndex = disabled ? -1 : 0;
  // mimic native <button> keyboard behavior without using a <button>
  const keyPressClick = e => {
    if (onClick && (e.key === " " || e.key === "Enter")) {
      onClick(e);
    }
  };
  const handleKeyPress = e => {
    keyPressClick(e);
    if (onKeyPress) {
      onKeyPress(e);
    }
  };
  const buttonProps = !isInput
    ? {
        tabIndex,
        onKeyPress: handleKeyPress,
        onClick,
        role: "button",
        "aria-disabled": disabled,
        "aria-pressed": isActive
      }
    : {};

  return (
    <Card
      className={cx(
        buttonCard,
        {
          [buttonCardActive]: isActive,
          [buttonCardDisabled]: disabled,
          [buttonCardDisabledActive]: disabled && isActive,
          [buttonCardFocused]: hasFocus,
          [buttonCardFocusedActive]: hasFocus && isActive
        },
        className
      )}
      {...buttonProps}
      data-cy={dataCy}
      {...other}
    />
  );
};

export default React.memo(ButtonCard);
