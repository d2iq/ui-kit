import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

expect.addSnapshotSerializer(createSerializer());

import { ProgressBar } from "../";
import { ProgressBarSizes } from "../components/ProgressBar";

describe("ProgressBar", () => {
  it("renders with one segment of data", () => {
    const { asFragment } = render(<ProgressBar data={[{ percentage: 40 }]} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with multiple segments of data", () => {
    const { asFragment } = render(
      <ProgressBar
        data={[
          { color: "green", percentage: 40 },
          { color: "yellow", percentage: 20 }
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders all sizes", () => {
    Object.keys(ProgressBarSizes).forEach(size => {
      const { asFragment } = render(
        <ProgressBar
          size={ProgressBarSizes[size]}
          isProcessing={true}
          data={[{ percentage: 40 }]}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
  it("renders isProcessing", () => {
    const { asFragment } = render(
      <ProgressBar isProcessing={true} data={[{ percentage: 40 }]} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with caption text and value text", () => {
    const { asFragment } = render(
      <ProgressBar caption="Caption" value="40%" data={[{ percentage: 40 }]} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
