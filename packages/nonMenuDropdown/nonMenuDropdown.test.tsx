import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

import NonMenuDropdown from "./NonMenuDropdown";

expect.addSnapshotSerializer(createSerializer(emotion));

const triggerId = "trigger";

describe("Dropdown", () => {
  it("renders a closed dropdown", () => {
    const component = mount(
      <NonMenuDropdown trigger="Dropdown trigger">
        <div>dropdown content</div>
      </NonMenuDropdown>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders an open dropdown", () => {
    const component = mount(
      <NonMenuDropdown initialIsOpen={true} trigger="Dropdown trigger">
        <div>dropdown content</div>
      </NonMenuDropdown>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders a dropdown with a max width and max height", () => {
    const component = mount(
      <NonMenuDropdown trigger="Dropdown trigger" maxHeight={50} maxWidth={50}>
        <div>dropdown content</div>
      </NonMenuDropdown>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders an element passed as to the trigger prop", () => {
    const component = mount(
      <NonMenuDropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </NonMenuDropdown>
    );

    expect(component.find(`#${triggerId}`).exists()).toBe(true);
  });
  it("toggles the dropdown on click", () => {
    const component = mount(
      <NonMenuDropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </NonMenuDropdown>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(false);
    trigger.simulate("click");
    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(true);
    trigger.simulate("click");
    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(false);
  });
  it("opens the dropdown menu when focusing and pressing the spacebar, and closes it on blur", () => {
    const component = mount(
      <NonMenuDropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </NonMenuDropdown>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(false);

    trigger.simulate("focus");
    trigger.simulate("keyDown", {
      key: " " // space bar
    });

    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(true);

    trigger.simulate("blur");

    // setTimeout needed because there is a setTimeout in the onBlur handler
    setTimeout(() => {
      expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(false);
    }, 0);
  });
  it("opens the dropdown menu when focusing and pressing the down arrow", () => {
    const component = mount(
      <NonMenuDropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </NonMenuDropdown>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(false);

    trigger.simulate("focus");
    trigger.simulate("keyDown", {
      key: "ArrowDown"
    });

    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(true);
  });

  it("closes the dropdown when keying Escape", () => {
    const component = mount(
      <NonMenuDropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </NonMenuDropdown>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(false);
    trigger.simulate("click");
    expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(true);
    trigger.simulate("keyDown", {
      key: "Escape"
    });

    // setTimeout needed because there is a setTimeout in the onBlur handler
    setTimeout(() => {
      expect(component.find(`#${triggerId}`).prop("aria-expanded")).toBe(false);
    }, 0);
  });
});
