import { css } from "@emotion/css";
import {
  themeTextColorPrimary,
  themeTextColorPrimaryInverted,
  themeTextColorSecondary,
  themeTextColorSecondaryInverted
} from "../../../../design-tokens/build/js/designTokens";

export const tintText = (color: React.CSSProperties["color"]) => css`
  color: ${color};
`;

export const tintSVG = (color: React.CSSProperties["fill"]) => css`
  fill: ${color};
`;

export const tintContent = (
  color: React.CSSProperties["color"] | React.CSSProperties["fill"]
) => css`
  ${tintText(color)};
  ${tintSVG(color)};
`;

// .inverseColorMode styles are set globally
// in global.ts
export const inverseColorMode = "inverseColorMode";

export const tintContentPrimary = css`
  ${tintContent(themeTextColorPrimary)};

  .${inverseColorMode} &,
  &.${inverseColorMode} {
    ${tintContent(themeTextColorPrimaryInverted)};
  }
`;

export const tintContentSecondary = css`
  ${tintContent(themeTextColorSecondary)};

  .${inverseColorMode} &,
  &.${inverseColorMode} {
    ${tintContent(themeTextColorSecondaryInverted)};
  }
`;

/**
 * This function retrieves the value of a CSS variable
 * from the document root or a provided fallback value.
 *
 * @param {string} cssVar - The CSS variable in the format of "var(--variable-name, fallback-value)"
 *
 * @returns {string} - Returns the computed value of the CSS variable if it's defined in the document root.
 *
 * If the variable is not defined or the function is called outside of a browser context, it returns the fallback value provided.
 */
export const getCSSVarValue = cssVar => {
  // Get the content between the parentheses in "var()"
  // and split the args from a string to an array
  const cssVarArgsString = cssVar.match(/\(([^)]+)\)/)[1];
  const cssVarArgs = cssVarArgsString.replace(/\s/g, "").split(",");

  if (typeof window === "undefined") {
    return cssVarArgs[1];
  }

  if (document?.documentElement !== null) {
    // If there's a custom property defined on :root (<html>), return that.
    // Otherwise, return the fallback value.
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue(cssVarArgs[0])
        .trim() || cssVarArgs[1]
    );
  }
};
