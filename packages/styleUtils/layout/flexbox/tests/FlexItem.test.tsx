import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import FlexItem from "../components/FlexItem";

expect.addSnapshotSerializer(createSerializer());

describe("FlexItem", () => {
  it("renders default", () => {
    const { asFragment } = render(<FlexItem>content</FlexItem>);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with all props", () => {
    const { asFragment } = render(
      <FlexItem flex="grow" growFactor={2} order={2}>
        content
      </FlexItem>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with responsive props", () => {
    const { asFragment } = render(
      <FlexItem
        flex={{ default: "shrink", medium: "grow" }}
        growFactor={{ default: 1, medium: 2 }}
        order={{ default: 1, medium: 2 }}
      >
        content
      </FlexItem>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
