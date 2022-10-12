import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

import SpacingBox from "../components/SpacingBox";

expect.addSnapshotSerializer(createSerializer());

describe("SpacingBox", () => {
  it("renders default", () => {
    const { asFragment } = render(<SpacingBox tag="div">content</SpacingBox>);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with all props", () => {
    const { asFragment } = render(
      <SpacingBox tag="div" side="top" spacingSize="l">
        content
      </SpacingBox>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with responsive spacingSize", () => {
    const { asFragment } = render(
      <SpacingBox
        tag="div"
        side="top"
        spacingSize={{ default: "s", medium: "m" }}
      >
        content
      </SpacingBox>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with different spacing on each side", () => {
    const { asFragment } = render(
      <SpacingBox
        tag="div"
        spacingSizePerSide={{
          top: "none",
          right: "xs",
          bottom: "s",
          left: "m"
        }}
      >
        content
      </SpacingBox>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with responsive spacing on each side", () => {
    const { asFragment } = render(
      <SpacingBox
        tag="div"
        spacingSizePerSide={{
          top: {
            default: "none",
            medium: "xs"
          },
          right: {
            default: "none",
            medium: "s"
          },
          bottom: {
            default: "none",
            medium: "m"
          },
          left: {
            default: "none",
            medium: "l"
          }
        }}
      >
        content
      </SpacingBox>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
