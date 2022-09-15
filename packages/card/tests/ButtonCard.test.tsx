import React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";
import { ButtonCard } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("ButtonCard", () => {
  it("renders default", () => {
    const component = create(<ButtonCard>default</ButtonCard>);

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders as isActive", () => {
    const component = create(<ButtonCard isActive={true}>default</ButtonCard>);

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders as disabled", () => {
    const component = create(<ButtonCard disabled={true}>default</ButtonCard>);

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders as hasFocus", () => {
    const component = create(<ButtonCard hasFocus={true}>default</ButtonCard>);

    expect(component.toJSON()).toMatchSnapshot();
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
