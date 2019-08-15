import React from "react";

import { render } from "enzyme";
import toJSON from "enzyme-to-json";

import { Tabs, TabItem, TabTitle } from "../";
const handler = (_: number): void => {
  /* empty*/
};
describe("Tabs", () => {
  it("default", () => {
    expect(
      toJSON(
        render(
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
        )
      )
    ).toMatchSnapshot();
  });
});
