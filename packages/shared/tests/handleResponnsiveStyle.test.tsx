import { getResponsiveStyleData } from "../styles/styleUtils/layout/handleResponsiveStyle";

describe("responsive style utilities", () => {
  describe("getResponsiveStyleData", () => {
    it("returns responsive styles when a breakpoint object is passed", () => {
      const responsiveValues = {
        default: "1px",
        small: "2px",
        medium: "3px",
        large: "3px",
        jumbo: "4px"
      };
      const expectedResult = {
        key: "left",
        val: responsiveValues
      };

      expect(
        JSON.stringify(getResponsiveStyleData("left", responsiveValues))
      ).toEqual(JSON.stringify(expectedResult));
    });
    it("returns key-value pair style rule when if a regular style value is passed", () => {
      const expectedResult = { key: "left", val: "1px" };
      expect(JSON.stringify(getResponsiveStyleData("left", "1px"))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });
});
