import React from "react";
import { render } from "@testing-library/react";
import { InlineBorderedItems } from "../";

describe("Card", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <InlineBorderedItems>
        <span>Example Content</span>
      </InlineBorderedItems>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with gutterSize set", () => {
    const { asFragment } = render(
      <InlineBorderedItems gutterSize="l">
        <span>Example Content</span>
      </InlineBorderedItems>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
