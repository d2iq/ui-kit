import React from "react";

import { Card } from "../";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Card", () => {
  it("default", () => {
    expect(toJSON(render(<Card>Example Content</Card>))).toMatchSnapshot();
  });
  it("with aspectRatio set", () => {
    expect(
      toJSON(render(<Card aspectRatio={[2, 1]}>Example Content</Card>))
    ).toMatchSnapshot();
  });
});
