import React from "react";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";
import { InlineLoadingIndicator, SectionLoadingIndicator } from "../";

describe("Loading indicators", () => {
  it("renders SectionLoadingIndicator", () => {
    expect(toJSON(render(<InlineLoadingIndicator />))).toMatchSnapshot();
  });
  it("renders InlineLoadingIndicator", () => {
    expect(toJSON(render(<SectionLoadingIndicator />))).toMatchSnapshot();
  });
});
