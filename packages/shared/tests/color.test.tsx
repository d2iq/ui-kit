import { hexToRgbA } from "../styles/color";

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
