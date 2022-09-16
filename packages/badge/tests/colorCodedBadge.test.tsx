import React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";

import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ColorCodedBadge } from "..";

expect.addSnapshotSerializer(createSerializer());

describe("ColorCodedBadge", () => {
  it("renders without children", () => {
    const component = create(<ColorCodedBadge color="#f00f00" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders with a color", () => {
    const component = create(
      <ColorCodedBadge color="#f00f00">Color Coded Badge</ColorCodedBadge>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders with an icon and color", () => {
    const component = create(
      <ColorCodedBadge color="#f00f00" iconShape={SystemIcons.CircleCheck}>
        Color Coded Badge with icon
      </ColorCodedBadge>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
