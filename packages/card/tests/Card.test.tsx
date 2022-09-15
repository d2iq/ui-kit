import React from "react";
import { create } from "react-test-renderer";
import { Card } from "../";

describe("Card", () => {
  it("default", () => {
    const component = create(<Card>Example Content</Card>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("with paddingSize set", () => {
    const component = create(<Card paddingSize="l">Example Content</Card>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("with aspectRatio set", () => {
    const component = create(<Card aspectRatio={[2, 1]}>Example Content</Card>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
