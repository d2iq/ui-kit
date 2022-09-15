import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { createSerializer } from "@emotion/jest";

import { ToggleBox } from "..";

expect.addSnapshotSerializer(createSerializer());

describe("ToggleBox", () => {
  it("renders default", () => {
    const component = create(
      <ToggleBox value="default" id="default">
        default
      </ToggleBox>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders active", () => {
    const component = create(
      <ToggleBox isActive={true} value="active" id="active">
        isActive
      </ToggleBox>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders disabled", () => {
    const component = create(
      <ToggleBox disabled={true} value="disabled" id="disabled">
        disabled
      </ToggleBox>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("calls onChange prop when the input is changed", () => {
    const onChangeFn = jest.fn();
    const component = mount(
      <ToggleBox value="default" id="default" onChange={onChangeFn}>
        default
      </ToggleBox>
    );

    const toggleBoxInput = component.find("input");

    expect(onChangeFn).not.toHaveBeenCalled();
    toggleBoxInput.simulate("change", { target: { checked: true } });
    expect(onChangeFn).toHaveBeenCalled();
  });
});
