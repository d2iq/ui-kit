import { css } from "react-emotion";
import { getResponsiveStyle } from "../";
import { BreakpointConfig } from "../../breakpoints";

export interface FlexboxProperties {
  /**
   * The alignment of the `FlexItem` children. Refers to vertical alignment when `direction` is "row", and refers to horizontal alignment when `direction` is "column". Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  align?: BreakpointConfig<React.CSSProperties["alignItems"]>;
  /**
   * The justification of the `FlexItem` children. Refers to horizontal justification when `direction` is "row", and refers to vertical justification when `direction` is "column". Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  justify?: BreakpointConfig<React.CSSProperties["justifyContent"]>;
  /**
   * The direction the `FlexItem` children are laid out in. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  direction?: BreakpointConfig<React.CSSProperties["flexDirection"]>;
  /**
   * How `FlexItem` children should handle wrapping. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  wrap?: BreakpointConfig<React.CSSProperties["flexWrap"]>;
}

const flexStrategies = {
  grow: css`
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    width: auto;
  `,
  shrink: css`
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    width: initial;
  `
};

export const flex = (
  flexProps: FlexboxProperties = {
    align: "flex",
    direction: "row",
    wrap: "nowrap",
    justify: "flex-start"
  }
) => {
  const { direction } = flexProps;
  const isColumn = direction === "column" || direction === "column-reverse";
  const getResponsiveColumnStyles = (
    valueForColumnDirection,
    valueForOtherDirections = "auto"
  ) => {
    if (isColumn) {
      return valueForColumnDirection;
    } else if (typeof direction === "object") {
      return Object.entries(direction).reduce((acc, [breakpoint, config]) => {
        acc[breakpoint] = config.includes("column")
          ? valueForColumnDirection
          : valueForOtherDirections;

        return acc;
      }, {});
    } else {
      return null;
    }
  };

  const childWidth = getResponsiveColumnStyles("100%");
  const height = getResponsiveColumnStyles("100%");

  // Note: the `min-height: 0` rule handles an issue with
  // flex containers that have `overflow: {auto|hidden|scroll}`
  // in Firefox and IE11
  return css`
    ${getResponsiveStyle("align-items", flexProps.align)};
    ${getResponsiveStyle("height", height)};
    ${getResponsiveStyle("flex-direction", flexProps.direction)};
    ${getResponsiveStyle("flex-wrap", flexProps.wrap)};
    ${getResponsiveStyle("justify-content", flexProps.justify)};
    box-sizing: border-box;
    display: flex;
    min-height: 0;

    > div {
      ${getResponsiveStyle("width", childWidth)};
    }
  `;
};

export const flexItem = (flexStrategy: "grow" | "shrink") =>
  css`
    box-sizing: border-box;
    ${flexStrategies[flexStrategy]};
  `;
