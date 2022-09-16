import React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";
expect.addSnapshotSerializer(createSerializer());

import { Avatar } from "..";
import { serviceImg } from "../stories/helpers/serviceImg";

describe("Avatar", () => {
  it("renders default", () => {
    const component = create(<Avatar src="" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders with a src, size, and label", () => {
    const component = create(
      <Avatar src={serviceImg} label="Kubernetes" size="xl" />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
