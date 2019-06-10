import relativeLuminance from "relative-luminance";

export const isValidHex = (color: string) =>
  /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);

export const hexToRgbArr = (hex: string): number[] => {
  let color;
  if (isValidHex(hex)) {
    color = hex.substring(1).split("");
    if (color.length === 3) {
      color = [color[0], color[0], color[1], color[1], color[2], color[2]];
    }
    color = "0x" + color.join("");
    return (
      // tslint:disable
      [(color >> 16) & 255, (color >> 8) & 255, color & 255]
      // tslint:enable
    );
  }
  return [0, 0, 0];
};

export const rgbToHex = (rgbArr: number[]): string => {
  const isValidRgbArr =
    rgbArr.length === 3 &&
    rgbArr.some(channel => channel > -1 && channel < 256);
  if (isValidRgbArr) {
    return rgbArr.reduce((acc, curr) => {
      let pair = Math.round(curr).toString(16);
      if (pair.length < 2) {
        pair = `0${pair}`;
      }
      acc += pair;

      return acc;
    }, "#");
  } else {
    return "#000000";
  }
};

export const hexToRgbA = (hex: string, alpha: string | number = 1): string => {
  if (isValidHex(hex)) {
    return `rgba(${hexToRgbArr(hex).join(",")},${alpha})`;
  }
  return "rgba(0,0,0,0)";
};

const getLuminance = (luminanceVal1: number, luminanceVal2: number) => {
  const l1 = Math.max(luminanceVal1, luminanceVal2);
  const l2 = Math.min(luminanceVal1, luminanceVal2);

  // https://www.w3.org/TR/WCAG20/#contrast-ratiodef
  return (l1 + 0.05) / (l2 + 0.05);
};

// TODO: when/if we start using rgb/rgba colors in
// design-tokens, write getHexContrast function that can get
// rgb/rgba contrast as well
export const getHexContrast = (color1: string, color2: string) =>
  getLuminance(
    relativeLuminance(hexToRgbArr(color1)),
    relativeLuminance(hexToRgbArr(color2))
  );

// TODO: when/if we start using rgb/rgba colors in
// design-tokens, write getBrightness function that can get
// rgb/rgba brightness as well
const getHexBrightness = (hex: string) => {
  const rgbArr = hexToRgbArr(hex);
  return (rgbArr[0] * 299 + rgbArr[1] * 587 + rgbArr[2] * 114) / 1000;
};

export const isHexDark = (hex: string): boolean => getHexBrightness(hex) < 140;

// Normally this function would compare the contrast
// between the baseTextOption and invertedTextOption,
// but that forces text to be black on our success buttons.
//
// Checking with brightness still returns us the most readable
// option on the background color, but will let the success
// button have white text.
//
// The design team should try a different success color
// to improve legibility and accessibility.
export const pickReadableTextColor = (
  bgColor,
  baseTextOption,
  invertedTextOption
) => {
  const baseTextBrightness = getHexBrightness(baseTextOption);
  const invertedTextBrightness = getHexBrightness(invertedTextOption);

  if (!isHexDark(bgColor)) {
    return baseTextBrightness < invertedTextBrightness
      ? baseTextOption
      : invertedTextOption;
  } else {
    return baseTextBrightness > invertedTextBrightness
      ? baseTextOption
      : invertedTextOption;
  }
};

// Assumes we always want our default hover colors to be lower
// contrast between it's background color
export const pickHoverBg = (bgColor, baseHoverBg, invertedHoverBg) => {
  const baseHoverContrast = getHexContrast(bgColor, baseHoverBg);
  const invertedHoverContrast = getHexContrast(bgColor, invertedHoverBg);

  return baseHoverContrast > invertedHoverContrast
    ? invertedHoverBg
    : baseHoverBg;
};

export const mixHex = (color1, color2, percent) => {
  const color1rgb = hexToRgbArr(color1);
  const color2rgb = hexToRgbArr(color2);

  if (isValidHex(color1) && isValidHex(color2)) {
    const blendedRgbArr = color1rgb.map((_, i) =>
      Math.floor(color2rgb[i] + (color1rgb[i] - color2rgb[i]) * (percent / 100))
    );

    return rgbToHex(blendedRgbArr);
  } else {
    return isValidHex(color1)
      ? color1
      : isValidHex(color2)
        ? color2
        : "#000000";
  }
};

// We lighten and darken our colors by tinting and shading, not
// by increasing brightness.
//
// Instead of requiring a full lighten/darken scale for each color
// when defining a theme, we can use these functions to extrapolate
// a lighten/darken scale from any color
export const lighten = (color: string, step: 1 | 2 | 3 | 4 | 5) => {
  const scale = [10, 20, 40, 80, 95];
  return mixHex("#FFFFFF", color, scale[step - 1]);
};

export const darken = (color: string, step: 1 | 2 | 3 | 4 | 5) => {
  const scale = [10, 20, 40, 60, 80];
  return mixHex("#000000", color, scale[step - 1]);
};
