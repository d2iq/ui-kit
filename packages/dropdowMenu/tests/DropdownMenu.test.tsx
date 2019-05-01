import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import DropdownMenu from "../components/DropdownMenu";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("DropdownMenu", () => {
  it("renders", () => {
    const component = shallow(
      <DropdownMenu maxHeight={200} width={100}>
        menu content
      </DropdownMenu>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
