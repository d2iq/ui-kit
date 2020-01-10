import React from "react";

import { EmptyState } from "..";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";
import { PrimaryButton, SecondaryButton } from "../../button";

describe("EmptyState", () => {
  it("default", () => {
    expect(
      toJSON(render(<EmptyState heading="Heading">Body content</EmptyState>))
    ).toMatchSnapshot();
  });
  it("renders with primary and secondary actions", () => {
    expect(
      toJSON(
        render(
          <EmptyState
            heading="Heading"
            primaryAction={<PrimaryButton>Primary</PrimaryButton>}
            secondaryAction={<SecondaryButton>Secondary</SecondaryButton>}
          >
            Body content
          </EmptyState>
        )
      )
    ).toMatchSnapshot();
  });
});
