import React from "react";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

import { PageHeader } from "../";
import { Clickable } from "../../clickable";

describe("PageHeader", () => {
  it("default", () => {
    const action = () => 1;
    expect(
      toJSON(
        render(
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
        )
      )
    ).toMatchSnapshot();
  });
});
