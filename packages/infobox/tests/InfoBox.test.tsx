import React from "react";
import { createSerializer } from "@emotion/jest";
import { render, fireEvent } from "@testing-library/react";
import { PrimaryAction, SecondaryAction } from "../stories/helpers/actions";
import { InfoBox, InfoBoxBanner, InfoBoxInline } from "../";

expect.addSnapshotSerializer(createSerializer());

const MessageComponent = (): JSX.Element => {
  return <span>message</span>;
};

describe("InfoBox", () => {
  it("renders default", () => {
    const dismissFn = jest.fn();
    const { asFragment } = render(
      <InfoBox message="message" onDismiss={dismissFn} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with JSX message", () => {
    const dismissFn = jest.fn();
    const { asFragment } = render(
      <InfoBox message={<MessageComponent />} onDismiss={dismissFn} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with actions", () => {
    const dismissFn = jest.fn();
    const { asFragment } = render(
      <InfoBox
        message="message"
        primaryAction={<PrimaryAction />}
        secondaryAction={<SecondaryAction />}
        onDismiss={dismissFn}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without dismiss button", () => {
    const { asFragment } = render(<InfoBox message="message" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onDismiss when clicking dismiss node", () => {
    const dismissFn = jest.fn();
    const { getByRole } = render(
      <InfoBox message="message" onDismiss={dismissFn} />
    );
    fireEvent.click(getByRole("button"));
    expect(dismissFn).toHaveBeenCalled();
  });

  describe("InfoBoxBanner", () => {
    it("renders default", () => {
      const dismissFn = jest.fn();
      const { asFragment } = render(
        <InfoBoxBanner message="message" onDismiss={dismissFn} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("InfoBoxInline", () => {
    const dismissFn = jest.fn();
    const { asFragment } = render(
      <InfoBoxInline message="message" onDismiss={dismissFn} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
