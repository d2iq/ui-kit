import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createSerializer } from "@emotion/jest";

import { Expandable } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("Sidebar", () => {
  it("renders", () => {
    const { asFragment } = render(
      <Expandable label="Label" isOpen={true}>
        Content
      </Expandable>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { getByText, queryByText } = render(
      <Expandable label="Label">Content</Expandable>
    );
    const labelEl = getByText("Label");

    expect(queryByText("Content")).not.toBeVisible();
    fireEvent.click(labelEl);
    expect(getByText("Content")).toBeInTheDocument();
    fireEvent.click(labelEl);
    expect(queryByText("Content")).not.toBeVisible();
  });

  it("toggles open and close on chevronIcon click", async () => {
    const { getByText, queryByText, getByTestId } = render(
      <Expandable label="Label">Content</Expandable>
    );

    expect(queryByText("Content")).not.toBeVisible();
    const chevronIcon = getByTestId("icon");
    await userEvent.click(chevronIcon);
    expect(getByText("Content")).toBeInTheDocument();
    await userEvent.click(chevronIcon);
    expect(queryByText("Content")).not.toBeVisible();
  });

  it("fires onChange when button is clicked", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Expandable label="Label" isOpen={true} onChange={onChange}>
        Content
      </Expandable>
    );
    const labelEl = getByText("Label");

    expect(onChange).not.toHaveBeenCalled();
    fireEvent.click(labelEl);
    expect(onChange).toHaveBeenCalledWith(false);
    fireEvent.click(labelEl);
    expect(onChange).toHaveBeenLastCalledWith(true);
  });

  it("toggles open and closed based on controlledIsOpen prop when passed", () => {
    const { getByText } = render(
      <Expandable label="Label" controlledIsOpen>
        Content
      </Expandable>
    );

    expect(getByText("Content")).toBeInTheDocument();
    const labelEl = getByText("Label");
    labelEl.click();
    expect(getByText("Content")).toBeInTheDocument();
  });
});
