import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { BadgeButton } from "../";

const StringComponent = (): JSX.Element => {
  return <span>string</span>;
};
const fn = () => null;

describe("BadgeButton", () => {
  it("default", () => {
    const component = mount(<BadgeButton onClick={fn}>default</BadgeButton>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("success", () => {
    const component = mount(
      <BadgeButton onClick={fn} appearance="success">
        success
      </BadgeButton>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("primary", () => {
    const component = mount(
      <BadgeButton onClick={fn} appearance="primary">
        primary
      </BadgeButton>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("danger", () => {
    const component = mount(
      <BadgeButton onClick={fn} appearance="danger">
        danger
      </BadgeButton>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("warning", () => {
    const component = mount(
      <BadgeButton onClick={fn} appearance="warning">
        warning
      </BadgeButton>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("outline", () => {
    const component = mount(
      <BadgeButton onClick={fn} appearance="outline">
        outline
      </BadgeButton>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("accept jsx as children", () => {
    const component = mount(
      <BadgeButton onClick={fn}>
        <StringComponent />
      </BadgeButton>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("contains the right tabindex", () => {
    const wrapper = mount(
      <BadgeButton onClick={jest.fn()} tabIndex={-10}>
        default
      </BadgeButton>
    );
    const element = wrapper.find("span").props();
    expect(element.tabIndex).toBe(-10);
  });

  it("triggers onClick on click", () => {
    const onBadgeButtonClick = jest.fn();
    const wrapper = mount(
      <BadgeButton onClick={onBadgeButtonClick}>default</BadgeButton>
    );
    wrapper.simulate("click");
    expect(onBadgeButtonClick).toHaveBeenCalled();
  });
});
