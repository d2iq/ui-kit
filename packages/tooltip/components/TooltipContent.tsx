import * as React from "react";
import { cx } from "emotion";
import { tooltip, getTooltipArrow } from "../style";
import { inverseColorMode, padding } from "../../shared/styles/styleUtils";
import { alignContainerWithCaretStyles } from "../../shared/styles/containerWithCaret";
import { BaseTooltipProps } from "./Tooltip";
import { Direction } from "../../dropdownable/components/Dropdownable";

export interface TooltipContentProps extends BaseTooltipProps {
  direction?: Direction;
  open: boolean;
}

class TooltipContent extends React.PureComponent<TooltipContentProps, {}> {
  public render() {
    const {
      direction = Direction.TopCenter,
      children,
      id,
      maxWidth,
      minWidth,
      open
    } = this.props;

    return (
      <>
        <div
          aria-hidden={!open}
          id={id}
          className={cx(
            tooltip,
            alignContainerWithCaretStyles(direction),
            inverseColorMode,
            padding("horiz", "s"),
            padding("vert", "xs")
          )}
          role="tooltip"
          style={{
            minWidth,
            maxWidth
          }}
          data-cy="tooltipContent"
        >
          {children}
        </div>
        <div className={getTooltipArrow(direction)} />
      </>
    );
  }
}

export default TooltipContent;
