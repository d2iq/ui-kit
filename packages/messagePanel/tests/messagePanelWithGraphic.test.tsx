import React from "react";

import { MessagePanelWithGraphic } from "..";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";
import { PrimaryButton, SecondaryButton } from "../../button";

describe("MessagePanelWithGraphic", () => {
  it("default", () => {
    expect(
      toJSON(
        render(
          <MessagePanelWithGraphic
            graphicSrc="http://placehold.it/350x150"
            heading="Heading"
          >
            Body content
          </MessagePanelWithGraphic>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with primary and secondary actions", () => {
    expect(
      toJSON(
        render(
          <MessagePanelWithGraphic
            graphicSrc="http://placehold.it/350x150"
            heading="Heading"
            primaryAction={<PrimaryButton>Primary</PrimaryButton>}
            secondaryAction={<SecondaryButton>Secondary</SecondaryButton>}
          >
            Body content
          </MessagePanelWithGraphic>
        )
      )
    ).toMatchSnapshot();
  });
});
