import React from "react";
import { create } from "react-test-renderer";

import { Breadcrumb } from "../";

describe("Breadcrumb", () => {
  it("default", () => {
    const component = create(
      <Breadcrumb>
        <span>One</span>
        <span>Two</span>
      </Breadcrumb>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
