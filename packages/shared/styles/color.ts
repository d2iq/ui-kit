const isValidHex = (color: string) => /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);

const hexToRgbArr = (hex: string): number[] => {
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

export const hexToRgbA = (hex: string, alpha: string | number = 1): string => {
  if (isValidHex(hex)) {
    return `rgba(${hexToRgbArr(hex).join(",")},${alpha})`;
  }
  return "rgba(0,0,0,0)";
};

// TODO: when/if we start using rgb/rgba colors in
// design-tokens, write color functions that can get
// rgb/rgba brightness as well
export const getHexBrightness = (hex: string) => {
  const rgbArr = hexToRgbArr(hex);
  return (rgbArr[0] * 299 + rgbArr[1] * 587 + rgbArr[2] * 114) / 1000;
};

export const isHexDark = (hex: string): boolean => getHexBrightness(hex) < 140;
