import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

import { List } from "../";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("List", () => {
  it("renders default", () => {
    const component = shallow(
      <List tag="ul">
        <li>list item</li>
        <li>list item</li>
      </List>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with all props", () => {
    const component = shallow(
      <List markerStyle="disc" tag="ol">
        <li>list item</li>
        <li>list item</li>
      </List>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
