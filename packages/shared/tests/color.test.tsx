import {
  hexToRgbA,
  isValidHex,
  hexToRgbArr,
  rgbToHex,
  getHexContrast,
  isHexDark,
  getTextColor,
  pickHoverBg,
  mixHex
} from "../styles/color";

describe("color utilities", () => {
  describe("hexToRgbA", () => {
    it("returns a black with alpha 1 if no alpha is given", () => {
      expect(hexToRgbA("#000000")).toBe("rgba(0,0,0,1)");
    });
    it("returns a black with alpha 1 if no alpha is given and a short hex is provided", () => {
      expect(hexToRgbA("#000")).toBe("rgba(0,0,0,1)");
    });
    it("returns a white with alpha 0.5", () => {
      expect(hexToRgbA("#ffffff", 0.5)).toBe("rgba(255,255,255,0.5)");
    });
    it("returns a white with alpha 0.5 if capital hex is provided", () => {
      expect(hexToRgbA("#FFFFFF", 0.5)).toBe("rgba(255,255,255,0.5)");
    });
  });

  describe("isValidHex", () => {
    it("returns false for non-hex color string", () => {
      expect(isValidHex("rgba(0,0,0,1)")).toBe(false);
    });
    it("returns false if hex is not formatted correctly", () => {
      expect(isValidHex("#0000")).toBe(false);
    });
    it("returns true if short hex is provided", () => {
      expect(isValidHex("#000")).toBe(true);
    });
    it("returns true if long hex is provided", () => {
      expect(isValidHex("#000000")).toBe(true);
    });
  });

  describe("hexToRgbArr", () => {
    it("returns [255, 255, 255] for #FFFFFF", () => {
      expect(hexToRgbArr("#FFFFFF")).toEqual([255, 255, 255]);
    });
    it("returns [0, 0, 0] for non-hex color string", () => {
      expect(hexToRgbArr("rgba(0,0,0,1)")).toEqual([0, 0, 0]);
    });
    it("returns [0, 0, 0] if hex is not formatted correctly", () => {
      expect(hexToRgbArr("#0000")).toEqual([0, 0, 0]);
    });
  });

  describe("rgbToHex", () => {
    it("returns #FFFFFF for [255, 255, 255]", () => {
      expect(rgbToHex([255, 255, 255]).toUpperCase()).toBe("#FFFFFF");
    });
    it("returns #000000 for invalid rgb array", () => {
      expect(rgbToHex([256]).toUpperCase()).toBe("#000000");
    });
  });

  describe("getHexContrast", () => {
    it("returns 1 for same colors", () => {
      expect(getHexContrast("#000000", "#000000")).toBe(1);
    });
    it("returns 21 for black and white", () => {
      expect(getHexContrast("#FFFFFF", "#000000")).toBe(21);
    });
  });

  describe("isHexDark", () => {
    it("returns true for #000000", () => {
      expect(isHexDark("#000000")).toBe(true);
    });
    it("returns false for #FFFFFF", () => {
      expect(isHexDark("#FFFFFF")).toBe(false);
    });
  });

  describe("getTextColor", () => {
    it("returns inverted text color if the background and the base text color are dark", () => {
      expect(getTextColor("#000000", "#1B2029", "#FFFFFF").toUpperCase()).toBe(
        "#FFFFFF"
      );
    });
    it("returns base text color if the background and the inverted text color are not dark", () => {
      expect(getTextColor("#FFFFFF", "#1B2029", "#999999").toUpperCase()).toBe(
        "#1B2029"
      );
    });
  });

  describe("pickHoverBg", () => {
    it("returns hover color with lower contrast when measured against the background color", () => {
      expect(pickHoverBg("#000000", "#1B2029", "#FFFFFF").toUpperCase()).toBe(
        "#1B2029"
      );
    });
  });

  describe("mixHex", () => {
    it("returns the #7f7f7f for #FFFFFF mixed with #000000 with a weight of 50", () => {
      expect(mixHex("#FFFFFF", "#000000", 50).toUpperCase()).toBe("#7F7F7F");
    });
    it("returns the first color if the second color is invalid hex", () => {
      expect(mixHex("rgb(255,255,255)", "#000000", 50).toUpperCase()).toBe(
        "#000000"
      );
    });
    it("returns the second color if the first color is invalid hex", () => {
      expect(mixHex("#FFFFFF", "rgb(0,0,0)", 50).toUpperCase()).toBe("#FFFFFF");
    });
    it("returns #000000 if the both colors are invalid hex", () => {
      expect(mixHex("rgb(255,255,255)", "rgb(0,0,0)", 50).toUpperCase()).toBe(
        "#000000"
      );
    });
  });
});
