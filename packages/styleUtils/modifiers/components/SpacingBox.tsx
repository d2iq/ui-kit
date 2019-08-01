import * as React from "react";
import { cx } from "emotion";
import Box, { BoxProps } from "./Box";
import {
  BoxSides,
  SpaceSize
} from "../../../shared/styles/styleUtils/modifiers/modifierUtils";
import { padding } from "../../../shared/styles/styleUtils";

interface SpacingBoxProps extends BoxProps {
  /**
   * Which side (or sides) the spacing should be on
   */
  side?: BoxSides;
  /**
   * The size of the space to apply. It can set 1 spacing size for all breakpoints, or it can be used to set different spacing values at different viewport width breakpoints
   */
  spacingSize?: SpaceSize;
}

const SpacingBox = (props: SpacingBoxProps) => {
  const { side, spacingSize, className, ...other } = props;

  return (
    <Box
      className={cx(className, padding(side, spacingSize))}
      dataCy="spacingBox"
      {...other}
    />
  );
};

SpacingBox.defaultProps = {
  side: "all",
  spacingSize: "m",
  tag: "div"
};

export default SpacingBox;
