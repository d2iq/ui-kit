import React from "react";
import { mount } from "enzyme";
import serializer from "jest-emotion";
import toJson from "enzyme-to-json";

import { Expandable } from "../";

expect.addSnapshotSerializer(serializer);

describe("Sidebar", () => {
  it("renders", () => {
    const component = mount(
      <Expandable label="Label" isOpen={true}>
        Content
      </Expandable>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("toggles open and closed", () => {
    const component = mount(
      <Expandable label="Label" isOpen={true}>
        Content
      </Expandable>
    );

    expect(component.find("button").props()["aria-expanded"]).toBe(true);
    component.find("button").simulate("click");
    expect(component.find("button").props()["aria-expanded"]).toBe(false);
  });

  it("fires onChange when button is clicked", () => {
    const onChange = jest.fn();
    const component = mount(
      <Expandable label="Label" isOpen={true} onChange={onChange}>
        Content
      </Expandable>
    );

    expect(onChange).not.toHaveBeenCalled();

    component.find("button").simulate("click");

    expect(onChange).toHaveBeenCalledTimes(1);
    const openArgument = onChange.mock.calls[0][0];
    expect(openArgument).toBe(false);
  });

  it("toggles open and closed based on controlledIsOpen prop when passed", () => {
    const component = mount(
      <Expandable label="Label" controlledIsOpen>
        Content
      </Expandable>
    );

    expect(component.find("button").props()["aria-expanded"]).toBe(true);
    component.find("button").simulate("click");
    expect(component.find("button").props()["aria-expanded"]).toBe(true);

    component.setProps({
      controlledIsOpen: false
    });
    component.update();

    expect(component.find("button").props()["aria-expanded"]).toBe(false);
  });
});
