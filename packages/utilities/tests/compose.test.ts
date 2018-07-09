import { compose, min, percentage, max } from "../index";
describe("Compose", () => {
  it("returns the right composed value", () => {
    expect(
      compose(
        min(29),
        percentage(25)
      )(100)
    ).toEqual(25);
  });
  it("composes from right to left", () => {
    expect(
      compose(
        min(21),
        max(23)
      )(22)
    ).toEqual(21);
  });
  it("returns the right value multiple times", () => {
    const f = compose(
      min(29),
      percentage(25)
    );
    expect(f(100)).toEqual(25);
    expect(f(100)).toEqual(25);
  });
});
