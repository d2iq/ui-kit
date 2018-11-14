// Include core typography, helpers and etc in this file
import {
  fontSizeS,
  fontSizeM,
  fontWeightNormal,
  fontWeightMedium
} from "../../design-tokens/build/js/designTokens";

export interface Fonts {
  [fontName: string]: string;
}

/**
 * Return shared font families
 *
 * @returns font mapping
 */
export const coreFonts = (): Fonts => {
  return {
    fontFamilySansSerif:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontFamilySerif:
      "didot, 'Didot LT STD', 'Hoefler Text', garamond, 'Times New Roman', serif",
    fontFamilyMonospace:
      "'Menlo', 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', 'Monaco', 'Consolas', monospace"
  };
};

export const fontSizes = {
  small: fontSizeS,
  default: fontSizeM
};

export const fontWeights = {
  normal: fontWeightNormal,
  medium: fontWeightMedium
};
