import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import DropdownContents from "../../dropdownable/components/DropdownContents";

import { Dropdown, DropdownActions, DropdownActionItem } from "../";

expect.addSnapshotSerializer(createSerializer(emotion));

const triggerId = "trigger";

describe("Dropdown", () => {
  it("renders a closed dropdown", () => {
    const component = mount(
      <Dropdown trigger="Dropdown trigger">
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders an open dropdown", () => {
    const component = mount(
      <Dropdown initialIsOpen={true} trigger="Dropdown trigger">
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders a dropdown with a max height", () => {
    const component = mount(
      <Dropdown trigger="Dropdown trigger" menuMaxHeight={50}>
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders an open dropdown with multiple sections", () => {
    const component = mount(
      <Dropdown initialIsOpen={true} trigger="Dropdown trigger">
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
        </DropdownActions>

        <DropdownActions>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="restartDelay" value="restartDelay">
            Restart Delay
          </DropdownActionItem>
        </DropdownActions>

        <DropdownActions>
          <DropdownActionItem key="pause" value="pause">
            Pause
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders an element passed as to the trigger prop", () => {
    const component = mount(
      <Dropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );

    expect(component.find(`#${triggerId}`).exists()).toBe(true);
  });
  it("toggles the dropdown menu on click", () => {
    const component = mount(
      <Dropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );

    expect(component.find(DropdownContents).prop("open")).toBe(false);
    component.find(`#${triggerId}`).simulate("click");
    expect(component.find(DropdownContents).prop("open")).toBe(true);
    component.find(`#${triggerId}`).simulate("click");
    expect(component.find(DropdownContents).prop("open")).toBe(false);
  });
  it("toggles the dropdown menu when focusing and pressing the spacebar", () => {
    const component = mount(
      <Dropdown trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(component.find(DropdownContents).prop("open")).toBe(false);

    trigger.simulate("focus");
    trigger.simulate("keyDown", {
      key: " " // space bar
    });
    trigger.simulate("blur");

    expect(component.find(DropdownContents).prop("open")).toBe(true);

    trigger.simulate("focus");
    trigger.simulate("keyDown", {
      key: " " // space bar
    });
    trigger.simulate("blur");

    expect(component.find(DropdownContents).prop("open")).toBe(false);
  });
  it("calls onSelect prop with the selected value", () => {
    const onSelectFn = jest.fn();
    const component = mount(
      <Dropdown
        onSelect={onSelectFn}
        trigger={<div id={triggerId}>Dropdown trigger</div>}
      >
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );
    const trigger = component.find(`#${triggerId}`);

    trigger.simulate("focus");
    trigger.simulate("keyDown", {
      key: " " // space bar
    });
    expect(onSelectFn).not.toHaveBeenCalled();
    trigger.simulate("keyDown", {
      key: "ArrowDown"
    });
    trigger.simulate("keyDown", {
      key: "Enter"
    });
    trigger.simulate("blur");

    // using `expect.anything()` because the second parameter is an object
    // that comes from Downshift, and there's no good way to know exactly
    // what to expect
    expect(onSelectFn).toHaveBeenCalledWith("edit", expect.anything());
  });
});
