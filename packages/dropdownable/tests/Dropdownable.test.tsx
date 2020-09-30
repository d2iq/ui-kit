import React from "react";
import { createSerializer } from "jest-emotion";
import { mount } from "enzyme";
import * as emotion from "emotion";
import toJson from "enzyme-to-json";

const mockEventManager = {
  add: jest.fn(),
  remove: jest.fn()
};

jest.doMock("../../utilities/resizeEventManager", () => {
  return mockEventManager;
});

import Dropdownable from "../components/Dropdownable";
import { PrimaryButton } from "../../button";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Dropdownable", () => {
  it("is visible after opening", () => {
    const component = mount(
      <Dropdownable open={false} dropdown={<p>I'm a touchdown</p>}>
        <PrimaryButton>Click me</PrimaryButton>
      </Dropdownable>
    );

    expect(toJson(component)).toMatchSnapshot();
    component.setProps({ open: true });
    expect(toJson(component)).toMatchSnapshot();
  });
});
