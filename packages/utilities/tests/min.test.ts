import { default as min } from "../min";

describe("min", () => {
  it("returns the smaller of its two arguments", () => {
    expect(min(-7, 7)).toEqual(-7);
    expect(min(7, -7)).toEqual(-7);
  });

  it("works for any orderable type", () => {
    var d1 = new Date("2001-01-01");
    var d2 = new Date("2002-02-02");

    expect(min(d1, d2)).toEqual(d1);
    expect(min(d2, d1)).toEqual(d1);
    expect(min("a", "b")).toEqual("a");
    expect(min("b", "a")).toEqual("a");
  });
  it("returns is a function", () => {
    expect(typeof min).toBe("function");
  });

  it("returns a function after adding the min value", () => {
    expect(typeof min(1)).toBe("function");
  });

  it("is returning the min value", () => {
    expect(min(1)(10)).toBe(1);
  });

  it("is returning the lower value value", () => {
    expect(min(12)(10)).toBe(10);
  });
});
