import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { BadgeButton } from "../";

const StringComponent = (): JSX.Element => {
  return <span>string</span>;
};
const fn = () => null;

describe("BadgeButton", () => {
  it("default", () => {
    const { asFragment } = render(
      <BadgeButton onClick={fn}>default</BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("success", () => {
    const { asFragment } = render(
      <BadgeButton onClick={fn} appearance="success">
        success
      </BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("primary", () => {
    const { asFragment } = render(
      <BadgeButton onClick={fn} appearance="primary">
        primary
      </BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("danger", () => {
    const { asFragment } = render(
      <BadgeButton onClick={fn} appearance="danger">
        danger
      </BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("warning", () => {
    const { asFragment } = render(
      <BadgeButton onClick={fn} appearance="warning">
        warning
      </BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("outline", () => {
    const { asFragment } = render(
      <BadgeButton onClick={fn} appearance="outline">
        outline
      </BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("accept jsx as children", () => {
    const { asFragment } = render(
      <BadgeButton onClick={fn}>
        <StringComponent />
      </BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("triggers onClick on click", async () => {
    const user = userEvent.setup();
    const onBadgeButtonClick = jest.fn();
    const { getByText } = render(
      <BadgeButton onClick={onBadgeButtonClick}>default</BadgeButton>
    );
    await user.click(getByText("default"));
    expect(onBadgeButtonClick).toHaveBeenCalled();
  });
});
