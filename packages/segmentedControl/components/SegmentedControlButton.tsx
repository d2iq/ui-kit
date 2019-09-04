import * as React from "react";
import { cx } from "emotion";
import shortid from "shortid";
import {
  segmentedControlButton,
  segmentedControlButtonActive,
  staticKeyboardFocusClassname,
  segmentedControlButtonInner
} from "../style";
import { visuallyHidden, display } from "../../shared/styles/styleUtils";
import FocusStyleManager from "../../shared/components/FocusStyleManager";
import { Tooltip } from "../../tooltip";

export interface SegmentedControlButtonProps {
  /**
   * Unique identifier used for the input button
   */
  id?: string;
  /**
   * Whether the button has been selected
   */
  isActive?: boolean;
  /**
   * The name passed to the input. Shared by all inputs in the segmented control
   */
  name?: string;
  /**
   * Callback for when a user makes a selection. Use the `onSelect` prop on the `SegmentedControl` instead, unless there is some extenuating circumstance.
   */
  onChange?: (e: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * The value of the input
   */
  value: string;
  /**
   * Content that appears in a Tooltip when a users hovers the button
   */
  tooltipContent?: React.ReactNode;
}

const SegmentedControlButton: React.SFC<
  SegmentedControlButtonProps
> = props => {
  const {
    id = shortid.generate(),
    isActive,
    onChange,
    name,
    value,
    tooltipContent,
    children
  } = props;
  const segmentChildren = tooltipContent ? (
    <Tooltip
      id={`${id}-tooltip`}
      trigger={<div className={segmentedControlButtonInner}>{children}</div>}
    >
      {tooltipContent}
    </Tooltip>
  ) : (
    <div className={segmentedControlButtonInner}>{children}</div>
  );

  return (
    <React.Fragment>
      {/*
        tslint:disable react-a11y-role-has-required-aria-props
        This rule is asking for a `aria-checked` attribute on the input element.
        We're already setting `checked`, so this is redundant and unnecessary.
      */}
      <FocusStyleManager focusEnabledClass={staticKeyboardFocusClassname}>
        <label
          className={cx(display("inline-block"), segmentedControlButton, {
            [segmentedControlButtonActive]: props.isActive
          })}
          data-cy="segmentedControlButton"
          htmlFor={id}
        >
          <input
            className={visuallyHidden}
            id={id}
            type="radio"
            name={name}
            value={value}
            checked={isActive}
            onChange={onChange}
          />
          {segmentChildren}
        </label>
      </FocusStyleManager>
    </React.Fragment>
  );
};

export default SegmentedControlButton;
