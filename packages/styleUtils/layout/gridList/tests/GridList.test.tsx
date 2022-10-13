import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

import GridList from "../components/GridList";

expect.addSnapshotSerializer(createSerializer());

describe("GridList", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <GridList columnCount={2} tag="ul">
        <li>list item</li>
        <li>list item</li>
      </GridList>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with all props", () => {
    const { asFragment } = render(
      <GridList columnCount={2} gutterSize="l" tag="ol">
        <li>list item</li>
        <li>list item</li>
      </GridList>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with responsive props", () => {
    const { asFragment } = render(
      <GridList
        columnCount={{ default: 1, medium: 2 }}
        gutterSize={{ default: "s", medium: "m" }}
        tag="ul"
      >
        <li>list item</li>
        <li>list item</li>
      </GridList>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
