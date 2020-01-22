import React from "react";

import { LinkCard } from "../";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("LinkCard", () => {
  it("renders default", () => {
    expect(
      toJSON(
        render(
          <LinkCard url="http://google.com" linkDescription="Google">
            Example Content
          </LinkCard>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with external link", () => {
    expect(
      toJSON(
        render(
          <LinkCard
            url="http://google.com"
            linkDescription="Google"
            openInNewTab={true}
          >
            Example Content
          </LinkCard>
        )
      )
    ).toMatchSnapshot();
  });
});
