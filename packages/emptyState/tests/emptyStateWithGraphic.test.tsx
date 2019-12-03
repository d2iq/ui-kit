import React from "react";

import { EmptyStateWithGraphic } from "..";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";
import { PrimaryButton, SecondaryButton } from "../../button";

describe("EmptyStateWithGraphic", () => {
  it("default", () => {
    expect(
      toJSON(
        render(
          <EmptyStateWithGraphic
            graphicSrc="http://placehold.it/350x150"
            heading="Heading"
          >
            Body content
          </EmptyStateWithGraphic>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with primary and secondary actions", () => {
    expect(
      toJSON(
        render(
          <EmptyStateWithGraphic
            graphicSrc="http://placehold.it/350x150"
            heading="Heading"
            primaryAction={<PrimaryButton>Primary</PrimaryButton>}
            secondaryAction={<SecondaryButton>Secondary</SecondaryButton>}
          >
            Body content
          </EmptyStateWithGraphic>
        )
      )
    ).toMatchSnapshot();
  });
});
