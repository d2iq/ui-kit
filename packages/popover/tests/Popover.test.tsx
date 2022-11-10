import React from "react";
import { createSerializer } from "@emotion/jest";

import Popover from "../components/Popover";
import { render, fireEvent } from "@testing-library/react";

expect.addSnapshotSerializer(createSerializer());

const triggerId = "trigger";

describe("Popover", () => {
  it("renders a closed dropdown", () => {
    const { asFragment } = render(
      <Popover trigger="Dropdown trigger">
        <div>dropdown content</div>
      </Popover>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders an open dropdown", () => {
    const { asFragment } = render(
      <Popover initialIsOpen={true} trigger="Dropdown trigger">
        <div>dropdown content</div>
      </Popover>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders a dropdown with a max width and max height", () => {
    const { asFragment } = render(
      <Popover trigger="Dropdown trigger" maxHeight={50} maxWidth={50}>
        <div>dropdown content</div>
      </Popover>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an element passed as to the trigger prop", () => {
    const { getByTestId } = render(
      <Popover trigger={<div data-cy={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </Popover>
    );

    expect(getByTestId(triggerId)).toBeTruthy();
  });
  it("toggles the dropdown on click", () => {
    const { getByTestId } = render(
      <Popover trigger={<div data-cy={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </Popover>
    );

    const triggerElement = getByTestId(triggerId);

    expect(triggerElement.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(triggerElement);
    expect(triggerElement.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(triggerElement);
    expect(triggerElement.getAttribute("aria-expanded")).toBe("false");
  });
  it("opens the dropdown menu when focusing and pressing the spacebar, and closes it on blur", () => {
    const { getByTestId } = render(
      <Popover trigger={<div data-cy={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </Popover>
    );
    const triggerElement = getByTestId(triggerId);

    expect(triggerElement.getAttribute("aria-expanded")).toBe("false");

    triggerElement.focus();

    fireEvent.keyDown(triggerElement, {
      key: " "
    });

    expect(triggerElement.getAttribute("aria-expanded")).toBe("true");

    triggerElement.blur();

    // setTimeout needed because there is a setTimeout in the onBlur handler
    setTimeout(() => {
      expect(triggerElement.getAttribute("aria-expanded")).toBe("false");
    }, 0);
  });
  it("opens the dropdown menu when focusing and pressing the down arrow", () => {
    const { getByTestId } = render(
      <Popover trigger={<div data-cy={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </Popover>
    );
    const triggerElement = getByTestId(triggerId);

    expect(triggerElement.getAttribute("aria-expanded")).toBe("false");

    triggerElement.focus();
    fireEvent.keyDown(triggerElement, {
      key: "ArrowDown"
    });

    expect(triggerElement.getAttribute("aria-expanded")).toBe("true");
  });

  it("closes the dropdown when keying Escape", () => {
    const { getByTestId } = render(
      <Popover trigger={<div data-cy={triggerId}>Dropdown trigger</div>}>
        <div>dropdown content</div>
      </Popover>
    );
    const triggerElement = getByTestId(triggerId);

    expect(triggerElement.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(triggerElement);
    expect(triggerElement.getAttribute("aria-expanded")).toBe("true");
    fireEvent.keyDown(triggerElement, {
      key: "Escape"
    });

    // setTimeout needed because there is a setTimeout in the onBlur handler
    setTimeout(() => {
      expect(triggerElement.getAttribute("aria-expanded")).toBe("false");
    }, 0);
  });
});
