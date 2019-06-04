import React from "react";

import { ConfigurationMap } from "../";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("ConfigurationMap", () => {
  it("default", () => {
    expect(
      toJSON(
        render(<ConfigurationMap data={{ id: "foobar", cmd: "sleep 100;" }} />)
      )
    ).toMatchSnapshot();
  });
});
