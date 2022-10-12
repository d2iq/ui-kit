import React from "react";
import { render } from "@testing-library/react";

import { PageHeader } from "../";
import { Clickable } from "../../clickable";

describe("PageHeader", () => {
  it("default", () => {
    const action = () => 1;
    const { asFragment } = render(
      <PageHeader
        breadcrumbElements={[
          <span key="One">One</span>,
          <span key="Two">Two</span>
        ]}
        actions={[
          <Clickable key="Action1" action={action}>
            <div>Action 1</div>
          </Clickable>
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
