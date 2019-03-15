import React from "react";
import serializer from "jest-emotion";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const mockEventManager = {
  add: jest.fn(),
  remove: jest.fn()
};

jest.doMock("../../utilities/resizeEventManager", () => {
  return mockEventManager;
});

import Dropdownable from "../components/Dropdownable";
import Overlay from "../../shared/components/Overlay";
import { PrimaryButton } from "../../button";

expect.addSnapshotSerializer(serializer);

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

  it("is eagerly added to dom", () => {
    const component = mount(
      <Dropdownable open={false} dropdown={<p>I'm a touchdown</p>}>
        <PrimaryButton>Click me</PrimaryButton>
      </Dropdownable>
    );

    expect(component.find(Overlay).text()).toEqual("I'm a touchdown");
  });

  it("registers with resizeEventManager", () => {
    mockEventManager.add.mockClear();
    mockEventManager.remove.mockClear();

    const component = mount(
      <Dropdownable open={false} dropdown={<p>I'm a touchdown</p>}>
        <PrimaryButton>Click me</PrimaryButton>
      </Dropdownable>
    );

    expect(mockEventManager.add).toHaveBeenCalled();
    component.unmount();
    expect(mockEventManager.remove).toHaveBeenCalled();
  });
});
