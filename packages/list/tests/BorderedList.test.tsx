import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";

import { BorderedList } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("BorderedList", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <BorderedList tag="ul">
        <li>list item</li>
        <li>list item</li>
      </BorderedList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
