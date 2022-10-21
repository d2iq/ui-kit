import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CodeSnippet } from "../";

expect.addSnapshotSerializer(createSerializer());

const snippetContent = "snippet content";

jest.mock("copy-to-clipboard", () => jest.fn());

describe("CodeSnippet", () => {
  it("renders default", () => {
    const { asFragment } = render(<CodeSnippet>{snippetContent}</CodeSnippet>);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with copy button", () => {
    const { asFragment } = render(
      <CodeSnippet textToCopy={snippetContent}>{snippetContent}</CodeSnippet>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("calls onCopy when copy button is clicked ", async () => {
    const user = userEvent.setup();

    const onCopyFn = jest.fn();
    const { getByRole } = render(
      <CodeSnippet textToCopy={snippetContent} onCopy={onCopyFn}>
        {snippetContent}
      </CodeSnippet>
    );

    const copyButton = getByRole("button");

    expect(onCopyFn).not.toHaveBeenCalled();
    await user.click(copyButton);
    expect(onCopyFn).toHaveBeenCalled();
  });
});
