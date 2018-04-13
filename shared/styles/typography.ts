// Include core typography, helpers and etc in this file

export interface IFonts {
  [fontName: string]: string;
}

/**
 * Return shared font families
 *
 * @returns font mapping
 */
export const coreFonts = (): IFonts => {
  return {
    fontFamilySansSerif:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontFamilySerif:
      "didot, 'Didot LT STD', 'Hoefler Text', garamond, 'Times New Roman', serif",
    fontFamilyMonospace:
      "'Menlo', 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', 'Monaco', 'Consolas', monospace"
  };
};
