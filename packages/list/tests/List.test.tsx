import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { List } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("List", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <List tag="ul">
        <li>list item</li>
        <li>list item</li>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with all props", () => {
    const { asFragment } = render(
      <List markerStyle="disc" tag="ol">
        <li>list item</li>
        <li>list item</li>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
