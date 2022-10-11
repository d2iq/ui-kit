import React from "react";
import { render } from "@testing-library/react";
import { MessagePanel } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";

describe("MessagePanel", () => {
  it("default", () => {
    const { asFragment } = render(
      <MessagePanel heading="Heading">Body content</MessagePanel>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("appearance='error'", () => {
    const { asFragment } = render(
      <MessagePanel heading="Heading" appearance="error">
        Body content
      </MessagePanel>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with primary and secondary actions", () => {
    const { asFragment } = render(
      <MessagePanel
        heading="Heading"
        primaryAction={<PrimaryButton>Primary</PrimaryButton>}
        secondaryAction={<SecondaryButton>Secondary</SecondaryButton>}
      >
        Body content
      </MessagePanel>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
