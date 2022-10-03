import React from "react";
import { createSerializer } from "@emotion/jest";
import { Icon } from "../";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { render } from "@testing-library/react";

expect.addSnapshotSerializer(createSerializer());

describe("Icon", () => {
  it("renders", () => {
    const { asFragment } = render(
      <Icon
        shape={SystemIcons.ArrowDown}
        color="blue"
        size="l"
        ariaLabel="test icon"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with defaults", () => {
    const { asFragment } = render(<Icon shape={SystemIcons.ArrowDown} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders display block", () => {
    const { asFragment } = render(<Icon shape={SystemIcons.ArrowDown} block />);

    expect(asFragment()).toMatchSnapshot();
  });
});
