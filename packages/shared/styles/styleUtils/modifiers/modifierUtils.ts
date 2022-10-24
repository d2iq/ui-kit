import { css } from "@emotion/css";
import * as CSS from "csstype";
import {
  spaceXxs,
  spaceXs,
  spaceS,
  spaceM,
  spaceL,
  spaceXl,
  spaceXxl
} from "../../../../design-tokens/build/js/designTokens";
import { getResponsiveSpacingStyle } from "../layout/handleResponsiveStyle";
import { BreakpointConfig } from "../../breakpoints";

/**
 * This file contains functions that modify our design tokens,
 * and creates sets of design token variables used by components.
 */

type CSSPropertyKeys = keyof CSS.PropertiesHyphen;
export type BoxSides =
  | "all"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "horiz"
  | "vert";
export type SpaceSizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none";
export type SpaceSize = BreakpointConfig<SpaceSizes>;

/**
 * Can be used to set `spacingSize` and `gutterSize` properties.
 * The values align with the related spacing design tokens.
 */
export const spaceSizes = {
  xxs: spaceXxs,
  xs: spaceXs,
  s: spaceS,
  m: spaceM,
  l: spaceL,
  xl: spaceXl,
  xxl: spaceXxl,
  none: 0
};

/**
 * Allows for properties to apply spacing to the sides passed in.
  - `horiz` adds horizontal space on the left and right
  - `vert` adds vertical space on the top and bottom
  - `all` adds space on all sides
 *
*/
export const boxSpacing = (
  property: "margin" | "padding",
  side: BoxSides,
  spaceSize: SpaceSize = "m"
) => {
  switch (side) {
    case "all":
      return getResponsiveSpacingStyle(property, spaceSize);
    case "horiz":
      return css`
        ${getResponsiveSpacingStyle(
          `${property}-left` as CSSPropertyKeys,
          spaceSize
        )};
        ${getResponsiveSpacingStyle(
          `${property}-right` as CSSPropertyKeys,
          spaceSize
        )};
      `;
    case "vert":
      return css`
        ${getResponsiveSpacingStyle(
          `${property}-top` as CSSPropertyKeys,
          spaceSize
        )};
        ${getResponsiveSpacingStyle(
          `${property}-bottom` as CSSPropertyKeys,
          spaceSize
        )};
      `;
    case undefined:
      return;
    default:
      return css`
        ${getResponsiveSpacingStyle(
          `${property}-${side}` as CSSPropertyKeys,
          spaceSize
        )};
      `;
  }
};
