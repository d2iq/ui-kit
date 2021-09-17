import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "@emotion/jest";
import toJson from "enzyme-to-json";

import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ColorCodedBadge } from "..";

expect.addSnapshotSerializer(createSerializer());

describe("ColorCodedBadge", () => {
  it("renders without children", () => {
    const component = shallow(<ColorCodedBadge color="#f00f00" />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with a color", () => {
    const component = shallow(
      <ColorCodedBadge color="#f00f00">Color Coded Badge</ColorCodedBadge>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with an icon and color", () => {
    const component = shallow(
      <ColorCodedBadge color="#f00f00" iconShape={SystemIcons.CircleCheck}>
        Color Coded Badge with icon
      </ColorCodedBadge>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
