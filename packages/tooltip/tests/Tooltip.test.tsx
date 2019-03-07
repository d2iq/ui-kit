import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { Tooltip } from "../";
import { Direction } from "../../dropdownable/components/Dropdownable";

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

  it("toggles state.open to true on mouseOver", () => {
    const component = mount(
      <Tooltip id="hoverOpen" trigger="trigger">
        content
      </Tooltip>
    );
    expect(component.state("open")).toBe(false);
    component.simulate("mouseOver");
    expect(component.state("open")).toBe(true);
  });

  it("sets state.open to false on mouseLeave", () => {
    const component = mount(
      <Tooltip id="hoverOpen" trigger="trigger" open={true}>
        content
      </Tooltip>
    );
    expect(component.state("open")).toBe(true);
    component.simulate("mouseLeave");
    expect(component.state("open")).toBe(false);
  });

  it("does not set state.open to true on mouseEnter if suppress is true", () => {
    const component = mount(
      <Tooltip id="hoverOpen" trigger="trigger" suppress={true}>
        content
      </Tooltip>
    );
    expect(component.state("open")).toBe(false);
    component.simulate("mouseEnter");
    expect(component.state("open")).toBe(false);
  });
});
