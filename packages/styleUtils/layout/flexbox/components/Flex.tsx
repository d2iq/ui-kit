import * as React from "react";
import { css, cx } from "@emotion/css";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";
import {
  FlexboxProperties,
  flex,
  applyFlexItemGutters
} from "../../../../shared/styles/styleUtils/layout/flexbox";

export interface FlexProps extends FlexboxProperties {
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * The size of the space between each `FlexItem` child. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  gutterSize?: SpaceSize;
  /**
   * Which HTML tag to render the component with
   */
  tag?: keyof React.ReactHTML;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Flex = ({
  children,
  className,
  gutterSize = "none",
  tag = "div",
  "data-cy": dataCy = "flex",
  ...flexboxProperties
}: FlexProps): JSX.Element => {
  const {
    direction = "row",
    align = "flex-start",
    wrap = "nowrap",
    justify = "flex-start",
    gap = "inherit"
  } = flexboxProperties;
  const FlexEl = tag;

  return (
    <FlexEl
      className={cx(
        css`
          ${flex({ align, wrap, justify, ...flexboxProperties })};
          ${applyFlexItemGutters(direction, gutterSize, gap)};
        `,
        className
      )}
      data-cy={dataCy}
    >
      {children}
    </FlexEl>
  );
};

export default Flex;
