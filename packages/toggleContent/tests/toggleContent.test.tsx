import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";

import { ToggleContent } from "..";

expect.addSnapshotSerializer(createSerializer());

const primary = () => <div>primary</div>;
const secondary = () => <div>secondary</div>;

describe("ToggleContent", () => {
  beforeEach(() => {
    const mock = jest.fn();
    mock.mockReturnValue({
      toString: jest.fn()
    });
    window.getSelection = mock;
  });

  it("renders a div wrapping the content passed as props", () => {
    const { asFragment } = render(
      <ToggleContent tabIndex="0" contentOn="Hello" contentOff="Bye" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("string content", () => {
    const { getByTestId } = render(
      <ToggleContent contentOn="Hello" contentOff="Bye" />
    );
    const toggleElement = getByTestId("toggleContent");

    expect(toggleElement).toHaveTextContent("Hello");
    toggleElement.click();
    expect(toggleElement).toHaveTextContent("Bye");
  });

  it("component content", () => {
    const { getByTestId } = render(
      <ToggleContent contentOn={primary()} contentOff={secondary()} />
    );
    const toggleElement = getByTestId("toggleContent");

    expect(toggleElement).toHaveTextContent("primary");
    toggleElement.click();
    expect(toggleElement).toHaveTextContent("secondary");
  });
});
