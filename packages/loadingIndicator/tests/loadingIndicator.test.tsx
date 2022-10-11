import React from "react";
import { render } from "@testing-library/react";
import { InlineLoadingIndicator, SectionLoadingIndicator } from "../";

describe("Loading indicators", () => {
  it("renders SectionLoadingIndicator", () => {
    const { asFragment } = render(<InlineLoadingIndicator />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders InlineLoadingIndicator", () => {
    const { asFragment } = render(<SectionLoadingIndicator />);

    expect(asFragment()).toMatchSnapshot();
  });
});
