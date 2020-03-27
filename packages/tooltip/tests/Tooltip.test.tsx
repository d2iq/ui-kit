import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { Tooltip } from "../";
import Dropdownable, {
  Direction
} from "../../dropdownable/components/Dropdownable";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Tooltip", () => {
  it("renders", () => {
    const component = mount(
      <Tooltip id="renders" trigger="trigger">
        content
      </Tooltip>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders open tooltip", () => {
    const component = mount(
      <Tooltip id="opened" trigger="trigger" open={true}>
        content
      </Tooltip>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with preferred directions", () => {
    const component = mount(
      <Tooltip
        id="customDir"
        trigger="trigger"
        open={true}
        preferredDirections={[Direction.BottomLeft]}
      >
        content
      </Tooltip>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("passes open={true} to Dropdownable on mouseOver", () => {
    const component = mount(
      <Tooltip id="hoverOpen" trigger="trigger">
        content
      </Tooltip>
    );

    expect(component.find(Dropdownable).prop("open")).toBe(false);
    component.simulate("mouseOver");
    expect(component.find(Dropdownable).prop("open")).toBe(true);
  });

  it("passes open={false} to Dropdownable on mouseLeave", () => {
    const component = mount(
      <Tooltip id="hoverOpen" trigger="trigger" open={true}>
        content
      </Tooltip>
    );
    expect(component.find(Dropdownable).prop("open")).toBe(true);
    component.simulate("mouseLeave");
    expect(component.find(Dropdownable).prop("open")).toBe(false);
  });

  it("does not pass a different value to Dropdownable's 'open' prop on mouseEnter if suppress is true", () => {
    const component = mount(
      <Tooltip id="hoverOpen" trigger="trigger" suppress={true}>
        content
      </Tooltip>
    );
    expect(component.find(Dropdownable).prop("open")).toBeFalsy();
    component.simulate("mouseEnter");
    expect(component.find(Dropdownable).prop("open")).toBeFalsy();
  });

  it("calls onClose prop when closed", () => {
    const handleClose = jest.fn();

    const component = mount(
      <Tooltip id="hoverOpen" trigger="trigger" onClose={handleClose}>
        content
      </Tooltip>
    );

    component.simulate("mouseEnter");
    component.simulate("mouseLeave");
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
