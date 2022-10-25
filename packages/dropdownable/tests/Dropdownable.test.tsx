import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";

const mockEventManager = {
  add: jest.fn(),
  remove: jest.fn()
};

jest.doMock("../../utilities/resizeEventManager", () => {
  return mockEventManager;
});

import Dropdownable from "../components/Dropdownable";
import { PrimaryButton } from "../../button";

expect.addSnapshotSerializer(createSerializer());

describe("Dropdownable", () => {
  it("dropdown is not visible when it is closed", () => {
    const { getByText, queryByText } = render(
      <Dropdownable isOpen={false} dropdown={<p>I am a touchdown</p>}>
        <PrimaryButton>Click me</PrimaryButton>
      </Dropdownable>
    );

    getByText("Click me");
    expect(queryByText("I am a touchdown")).not.toBeInTheDocument();
  });

  it("dropdown is visible when it is open", () => {
    const { getByText } = render(
      <Dropdownable isOpen dropdown={<p>I am a touchdown</p>}>
        <PrimaryButton>Click me</PrimaryButton>
      </Dropdownable>
    );

    getByText("Click me");
    getByText("I am a touchdown");
  });
});
