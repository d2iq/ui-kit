import * as React from "react";
import { cx } from "@emotion/css";
import { tooltip, getTooltipArrow } from "../style";
import { inverseColorMode, padding } from "../../shared/styles/styleUtils";
import { alignContainerWithCaretStyles } from "../../shared/styles/containerWithCaret";
import { BaseTooltipProps } from "./Tooltip";
import { Direction } from "../../dropdownable/components/Dropdownable";

export interface TooltipContentProps extends BaseTooltipProps {
  /**
   * Set a direction for the tooltip to open toward
   */
  direction?: Direction;
  /**
   * Controls if opened by default
   */
  isOpen: boolean;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const TooltipContent = ({
  direction = Direction.TopCenter,
  children,
  id,
  maxWidth,
  minWidth,
  isOpen,
  className,
  "data-cy": dataCy = "tooltipContent"
}: TooltipContentProps) => {
  return (
    <>
      <div
        aria-hidden={!isOpen}
        id={id}
        className={cx(
          tooltip,
          alignContainerWithCaretStyles(direction),
          inverseColorMode,
          padding("horiz", "s"),
          padding("vert", "xs"),
          className
        )}
        role="tooltip"
        style={{
          minWidth,
          maxWidth: maxWidth || undefined
        }}
        data-cy={dataCy}
      >
        {children}
      </div>
      <div className={getTooltipArrow(direction)} />
    </>
  );
};

export default React.memo(TooltipContent);
