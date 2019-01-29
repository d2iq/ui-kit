import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { Icon } from "../";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeL } from "../../design-tokens/build/js/designTokens";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Icon", () => {
  it("renders", () => {
    const component = shallow(
      <Icon
        shape={SystemIcons.ArrowDown}
        color="blue"
        size={iconSizeL}
        ariaLabel="test icon"
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with defaults", () => {
    const component = shallow(<Icon shape={SystemIcons.ArrowDown} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
