import * as React from "react";
import { css, cx } from "@emotion/css";
import { gridColumnTemplate } from "../style";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";
import {
  listReset,
  getResponsiveSpacingStyle
} from "../../../../shared/styles/styleUtils";
import { BreakpointConfig } from "../../../../shared/styles/breakpoints";

export interface GridListProps {
  /**
   * Sets the amount of grid columns explicitly. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints. If not set, automatic responsive grid styling will be in effect.
   */
  columnCount?: BreakpointConfig<number>;
  /**
   * The size of the space (gap) between each list item. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints. The default size is set to medium ("m" = 16px);
   */
  gutterSize?: SpaceSize;
  /**
   * Which HTML list tag to render the component with.
   */
  tag?: "ul" | "ol";
  children:
    | Array<React.ReactElement<HTMLLIElement>>
    | React.ReactElement<HTMLLIElement>;
  /**
   * Additional styles to extend the component.
   */

  className?: string;

  /**
   * Human-readable selector used for writing tests.
   */
  ["data-cy"]?: string;
  /**
   * Centers grid children by implementing `place-items: center;` Optimal for grids that could have a state with only 1 grid child.
   */
  centerItems?: boolean;
}

const GridList = ({
  children,
  columnCount,
  gutterSize = "m",
  tag = "ul",
  centerItems = false,
  className,
  "data-cy": dataCy = "gridList"
}: GridListProps) => {
  const GridListEl = tag;

  const gridStyles = css`
    display: grid;
    ${getResponsiveSpacingStyle("grid-gap", gutterSize)};
    ${gridColumnTemplate(columnCount)};
    ${listReset};
    place-items: ${centerItems ? "center" : "normal"};
  `;

  return (
    <GridListEl className={cx(gridStyles, className)} data-cy={dataCy}>
      {children}
    </GridListEl>
  );
};

export default GridList;
