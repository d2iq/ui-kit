import React from "react";
import { render } from "@testing-library/react";

import { createSerializer } from "@emotion/jest";

import Container from "../components/Container";

expect.addSnapshotSerializer(createSerializer());

describe("Container", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <Container>
        <div>content</div>
      </Container>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
