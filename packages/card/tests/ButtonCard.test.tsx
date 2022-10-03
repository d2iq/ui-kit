import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
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

  const accessibilityProps = [
    "tabIndex",
    "role",
    "aria-disabled",
    "aria-pressed"
  ];

  it("passes accessibility props if isInput is false", () => {
    const component = create(<ButtonCard>default</ButtonCard>);
    const buttonCardNodeProps = component.root.findByProps({
      "data-cy": "buttonCard"
    }).props;
    const propKeys = Object.keys(buttonCardNodeProps);

    accessibilityProps.forEach(prop => {
      expect(propKeys.includes(prop)).toBe(true);
    });
  });
  it("does not pass accessibility props if isInput is true", () => {
    const component = create(<ButtonCard isInput>default</ButtonCard>);
    const buttonCardNodeProps = component.root.findByProps({
      "data-cy": "buttonCard"
    }).props;
    const propKeys = Object.keys(buttonCardNodeProps);

    accessibilityProps.forEach(prop => {
      expect(propKeys.includes(prop)).toBe(false);
    });
  });
});
