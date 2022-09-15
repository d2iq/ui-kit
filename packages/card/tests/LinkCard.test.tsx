import React from "react";
import { create } from "react-test-renderer";
import { LinkCard } from "../";

describe("LinkCard", () => {
  it("renders default", () => {
    const component = create(
      <LinkCard url="http://google.com" linkDescription="Google">
        Example Content
      </LinkCard>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("renders with external link", () => {
    const component = create(
      <LinkCard
        url="http://google.com"
        linkDescription="Google"
        openInNewTab={true}
      >
        Example Content
      </LinkCard>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
