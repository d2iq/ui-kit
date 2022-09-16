import React from "react";
import { createSerializer } from "@emotion/jest";
import { Icon } from "../";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { create } from "react-test-renderer";

expect.addSnapshotSerializer(createSerializer());

describe("Icon", () => {
  it("renders", () => {
    const component = create(
      <Icon
        shape={SystemIcons.ArrowDown}
        color="blue"
        size="l"
        ariaLabel="test icon"
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders with defaults", () => {
    const component = create(<Icon shape={SystemIcons.ArrowDown} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders display block", () => {
    const component = create(<Icon shape={SystemIcons.ArrowDown} block />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
