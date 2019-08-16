import { default as max } from "../max";
describe("max", () => {
  it("returns the larger of its two arguments", () => {
    expect(max(-7, 7)).toEqual(7);
    expect(max(7, -7)).toEqual(7);
  });

  it("works for any orderable type", () => {
    var d1 = new Date("2001-01-01");
    var d2 = new Date("2002-02-02");

    expect(max(d1, d2)).toEqual(d2);
    expect(max(d2, d1)).toEqual(d2);
    expect(max("a", "b")).toEqual("b");
    expect(max("b", "a")).toEqual("b");
  });
});
