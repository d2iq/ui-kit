import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import { Breadcrumb } from "../";

describe("Breadcrumb", () => {
  it("default", () => {
    expect(
      toJson(
        render(
          <Breadcrumb>
            <span>One</span>
            <span>Two</span>
          </Breadcrumb>
        )
      )
    ).toMatchSnapshot();
  });
});
