import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { BadgeButton } from "../";

const StringComponent = (): JSX.Element => {
  return <span>string</span>;
};
const fn = () => null;

describe("BadgeButton", () => {
  it("default", () => {
    expect(
      renderer.create(<BadgeButton onClick={fn}>default</BadgeButton>).toJSON()
    ).toMatchSnapshot();
  });

  it("success", () => {
    expect(
      renderer
        .create(
          <BadgeButton onClick={fn} appearance="success">
            success
          </BadgeButton>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("primary", () => {
    expect(
      renderer
        .create(
          <BadgeButton onClick={fn} appearance="primary">
            primary
          </BadgeButton>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("danger", () => {
    expect(
      renderer
        .create(
          <BadgeButton onClick={fn} appearance="danger">
            danger
          </BadgeButton>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("warning", () => {
    expect(
      renderer
        .create(
          <BadgeButton onClick={fn} appearance="warning">
            warning
          </BadgeButton>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("outline", () => {
    expect(
      renderer
        .create(
          <BadgeButton onClick={fn} appearance="outline">
            outline
          </BadgeButton>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("accept jsx as children", () => {
    expect(
      renderer
        .create(
          <BadgeButton onClick={fn}>
            <StringComponent />
          </BadgeButton>
        )
        .toJSON()
    ).toMatchSnapshot();
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
