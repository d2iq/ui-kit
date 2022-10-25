import React from "react";
import { createSerializer } from "@emotion/jest";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextInputWithBadges, {
  getStringAsBadgeDatum
} from "../components/TextInputWithBadges";

expect.addSnapshotSerializer(createSerializer());

const defaultBadges = [
  {
    label: "Badge one",
    value: "badge-one"
  },
  {
    label: "Badge two",
    value: "badge-two"
  },
  {
    label: "Badge three",
    value: "badge-three"
  }
];

describe("TextInputWithBadges", () => {
  it("renders empty", () => {
    const { getByText, queryAllByTestId } = render(
      <TextInputWithBadges id="empty" inputLabel="empty" />
    );
    getByText("empty");
    expect(queryAllByTestId("badge").length).toBe(0);
  });

  it("renders with badges", () => {
    const { getByText, asFragment, getAllByTestId } = render(
      <TextInputWithBadges
        id="withBadges"
        inputLabel="With badges"
        badges={defaultBadges}
      />
    );
    getByText("With badges");
    expect(getAllByTestId("badge").length).toBe(3);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders badges with custom BadgeAppearance", () => {
    const { asFragment } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        badges={defaultBadges}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onBadgeChange with the badge data and input value when keying enter", async () => {
    const badgeChangeHandler = jest.fn();
    const inputValue = "some value";
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        value={inputValue}
        onBadgeChange={badgeChangeHandler}
      />
    );
    const inputEl = getByRole("textbox");

    expect(badgeChangeHandler).not.toHaveBeenCalled();
    await userEvent.type(inputEl, "[Enter]");

    expect(badgeChangeHandler).toHaveBeenCalledWith(
      [getStringAsBadgeDatum(inputValue)],
      getStringAsBadgeDatum(inputValue)
    );
  });

  it("calls onBadgeChange with the badge data and input value when the input blurs", async () => {
    const badgeChangeHandler = jest.fn();
    const inputValue = "some value";
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        value={inputValue}
        onBadgeChange={badgeChangeHandler}
      />
    );
    const inputEl = getByRole("textbox");

    expect(badgeChangeHandler).not.toHaveBeenCalled();
    inputEl.focus();
    await userEvent.tab();

    expect(badgeChangeHandler).toHaveBeenCalledWith(
      [getStringAsBadgeDatum(inputValue)],
      getStringAsBadgeDatum(inputValue)
    );
  });

  it("does not call onBadgeChange with the badge data and input value when the input blurs if addBadgeOnBlur=false", async () => {
    const badgeChangeHandler = jest.fn();
    const inputValue = "some value";
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        value={inputValue}
        onBadgeChange={badgeChangeHandler}
        addBadgeOnBlur={false}
      />
    );
    const inputEl = getByRole("textbox");

    expect(badgeChangeHandler).not.toHaveBeenCalled();
    inputEl.focus();
    await userEvent.tab();

    expect(badgeChangeHandler).not.toHaveBeenCalledWith(
      [getStringAsBadgeDatum(inputValue)],
      getStringAsBadgeDatum(inputValue)
    );
  });

  it("does not call onBadgeChange when keying enter if the input value is undefined", async () => {
    const badgeChangeHandler = jest.fn();
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        onBadgeChange={badgeChangeHandler}
      />
    );
    const inputEl = getByRole("textbox");

    expect(badgeChangeHandler).not.toHaveBeenCalled();
    await userEvent.type(inputEl, "[Enter]");
    expect(badgeChangeHandler).not.toHaveBeenCalled();
  });

  it("does not call onBadgeChange when keying enter if the input value is whitespace chars", async () => {
    const badgeChangeHandler = jest.fn();
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        value=" "
        onBadgeChange={badgeChangeHandler}
      />
    );
    const inputEl = getByRole("textbox");

    expect(badgeChangeHandler).not.toHaveBeenCalled();
    await userEvent.type(inputEl, "[Enter]");
    expect(badgeChangeHandler).not.toHaveBeenCalled();
  });

  it("calls onBadgeChange with the badge data when clicking the close icon", async () => {
    const firstBadge = { value: "firstbadge", label: "First badge" };
    const badgeChangeHandler = jest.fn();
    const { getAllByTestId } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        badges={[firstBadge, ...defaultBadges]}
        onBadgeChange={badgeChangeHandler}
      />
    );
    const allBadgesEl = getAllByTestId("badge");
    const firstBadgeEl = allBadgesEl[0];
    const firstBadgeCloseIcon = await within(firstBadgeEl).findByRole("button");

    expect(badgeChangeHandler).not.toHaveBeenCalled();
    firstBadgeCloseIcon.click();
    expect(badgeChangeHandler).toHaveBeenCalledWith(defaultBadges, firstBadge);
  });

  it("calls onBadgeChange with the last badge's data when keying backspace", async () => {
    const lastBadge = { value: "lastbadge", label: "Last badge" };
    const badgeChangeHandler = jest.fn();
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        badges={[...defaultBadges, lastBadge]}
        onBadgeChange={badgeChangeHandler}
      />
    );
    const inputEl = getByRole("textbox");

    expect(badgeChangeHandler).not.toHaveBeenCalled();
    await userEvent.type(inputEl, "[Backspace]");

    expect(badgeChangeHandler).toHaveBeenCalledWith(defaultBadges, lastBadge);
  });

  it("calls the input's onKeyDown prop", async () => {
    const onKeyDownFn = jest.fn();
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        onKeyDown={onKeyDownFn}
      />
    );
    const inputEl = getByRole("textbox");

    expect(onKeyDownFn).not.toHaveBeenCalled();
    await userEvent.type(inputEl, "[Space]");
    expect(onKeyDownFn).toHaveBeenCalled();
  });

  it("calls the input's onKeyUp prop", async () => {
    const onKeyUpFn = jest.fn();
    const { getByRole } = render(
      <TextInputWithBadges
        id="appearance"
        inputLabel="Appearance"
        onKeyUp={onKeyUpFn}
      />
    );
    const inputEl = getByRole("textbox");

    expect(onKeyUpFn).not.toHaveBeenCalled();
    await userEvent.type(inputEl, "[Space]");
    expect(onKeyUpFn).toHaveBeenCalled();
  });
});
