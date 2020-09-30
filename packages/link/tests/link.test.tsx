import React from "react";

import { render } from "enzyme";
import toJSON from "enzyme-to-json";
import { Link, ResetLink } from "../";

describe("Link", () => {
  it("renders default", () => {
    expect(
      toJSON(
        render(
          <Link url="http://google.com" openInNewTab={true}>
            Link
          </Link>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders ResetLink", () => {
    expect(
      toJSON(
        render(
          <ResetLink url="http://google.com" openInNewTab={true}>
            Link
          </ResetLink>
        )
      )
    ).toMatchSnapshot();
  });
});
