import { fontSizes } from "../../typography";
import { getResponsiveStyle } from "../";
import { BreakpointConfig } from "../../breakpoints";

export type FontSize = BreakpointConfig<keyof typeof fontSizes>;

export const textSize = (size: FontSize) => {
  const fontSizeValue =
    typeof size !== "object"
      ? fontSizes[size]
      : Object.entries(size).reduce((acc, [breakpoint, value]) => {
          acc[breakpoint] = fontSizes[value];
          return acc;
        }, {});

  return getResponsiveStyle("font-size", fontSizeValue);
};
