import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import Popover from "../components/Popover";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Popover", () => {
  it("renders", () => {
    const component = shallow(
      <Popover maxHeight={200} width={100}>
        menu content
      </Popover>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
