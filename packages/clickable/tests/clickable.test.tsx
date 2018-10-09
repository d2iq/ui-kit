import { shallow } from "enzyme";
import React from "react";
import Clickable from "../components/clickable";

describe("Clickable", () => {
  it("has role attribute", () => {
    const wrapper = shallow(
      <Clickable action={jest.fn()}>
        <span>onClick</span>
      </Clickable>
    );
    expect(wrapper.prop("role")).toBe("button");
  });
  it("has onClick function", () => {
    const action = jest.fn();
    const wrapper = shallow(
      <Clickable action={action}>
        <span>onClick</span>
      </Clickable>
    );
    wrapper.simulate("click");
    expect(action).toHaveBeenCalled();
  });

  it("has onKeyPress function and reacts on space", () => {
    const action = jest.fn();
    const wrapper = shallow(
      <Clickable action={action}>
        <span>onKeyPress</span>
      </Clickable>
    );
    wrapper.simulate("keyPress", {
      key: " ",
      keyCode: 32,
      which: 32
    });
    expect(action).toHaveBeenCalled();
  });

  it("has onKeyPress function and reacts on Enter", () => {
    const action = jest.fn();
    const wrapper = shallow(
      <Clickable action={action}>
        <span>onKeyPress</span>
      </Clickable>
    );
    wrapper.simulate("keyPress", {
      key: "Enter",
      keyCode: 13,
      which: 13
    });
    expect(action).toHaveBeenCalled();
  });
  it("does not react on e keypress", () => {
    const action = jest.fn();
    const wrapper = shallow(
      <Clickable action={action}>
        <span>onKeyPress</span>
      </Clickable>
    );
    wrapper.simulate("keyPress", {
      key: "e",
      keyCode: 69,
      which: 69
    });
    expect(action).not.toHaveBeenCalled();
  });
  describe("tabIndex", () => {
    it("default value", () => {
      const action = jest.fn();
      const wrapper = shallow(
        <Clickable action={action}>
          <span>default tabIndex</span>
        </Clickable>
      );
      const tabIndex = wrapper.find("span").props().tabIndex || "";
      expect(tabIndex.toString()).toEqual("-1");
    });

    it("takes 10 as a value", () => {
      const action = jest.fn();
      const wrapper = shallow(
        <Clickable action={action} tabIndex="10">
          <span>default tabIndex</span>
        </Clickable>
      );
      expect(wrapper.find("span").props().tabIndex || null).toEqual("10");
    });
  });
});
