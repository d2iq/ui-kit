import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";
import { createSerializer } from "@emotion/jest";

import { ToggleBox, ToggleBoxGroup } from "..";

expect.addSnapshotSerializer(createSerializer());

describe("ToggleBoxGroup", () => {
  it("renders default", () => {
    const component = create(
      <ToggleBoxGroup id="default">
        <ToggleBox id="exosphere" value="exosphere">
          Exosphere
        </ToggleBox>
        <ToggleBox id="thermosphere" value="thermosphere">
          Thermosphere
        </ToggleBox>
        <ToggleBox id="mesosphere" value="mesosphere">
          Mesosphere
        </ToggleBox>
      </ToggleBoxGroup>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with a label", () => {
    const component = create(
      <ToggleBoxGroup id="default" label="Atmosphere layer">
        <ToggleBox id="exosphere" value="exosphere">
          Exosphere
        </ToggleBox>
        <ToggleBox id="thermosphere" value="thermosphere">
          Thermosphere
        </ToggleBox>
        <ToggleBox id="mesosphere" value="mesosphere">
          Mesosphere
        </ToggleBox>
      </ToggleBoxGroup>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with a selected ToggleBox", () => {
    const component = create(
      <ToggleBoxGroup id="selectedItems" selectedItems={["mesosphere"]}>
        <ToggleBox id="exosphere" value="exosphere">
          Exosphere
        </ToggleBox>
        <ToggleBox id="thermosphere" value="thermosphere">
          Thermosphere
        </ToggleBox>
        <ToggleBox id="mesosphere" value="mesosphere">
          Mesosphere
        </ToggleBox>
      </ToggleBoxGroup>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with custom direction and gutter size", () => {
    const component = create(
      <ToggleBoxGroup
        id="customLayoutProps"
        direction="column"
        gutterSize="xxl"
      >
        <ToggleBox id="exosphere" value="exosphere">
          Exosphere
        </ToggleBox>
        <ToggleBox id="thermosphere" value="thermosphere">
          Thermosphere
        </ToggleBox>
        <ToggleBox id="mesosphere" value="mesosphere">
          Mesosphere
        </ToggleBox>
      </ToggleBoxGroup>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("calls onChange prop with the selected values", () => {
    const onChangeFn = jest.fn();
    const component = mount(
      <ToggleBoxGroup id="onChange" onChange={onChangeFn}>
        <ToggleBox id="exosphere" value="exosphere">
          Exosphere
        </ToggleBox>
        <ToggleBox id="thermosphere" value="thermosphere">
          Thermosphere
        </ToggleBox>
        <ToggleBox id="mesosphere" value="mesosphere">
          Mesosphere
        </ToggleBox>
      </ToggleBoxGroup>
    );

    const toggleBoxInput = component.find("input").first();

    expect(onChangeFn).not.toHaveBeenCalled();
    toggleBoxInput.simulate("change", { target: { checked: true } });
    expect(onChangeFn).toHaveBeenCalledWith([toggleBoxInput.prop("value")]);
    toggleBoxInput.simulate("change", { target: { checked: false } });
    expect(onChangeFn).toHaveBeenCalledWith([]);
  });
});
