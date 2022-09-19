import React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";
import { HashMap } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("HashMap", () => {
  it("renders default", () => {
    expect(
      create(<HashMap hash={{ foo: "bar" }} />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders array value", () => {
    expect(
      create(<HashMap hash={{ foo: ["foo", "bar", "baz"] }} />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders boolean value", () => {
    expect(create(<HashMap hash={{ foo: true }} />).toJSON()).toMatchSnapshot();
  });

  it("renders empty value", () => {
    expect(
      create(<HashMap defaultValue="empty" hash={{ foo: "" }} />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with a headline", () => {
    expect(
      create(<HashMap hash={{ foo: "bar" }} headline="baz" />).toJSON()
    ).toMatchSnapshot();
  });
  it("renders with nested object hash", () => {
    const component = create(<HashMap hash={{ foo: { bar: "baz" } }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("returns null if hash is not passed", () => {
    // @ts-expect-error
    const instance = create(<HashMap />);
    expect(instance.root.children).toEqual([]);
  });

  it("returns null if undefined is passed to hash", () => {
    // @ts-expect-error
    const instance = create(<HashMap hash={undefined} />);

    expect(instance.root.children).toEqual([]);
  });

  it("returns null if empty object is passed to hash", () => {
    const instance = create(<HashMap hash={{}} />);

    expect(instance.root.children).toEqual([]);
  });
});
