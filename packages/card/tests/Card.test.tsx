import React from "react";

import { Card } from "../";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Card", () => {
  it("default", () => {
    expect(toJSON(render(<Card>Example Content</Card>))).toMatchSnapshot();
  });
});
