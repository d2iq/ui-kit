import React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";

import { DonutChart } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("DonutChart", () => {
  it("renders default", () => {
    const component = create(
      <DonutChart
        data={[
          {
            percentage: 10,
            color: "#F00"
          }
        ]}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders with text and label", () => {
    const component = create(
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

    expect(component.toJSON()).toMatchSnapshot();
  });
});
