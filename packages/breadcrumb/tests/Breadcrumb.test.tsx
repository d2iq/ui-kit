import React from "react";
import { render } from "@testing-library/react";

import { Breadcrumb } from "../";

describe("Breadcrumb", () => {
  it("default", () => {
    const { asFragment } = render(
      <Breadcrumb>
        <span>One</span>
        <span>Two</span>
      </Breadcrumb>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
