import React from "react";
import { render } from "@testing-library/react";
import { Card } from "../";

describe("Card", () => {
  it("default", () => {
    const { asFragment } = render(<Card>Example Content</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("with paddingSize set", () => {
    const { asFragment } = render(<Card paddingSize="l">Example Content</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("with aspectRatio set", () => {
    const { asFragment } = render(
      <Card aspectRatio={[2, 1]}>Example Content</Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
