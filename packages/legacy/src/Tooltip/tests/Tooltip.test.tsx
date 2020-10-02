import React from "react";
import { mount } from "enzyme";
import serializer from "jest-emotion";
import toJson from "enzyme-to-json";
import { Tooltip } from "../../../";

expect.addSnapshotSerializer(serializer);

describe("Tooltip", () => {
  it("renders", () => {
    const component = mount(
      <Tooltip
        anchor="start"
        className="foo"
        content="I'm a tooltip!"
        position="bottom"
      >
        <span>Tooltip Trigger</span>
      </Tooltip>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  describe("#handleMouseEnter", () => {
    it("should set isOpen to true", () => {
      const component = mount(
        <Tooltip
          anchor="start"
          className="foo"
          content="I'm a tooltip!"
          position="bottom"
        >
          <span>Tooltip Trigger</span>
        </Tooltip>
      );
      expect(component.state("isOpen")).toBe(false);
      component.simulate("mouseEnter");
      expect(component.state("isOpen")).toBe(true);
    });

    it("should set anchor to what was returned from #getIdealPosition", () => {
      const component = mount(
        <Tooltip
          anchor="start"
          className="foo"
          content="I'm a tooltip!"
          position="bottom"
        >
          <span>Tooltip Trigger</span>
        </Tooltip>
      );

      expect(component.state("anchor")).toBe(undefined);
      component.simulate("mouseEnter");
      expect(component.state("anchor")).toBe("start");
    });

    it("should set position to what was returned from #getIdealPosition", () => {
      const component = mount(
        <Tooltip
          anchor="start"
          className="foo"
          content="I'm a tooltip!"
          position="bottom"
        >
          <span>Tooltip Trigger</span>
        </Tooltip>
      );

      expect(component.state("position")).toBe(undefined);
      component.simulate("mouseEnter");
      expect(component.state("position")).toBe("bottom");
    });
  });

  describe("#handleMouseLeave", () => {
    const component = mount(
      <Tooltip
        anchor="start"
        className="foo"
        content="I'm a tooltip!"
        position="bottom"
      >
        <span>Tooltip Trigger</span>
      </Tooltip>
    );

    expect(component.state("isOpen")).toBe(false);
    component.simulate("mouseEnter");
    expect(component.state("isOpen")).toBe(true);
    component.simulate("mouseLeave");
    expect(component.state("isOpen")).toBe(false);
  });
});
