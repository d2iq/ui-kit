import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";

import { DonutChart } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("DonutChart", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <DonutChart
        data={[
          {
            percentage: 10,
            color: "#F00"
          }
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with text and label", () => {
    const { asFragment } = render(
      <DonutChart
        data={[
          {
            percentage: 10,
            color: "#F00"
          }
        ]}
        label="10%"
        text="1 of 10"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
