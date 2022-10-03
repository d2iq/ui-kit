import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";

import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ColorCodedBadge } from "..";

expect.addSnapshotSerializer(createSerializer());

describe("ColorCodedBadge", () => {
  it("renders without children", () => {
    const { asFragment } = render(<ColorCodedBadge color="#f00f00" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with a color", () => {
    const { asFragment } = render(
      <ColorCodedBadge color="#f00f00">Color Coded Badge</ColorCodedBadge>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with an icon and color", () => {
    const { asFragment } = render(
      <ColorCodedBadge color="#f00f00" iconShape={SystemIcons.CircleCheck}>
        Color Coded Badge with icon
      </ColorCodedBadge>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
