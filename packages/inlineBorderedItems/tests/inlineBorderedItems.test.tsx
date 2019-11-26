import React from "react";

import { InlineBorderedItems } from "../";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Card", () => {
  it("renders default", () => {
    expect(
      toJSON(
        render(
          <InlineBorderedItems>
            <span>Example Content</span>
          </InlineBorderedItems>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with gutterSize set", () => {
    expect(
      toJSON(
        render(
          <InlineBorderedItems gutterSize="l">
            <span>Example Content</span>
          </InlineBorderedItems>
        )
      )
    ).toMatchSnapshot();
  });
});
