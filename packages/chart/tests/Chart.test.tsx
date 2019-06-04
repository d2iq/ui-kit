import React from "react";

import { LineChart } from "../";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("LineChart", () => {
  it("default", () => {
    expect(
      toJSON(
        render(
          <LineChart
            data={{
              "-1": 2,
              "-2": 3,
              "-4": 4
            }}
          />
        )
      )
    ).toMatchSnapshot();
  });
});
