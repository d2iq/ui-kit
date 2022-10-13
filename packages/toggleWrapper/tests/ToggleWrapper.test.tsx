import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

import { ToggleWrapper } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("ToggleWrapper", () => {
  it("renders", () => {
    const { asFragment } = render(
      <ToggleWrapper isActive={true}>
        {({ isActive }) => <div>{`isActive? ${isActive}`}</div>}
      </ToggleWrapper>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders as a radio input", () => {
    const { asFragment } = render(
      <ToggleWrapper type="radio" isActive={true}>
        {({ isActive }) => <div>{`isActive? ${isActive}`}</div>}
      </ToggleWrapper>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("calls onFocus prop when the input gets focus", () => {
    const focusFn = jest.fn();
    const { getByTestId } = render(
      <ToggleWrapper isActive={true} onFocus={focusFn}>
        {({ isActive }) => <div>{`isActive? ${isActive}`}</div>}
      </ToggleWrapper>
    );

    expect(focusFn).not.toHaveBeenCalled();
    fireEvent.focus(getByTestId("toggleWrapper-input"));
    expect(focusFn).toHaveBeenCalled();
  });
  it("calls onBlur prop when the input loses focus", () => {
    const blurFn = jest.fn();
    const { getByTestId } = render(
      <ToggleWrapper isActive={true} onBlur={blurFn}>
        {({ isActive }) => <div>{`isActive? ${isActive}`}</div>}
      </ToggleWrapper>
    );

    expect(blurFn).not.toHaveBeenCalled();
    fireEvent.focus(getByTestId("toggleWrapper-input"));
    expect(blurFn).not.toHaveBeenCalled();
    fireEvent.blur(getByTestId("toggleWrapper-input"));
    expect(blurFn).toHaveBeenCalled();
  });
});
