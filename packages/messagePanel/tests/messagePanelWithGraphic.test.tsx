import React from "react";
import { render } from "@testing-library/react";
import { MessagePanelWithGraphic } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";

describe("MessagePanelWithGraphic", () => {
  it("default", () => {
    const { asFragment } = render(
      <MessagePanelWithGraphic
        graphicSrc="http://placehold.it/350x150"
        heading="Heading"
      >
        Body content
      </MessagePanelWithGraphic>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with primary and secondary actions", () => {
    const { asFragment } = render(
      <MessagePanelWithGraphic
        graphicSrc="http://placehold.it/350x150"
        heading="Heading"
        primaryAction={<PrimaryButton>Primary</PrimaryButton>}
        secondaryAction={<SecondaryButton>Secondary</SecondaryButton>}
      >
        Body content
      </MessagePanelWithGraphic>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
