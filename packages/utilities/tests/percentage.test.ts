import { default as percentage } from "../components/percentage";

describe("percentage", () => {
  it("returns percentage of total", () => {
    expect(percentage(30, 100)).toEqual(30);
  });

  it("returns function if only percentage is provided", () => {
    expect(typeof percentage(30)).toBe("function");
  });

  it("returns calculates the percentage from curried function", () => {
    expect(percentage(30)(100)).toEqual(30);
  });
});
