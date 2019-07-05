import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer(emotion));

import { Avatar } from "..";
import { serviceImg } from "../stories/helpers/serviceImg";
import { iconSizeXl } from "../../design-tokens/build/js/designTokens";

describe("Avatar", () => {
  it("renders default", () => {
    const component = shallow(<Avatar src="" />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with a src, size, and label", () => {
    const component = shallow(
      <Avatar src={serviceImg} label="Kubernetes" size={iconSizeXl} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
