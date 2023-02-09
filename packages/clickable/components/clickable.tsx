import { cx } from "@emotion/css";
import * as React from "react";
import { outline, pointer } from "../style";

export interface ClickableProps {
  /**
   * Children should be a HTML element.
   */
  children: React.ReactElement<HTMLElement> & React.ReactNode;
  /**
   * Action is a event handler for the onClick and onKeyDown events
   */
  action?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * The tabIndex is passed down and is the same as the native tabIndex
   */
  tabIndex?: number | string;
  /**
   * ARIA role of the clickable element
   */
  role?: string;
  /**
   * Whether or not to reset the :focus outline style
   */
  disableFocusOutline?: boolean;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

export const Clickable = ({
  tabIndex = -1,
  role = "button",
  disableFocusOutline = false,
  children,
  action,
  "data-cy": dataCy
}: ClickableProps) => {
  const { className = "" } = children.props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    // action can be undefined from components SidebarItem and SidebarSubMenuItem
    if (action && (event.key === " " || event.key === "Enter")) {
      action(event);
    }
  };

  return React.cloneElement(React.Children.only(children), {
    onClick: action,
    className: cx(className, pointer, { [outline]: disableFocusOutline }),
    role,
    tabIndex,
    onKeyDown: handleKeyDown,
    "data-cy": dataCy
  });
};

export default React.memo(Clickable);
