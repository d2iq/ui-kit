import React from "react";
import { createSerializer } from "@emotion/jest";
import { render, fireEvent } from "@testing-library/react";

import { ClickToCopyButton } from "../";

expect.addSnapshotSerializer(createSerializer());

const textToCopy = "text to copy";

jest.mock("copy-to-clipboard", () => jest.fn());

describe("ClickToCopyButton", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <ClickToCopyButton textToCopy={textToCopy} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with custom children", () => {
    const { asFragment } = render(
      <ClickToCopyButton textToCopy={textToCopy}>
        custom children
      </ClickToCopyButton>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("calls onCopy when clicked ", () => {
    const onCopyFn = jest.fn();
    const { getByRole } = render(
      <ClickToCopyButton
        textToCopy={textToCopy}
        onCopy={onCopyFn}
        tooltipId="copyTooltip"
      />
    );

    expect(onCopyFn).not.toHaveBeenCalled();
    fireEvent.click(getByRole("button"));
    expect(onCopyFn).toHaveBeenCalled();
  });
});
