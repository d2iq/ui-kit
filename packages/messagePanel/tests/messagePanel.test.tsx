import React from "react";

import { MessagePanel } from "..";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";
import { PrimaryButton, SecondaryButton } from "../../button";

describe("MessagePanel", () => {
  it("default", () => {
    expect(
      toJSON(
        render(<MessagePanel heading="Heading">Body content</MessagePanel>)
      )
    ).toMatchSnapshot();
  });
  it("appearance='error'", () => {
    expect(
      toJSON(
        render(
          <MessagePanel heading="Heading" appearance="error">
            Body content
          </MessagePanel>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with primary and secondary actions", () => {
    expect(
      toJSON(
        render(
          <MessagePanel
            heading="Heading"
            primaryAction={<PrimaryButton>Primary</PrimaryButton>}
            secondaryAction={<SecondaryButton>Secondary</SecondaryButton>}
          >
            Body content
          </MessagePanel>
        )
      )
    ).toMatchSnapshot();
  });
});
