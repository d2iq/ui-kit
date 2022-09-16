import React from "react";
import { create } from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { BadgeButton } from "../";

const StringComponent = (): JSX.Element => {
  return <span>string</span>;
};
const fn = () => null;

describe("BadgeButton", () => {
  it("default", () => {
    expect(
      create(<BadgeButton onClick={fn}>default</BadgeButton>).toJSON()
    ).toMatchSnapshot();
  });

  it("success", () => {
    expect(
      create(
        <BadgeButton onClick={fn} appearance="success">
          success
        </BadgeButton>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it("primary", () => {
    expect(
      create(
        <BadgeButton onClick={fn} appearance="primary">
          primary
        </BadgeButton>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it("danger", () => {
    expect(
      create(
        <BadgeButton onClick={fn} appearance="danger">
          danger
        </BadgeButton>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it("warning", () => {
    expect(
      create(
        <BadgeButton onClick={fn} appearance="warning">
          warning
        </BadgeButton>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it("outline", () => {
    expect(
      create(
        <BadgeButton onClick={fn} appearance="outline">
          outline
        </BadgeButton>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it("accept jsx as children", () => {
    expect(
      create(
        <BadgeButton onClick={fn}>
          <StringComponent />
        </BadgeButton>
      ).toJSON()
    ).toMatchSnapshot();
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
