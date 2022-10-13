import React from "react";
import { render } from "@testing-library/react";

import { Tabs, TabItem, TabTitle } from "../";
const handler = (_: number): void => {
  /* empty*/
};
describe("Tabs", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <Tabs selectedIndex={0} onSelect={handler}>
        <TabItem>
          <TabTitle>Tab 1 Name</TabTitle>
          <div>First tab Content</div>
        </TabItem>
        <TabItem>
          <TabTitle>Tab 2 Name</TabTitle>
          Second Tab Content
        </TabItem>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders vertically", () => {
    const { asFragment } = render(
      <Tabs selectedIndex={0} onSelect={handler} direction="vert">
        <TabItem>
          <TabTitle>Tab 1 Name</TabTitle>
          <div>First tab Content</div>
        </TabItem>
        <TabItem>
          <TabTitle>Tab 2 Name</TabTitle>
          Second Tab Content
        </TabItem>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
