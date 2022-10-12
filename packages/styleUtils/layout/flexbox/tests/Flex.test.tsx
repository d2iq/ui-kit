import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

import Flex from "../components/Flex";
import FlexItem from "../components/FlexItem";

expect.addSnapshotSerializer(createSerializer());

describe("Flex", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <Flex>
        <FlexItem>content</FlexItem>
        <FlexItem>content</FlexItem>
      </Flex>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with all props", () => {
    const { asFragment } = render(
      <Flex
        align="center"
        justify="center"
        direction="column"
        wrap="nowrap"
        gutterSize="l"
      >
        <FlexItem>content</FlexItem>
        <FlexItem>content</FlexItem>
      </Flex>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with responsive props", () => {
    const { asFragment } = render(
      <Flex
        align={{ default: "flex-start", medium: "center" }}
        justify={{ default: "flex-start", medium: "center" }}
        direction={{ default: "column", medium: "row" }}
        wrap={{ default: "wrap", medium: "nowrap" }}
        gutterSize={{ default: "s", medium: "m" }}
      >
        <FlexItem>content</FlexItem>
        <FlexItem>content</FlexItem>
      </Flex>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
