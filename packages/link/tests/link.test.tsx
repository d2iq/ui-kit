import { render } from "@testing-library/react";
import React from "react";
import { Link, ResetLink } from "../";

describe("Link", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <Link url="http://google.com" openInNewTab={true}>
        Link
      </Link>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders ResetLink", () => {
    const { asFragment } = render(
      <ResetLink url="http://google.com" openInNewTab={true}>
        Link
      </ResetLink>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
