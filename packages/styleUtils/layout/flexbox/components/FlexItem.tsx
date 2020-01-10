import * as React from "react";
import { css } from "emotion";
import {
  atMediaUp,
  BreakpointConfig
} from "../../../../shared/styles/breakpoints";
import { getResponsiveStyle } from "../../../../shared/styles/styleUtils";
import { flexItem } from "../../../../shared/styles/styleUtils/layout/flexbox";

type FlexStrategy = "shrink" | "grow";

export interface FlexItemProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Whether the flex item should grow or shrinkwrap to it's children. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  flex?: BreakpointConfig<FlexStrategy>;
  /**
   * The rate at which a flex item should grow. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  growFactor?: BreakpointConfig<React.CSSProperties["flexGrow"]>;
  /**
   * The position at which a flex item should be visually rendered. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  order?: BreakpointConfig<React.CSSProperties["order"]>;
}

const getResponsiveFlexItemStyles = flexVal =>
  typeof flexVal !== "object"
    ? flexItem(flexVal)
    : Object.keys(flexVal).map(breakpoint =>
        atMediaUp[breakpoint](flexItem(flexVal[breakpoint]))
      );

const FlexItem = (props: FlexItemProps) => {
  return (
    <div
      className={css`
        ${getResponsiveFlexItemStyles(props.flex)};
        ${getResponsiveStyle("flex-grow", props.growFactor)};
        ${getResponsiveStyle("order", props.order)};
        ${props.className};
      `}
      data-cy="flexItem"
    >
      {props.children}
    </div>
  );
};

FlexItem.defaultProps = {
  flex: "grow"
};

export default FlexItem;
