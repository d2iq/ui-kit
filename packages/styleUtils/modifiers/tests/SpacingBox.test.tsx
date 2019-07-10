import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

import SpacingBox from "../components/SpacingBox";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("SpacingBox", () => {
  it("renders default", () => {
    const component = shallow(<SpacingBox tag="div">content</SpacingBox>);

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with all props", () => {
    const component = shallow(
      <SpacingBox tag="div" side="top" spacingSize="l">
        content
      </SpacingBox>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with responsive spacingSize", () => {
    const component = shallow(
      <SpacingBox
        tag="div"
        side="top"
        spacingSize={{ default: "s", medium: "m" }}
      >
        content
      </SpacingBox>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
