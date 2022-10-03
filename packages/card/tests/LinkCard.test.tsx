import React from "react";
import { render } from "@testing-library/react";
import { LinkCard } from "../";

describe("LinkCard", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <LinkCard url="http://google.com" linkDescription="Google">
        Example Content
      </LinkCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with external link", () => {
    const { asFragment } = render(
      <LinkCard
        url="http://google.com"
        linkDescription="Google"
        openInNewTab={true}
      >
        Example Content
      </LinkCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
