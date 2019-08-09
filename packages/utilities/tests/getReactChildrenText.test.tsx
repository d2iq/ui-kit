import React from "react";
import { shallow } from "enzyme";
import getReactChildrenText from "../getReactChildrenText";

describe("getReactChildrenText", () => {
  it("returns a string for a child that is a string", () => {
    const component = shallow(<div>Lorem ipsum dolor</div>);
    expect(getReactChildrenText(component.prop("children"))).toBe(
      "Lorem ipsum dolor"
    );
  });
  it("returns a string for a children that are React elements", () => {
    const component = shallow(
      <div>
        <p>Lorem</p>
        <span>ipsum</span>
        <em>dolor</em>
      </div>
    );
    expect(getReactChildrenText(component.prop("children"))).toBe(
      "Lorem ipsum dolor"
    );
  });
  it("returns a string for a children that are nested React elements", () => {
    const component = shallow(
      <div>
        <p>
          <span>Lorem</span>
        </p>
        <span>ipsum</span>
        <em>
          <b>dolor</b>
        </em>
      </div>
    );
    expect(getReactChildrenText(component.prop("children"))).toBe(
      "Lorem ipsum dolor"
    );
  });
  it("removes duplicate spaces from string", () => {
    const component = shallow(
      <div>
        <p>Lorem </p> <span> ipsum </span> <em> dolor</em>
      </div>
    );
    expect(getReactChildrenText(component.prop("children"))).toBe(
      "Lorem ipsum dolor"
    );
  });
});
