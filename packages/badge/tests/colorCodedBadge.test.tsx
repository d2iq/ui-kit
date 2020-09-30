import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer(emotion));

import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ColorCodedBadge } from "..";

describe("ColorCodedBadge", () => {
  it("renders with a color", () => {
    const component = shallow(<ColorCodedBadge color="#f00f00" />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with an icon and color", () => {
    const component = shallow(
      <ColorCodedBadge color="#f00f00" iconShape={SystemIcons.CircleCheck} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
