import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
expect.addSnapshotSerializer(createSerializer());

import { Avatar } from "..";
import { serviceImg } from "../stories/helpers/serviceImg";

describe("Avatar", () => {
  it("renders default", () => {
    const { asFragment } = render(<Avatar src="" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with a src, size, and label", () => {
    const { asFragment } = render(
      <Avatar src={serviceImg} label="Kubernetes" size="xl" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
