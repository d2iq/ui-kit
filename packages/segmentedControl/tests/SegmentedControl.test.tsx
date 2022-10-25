import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";

import { SegmentedControl, SegmentedControlButton } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("SegmentedControl", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <SegmentedControl id="controlId">
        <SegmentedControlButton value="one">One</SegmentedControlButton>
        <SegmentedControlButton value="two">Two</SegmentedControlButton>
        <SegmentedControlButton value="three">Three</SegmentedControlButton>
      </SegmentedControl>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with selected", () => {
    const { asFragment } = render(
      <SegmentedControl id="controlId" selectedSegment="one">
        <SegmentedControlButton value="one">One</SegmentedControlButton>
        <SegmentedControlButton value="two">Two</SegmentedControlButton>
        <SegmentedControlButton value="three">Three</SegmentedControlButton>
      </SegmentedControl>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders buttons with ID prop when it is passed", () => {
    const { getAllByTestId, getAllByRole } = render(
      <SegmentedControl id="controlId">
        <SegmentedControlButton id="btnOne" value="one">
          One
        </SegmentedControlButton>
        <SegmentedControlButton id="btnTwo" value="two">
          Two
        </SegmentedControlButton>
        <SegmentedControlButton id="btnThree" value="three">
          Three
        </SegmentedControlButton>
      </SegmentedControl>
    );
    const firstLabelElement = getAllByTestId(
      "segmentedControlButton"
    )[0] as HTMLLabelElement;
    const firstRadioButton = getAllByRole("radio")[0] as HTMLInputElement;

    expect(firstLabelElement.htmlFor).toBe("btnOne");
    expect(firstRadioButton.id).toBe("btnOne");
    expect(firstRadioButton.id).toBe(firstLabelElement.htmlFor);
  });

  it("renders buttons with generated ID prop", () => {
    const { getAllByTestId, getAllByRole } = render(
      <SegmentedControl id="controlId">
        <SegmentedControlButton value="one">One</SegmentedControlButton>
        <SegmentedControlButton value="two">Two</SegmentedControlButton>
        <SegmentedControlButton value="three">Three</SegmentedControlButton>
      </SegmentedControl>
    );
    const firstLabelElement = getAllByTestId(
      "segmentedControlButton"
    )[0] as HTMLLabelElement;
    const firstRadioButton = getAllByRole("radio")[0] as HTMLInputElement;

    expect(typeof firstLabelElement.htmlFor).toBe("string");
    expect(typeof firstRadioButton.id).toBe("string");
    expect(firstLabelElement.htmlFor).toBe(firstRadioButton.id);
  });
});
