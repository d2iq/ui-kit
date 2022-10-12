import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import DropdownContents from "../../dropdownable/components/DropdownContents";

import { DropdownMenu, DropdownSection, DropdownMenuItem } from "..";

const triggerId = "trigger";

describe("Dropdown", () => {
  it("renders a closed dropdown", () => {
    const component = mount(
      <DropdownMenu trigger="Dropdown trigger">
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders an open dropdown", () => {
    const component = mount(
      <DropdownMenu initialIsOpen={true} trigger="Dropdown trigger">
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders a dropdown with a max height", () => {
    const component = mount(
      <DropdownMenu trigger="Dropdown trigger" menuMaxHeight={50}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders an open dropdown with multiple sections", () => {
    const component = mount(
      <DropdownMenu initialIsOpen={true} trigger="Dropdown trigger">
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
        </DropdownSection>

        <DropdownSection>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="restartDelay" value="restartDelay">
            Restart Delay
          </DropdownMenuItem>
        </DropdownSection>

        <DropdownSection>
          <DropdownMenuItem key="pause" value="pause">
            Pause
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders an element passed as to the trigger prop", () => {
    const component = mount(
      <DropdownMenu trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(component.find(`#${triggerId}`).exists()).toBe(true);
  });
  it("toggles the dropdown menu by clicking twice", () => {
    const component = mount(
      <DropdownMenu trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    const trigger = component.find(`#${triggerId}`);
    expect(component.find(DropdownContents).length).toBe(0);
    trigger.simulate("click");
    expect(component.find(DropdownContents).prop("isOpen")).toBe(true);
    trigger.simulate("click");
    expect(component.find(DropdownContents).length).toBe(0);
  });
  it("toggles the dropdown menu by pressing the spacebar twice", () => {
    const component = mount(
      <DropdownMenu trigger={<div id={triggerId}>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(component.find(DropdownContents).length).toBe(0);

    trigger.simulate("keyDown", {
      key: " " // space bar
    });

    expect(component.find(DropdownContents).prop("isOpen")).toBe(true);

    trigger.simulate("keyDown", {
      key: " " // space bar
    });

    expect(component.find(DropdownContents).length).toBe(0);
  });
  it("selects first item and passes it's value to onSelect", () => {
    const onSelectFn = jest.fn();
    const component = mount(
      <DropdownMenu
        onSelect={onSelectFn}
        trigger={<div id={triggerId}>Dropdown trigger</div>}
      >
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(onSelectFn).not.toHaveBeenCalled();
    trigger.simulate("keyDown", {
      key: "ArrowDown"
    });
    trigger.simulate("keyDown", {
      key: "Enter"
    });

    // using `expect.anything()` because the second parameter is an object
    // that comes from Downshift, and there's no good way to know exactly
    // what to expect
    expect(onSelectFn).toHaveBeenCalledWith("edit", expect.anything());
  });
  it("calls onSelect prop with the selected value", () => {
    const onSelectFn = jest.fn();
    const component = mount(
      <DropdownMenu
        onSelect={onSelectFn}
        trigger={<div id={triggerId}>Dropdown trigger</div>}
      >
        <DropdownSection>
          <DropdownMenuItem disabled={true} key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );
    const trigger = component.find(`#${triggerId}`);

    expect(onSelectFn).not.toHaveBeenCalled();
    trigger.simulate("keyDown", {
      key: "ArrowDown"
    });
    trigger.simulate("keyDown", {
      key: "Enter"
    });

    // using `expect.anything()` because the second parameter is an object
    // that comes from Downshift, and there's no good way to know exactly
    // what to expect
    expect(onSelectFn).not.toHaveBeenCalledWith("edit", expect.anything());
    expect(onSelectFn).toHaveBeenCalled();
  });
});
