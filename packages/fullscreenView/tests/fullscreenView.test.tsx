import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import FullscreenView from "../components/FullscreenView";
import { PrimaryButton } from "../../button";

expect.addSnapshotSerializer(createSerializer());

describe("FullscreenView", () => {
  it("renders FullscreenView", () => {
    const closeAction = jest.fn();
    const { asFragment } = render(
      <FullscreenView
        onClose={closeAction}
        ctaButton={<PrimaryButton>CTA</PrimaryButton>}
        closeText="Close"
        title="Title"
      >
        <div tabIndex={0}>I am modal content</div>
      </FullscreenView>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
