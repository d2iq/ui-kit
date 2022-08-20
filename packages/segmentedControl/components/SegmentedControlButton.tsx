import * as React from "react";
import { cx } from "@emotion/css";
import nextId from "react-id-generator";
import {
  segmentedControlButton,
  segmentedControlButtonActive,
  staticKeyboardFocusClassname,
  segmentedControlButtonInner
} from "../style";
import { visuallyHidden } from "../../shared/styles/styleUtils";
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
  children?: React.ReactNode;
}

const SegmentedControlButton = React.memo(
  ({
    id = nextId("segmentedControlButton-"),
    isActive,
    onChange,
    name,
    value,
    tooltipContent,
    children
  }: SegmentedControlButtonProps) => {
    return (
      <FocusStyleManager focusEnabledClass={staticKeyboardFocusClassname}>
        <label
          className={cx(segmentedControlButton, {
            [segmentedControlButtonActive]: isActive
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
          {tooltipContent ? (
            <Tooltip
              id={`${id}-tooltip`}
              trigger={
                <div className={segmentedControlButtonInner}>{children}</div>
              }
            >
              {tooltipContent}
            </Tooltip>
          ) : (
            <div className={segmentedControlButtonInner}>{children}</div>
          )}
        </label>
      </FocusStyleManager>
    );
  }
);

export default SegmentedControlButton;
