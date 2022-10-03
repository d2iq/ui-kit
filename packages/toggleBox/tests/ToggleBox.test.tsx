import React from "react";
import { mount } from "enzyme";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

import { ToggleBox } from "..";

expect.addSnapshotSerializer(createSerializer());

describe("ToggleBox", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <ToggleBox value="default" id="default">
        default
      </ToggleBox>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders active", () => {
    const { asFragment } = render(
      <ToggleBox isActive={true} value="active" id="active">
        isActive
      </ToggleBox>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders disabled", () => {
    const { asFragment } = render(
      <ToggleBox disabled={true} value="disabled" id="disabled">
        disabled
      </ToggleBox>
    );

    expect(asFragment()).toMatchSnapshot();
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
