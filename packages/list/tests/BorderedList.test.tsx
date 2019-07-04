import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

import { BorderedList } from "../";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("BorderedList", () => {
  it("renders default", () => {
    const component = shallow(
      <BorderedList tag="ul">
        <li>list item</li>
        <li>list item</li>
      </BorderedList>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
