import React from "react";

import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Tabs, TabItem, TabTitle } from "../";

describe("Tabs", () => {
  it("renders default", () => {
    const component = mount(
      <Tabs selectedIndex={0} onSelect={() => jest.fn()}>
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

    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders vertically", () => {
    const component = mount(
      <Tabs selectedIndex={0} onSelect={() => jest.fn()} direction="vert">
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

    expect(toJson(component)).toMatchSnapshot();
  });
});
