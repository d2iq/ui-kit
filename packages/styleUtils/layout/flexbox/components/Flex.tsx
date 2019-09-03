import * as React from "react";
import { css } from "emotion";
import { FlexItemProps } from "./FlexItem";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";
import {
  FlexboxProperties,
  flex,
  applyFlexItemGutters
} from "../../../../shared/styles/styleUtils/layout/flexbox";

interface FlexProps extends FlexboxProperties {
  /**
   * The size of the space between each `FlexItem` child. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  gutterSize?: SpaceSize;
  children:
    | Array<React.ReactElement<FlexItemProps> | null>
    | React.ReactElement<FlexItemProps>;
}

const Flex = (props: FlexProps) => {
  const { children, gutterSize, ...flexboxProperties } = props;

  return (
    <div
      className={css`
        ${flex({ ...flexboxProperties })};
        ${applyFlexItemGutters(flexboxProperties.direction, gutterSize)};
      `}
      data-cy="flex"
    >
      {children}
    </div>
  );
};

Flex.defaultProps = {
  align: "flex-start",
  direction: "row",
  wrap: "nowrap",
  justify: "flex-start",
  gutterSize: "none"
};

export default Flex;
