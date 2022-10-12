import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { BorderedBox } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("BorderedBox", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <BorderedBox tag="div" side="all">
        Content
      </BorderedBox>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with all props", () => {
    const { asFragment } = render(
      <BorderedBox tag="div" side="top" radius="small" variant="heavy">
        Content
      </BorderedBox>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
