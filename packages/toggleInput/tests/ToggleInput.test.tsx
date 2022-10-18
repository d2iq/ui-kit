import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { ToggleInput } from "../";
import { InputAppearance } from "../../shared/types/inputAppearance";

expect.addSnapshotSerializer(createSerializer());

describe("ToggleInput", () => {
  it("renders all appearances", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment } = render(
        <ToggleInput
          id="defaultId"
          inputLabel="Sample label"
          value="default"
          appearance={InputAppearance[appearance]}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
  it("renders a checkbox input type", () => {
    const { asFragment } = render(
      <ToggleInput
        id="defaultId"
        inputLabel="Sample label"
        value="default"
        inputType="checkbox"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders a radio input type", () => {
    const { asFragment } = render(
      <ToggleInput
        id="defaultId"
        inputLabel="Sample label"
        value="default"
        inputType="radio"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("calls onFocus if its passed in as a prop", () => {
    const focusFn = jest.fn();
    const { getByTestId } = render(
      <ToggleInput
        id="defaultId"
        inputLabel="Sample label"
        value="default"
        onFocus={focusFn}
      />
    );
    expect(focusFn).not.toHaveBeenCalled();
    fireEvent.focus(getByTestId("checkboxInput-input"));
    expect(focusFn).toHaveBeenCalled();
  });

  it("calls onBlur if its passed in as a prop", () => {
    const blurFn = jest.fn();
    const { getByTestId } = render(
      <ToggleInput
        id="defaultId"
        inputLabel="Sample label"
        value="default"
        onBlur={blurFn}
      />
    );
    expect(blurFn).not.toHaveBeenCalled();
    fireEvent.focus(getByTestId("checkboxInput-input"));
    expect(blurFn).not.toHaveBeenCalled();
    fireEvent.blur(getByTestId("checkboxInput-input"));
    expect(blurFn).toHaveBeenCalled();
  });
});
