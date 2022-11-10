import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { HashMap } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("HashMap", () => {
  it("renders default", () => {
    const { asFragment } = render(<HashMap hash={{ foo: "bar" }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders array value", () => {
    const { asFragment } = render(
      <HashMap hash={{ foo: ["foo", "bar", "baz"] }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders boolean value", () => {
    const { asFragment } = render(<HashMap hash={{ foo: true }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders empty value", () => {
    const { asFragment } = render(
      <HashMap defaultValue="empty" hash={{ foo: "" }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with a headline", () => {
    const { asFragment } = render(
      <HashMap hash={{ foo: "bar" }} headline="baz" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with nested object hash", () => {
    const { asFragment } = render(<HashMap hash={{ foo: { bar: "baz" } }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
