import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createSerializer } from "@emotion/jest";

import { Tooltip } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("Tooltip", () => {
  it("renders trigger element", () => {
    const { getByText } = render(
      <Tooltip id="renders" trigger="trigger">
        content
      </Tooltip>
    );
    getByText("trigger");
  });

  it("renders open tooltip", () => {
    const { getByText } = render(
      <Tooltip id="opened" trigger="trigger" isOpen={true}>
        content
      </Tooltip>
    );
    getByText("trigger");
    getByText("content");
  });

  it("show tooltip content on mouseOver", async () => {
    const { getByText, queryByText } = render(
      <Tooltip id="hoverOpen" trigger="trigger">
        content
      </Tooltip>
    );
    expect(queryByText("content")).not.toBeInTheDocument();
    await userEvent.hover(getByText("trigger"));
    getByText("content");
  });

  it("removes tooltip content on mouseLeave", async () => {
    const { getByText, queryByText } = render(
      <Tooltip id="hoverOpen" trigger="trigger" isOpen={true}>
        content
      </Tooltip>
    );
    getByText("content");
    await userEvent.unhover(getByText("trigger"));
    expect(queryByText("content")).not.toBeInTheDocument();
  });

  it("does not show tooltip content even on hover if suppress is true", async () => {
    const { queryByText, getByText } = render(
      <Tooltip id="hoverOpen" trigger="trigger" suppress={true}>
        content
      </Tooltip>
    );
    expect(queryByText("content")).not.toBeInTheDocument();
    await userEvent.hover(getByText("trigger"));
    expect(queryByText("content")).not.toBeInTheDocument();
  });

  it("calls onClose prop when closed", async () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <Tooltip id="hoverOpen" trigger="trigger" onClose={handleClose}>
        content
      </Tooltip>
    );

    await userEvent.hover(getByText("trigger"));
    expect(handleClose).toHaveBeenCalledTimes(0);
    await userEvent.unhover(getByText("trigger"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
