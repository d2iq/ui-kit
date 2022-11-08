import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import { ButtonCard } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("ButtonCard", () => {
  it("renders default", () => {
    const { asFragment } = render(<ButtonCard>default</ButtonCard>);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders as isActive", () => {
    const { asFragment } = render(
      <ButtonCard isActive={true}>default</ButtonCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders as disabled", () => {
    const { asFragment } = render(
      <ButtonCard disabled={true}>default</ButtonCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders as hasFocus", () => {
    const { asFragment } = render(
      <ButtonCard hasFocus={true}>default</ButtonCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
