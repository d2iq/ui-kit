import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

import {
  Sidebar,
  SidebarItem,
  SidebarItemLabel,
  SidebarSection,
  SidebarSubMenu,
  SidebarSubMenuItem
} from "../";
import { PlaceholderIcon } from "../stories/helpers/StorybookSidebarHelpers";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Sidebar", () => {
  it("renders", () => {
    const component = shallow(<Sidebar isOpen={true}>Sidebar content</Sidebar>);
    expect(toJson(component)).toMatchSnapshot();
  });
  it("calls onOpen callback", () => {
    const onOpenFn = jest.fn();
    const component = shallow(
      <Sidebar isOpen={false} onOpen={onOpenFn}>
        Sidebar content
      </Sidebar>
    );
    expect(onOpenFn).not.toHaveBeenCalled();
    component.setProps({ isOpen: true });
    expect(onOpenFn).toHaveBeenCalled();
  });
  it("calls onClose callback", () => {
    const onCloseFn = jest.fn();
    const component = shallow(
      <Sidebar isOpen={true} onClose={onCloseFn}>
        Sidebar content
      </Sidebar>
    );
    expect(onCloseFn).not.toHaveBeenCalled();
    component.setProps({ isOpen: false });
    expect(onCloseFn).toHaveBeenCalled();
  });

  describe("SidebarSection", () => {
    it("renders", () => {
      const component = shallow(
        <SidebarSection label="Label">
          <div>Sidebar section content</div>
        </SidebarSection>
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe("SidebarItem", () => {
    it("renders", () => {
      const onClickFn = jest.fn();
      const component = shallow(
        <SidebarItem icon={<PlaceholderIcon />} onClick={onClickFn}>
          Item label
        </SidebarItem>
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe("SidebarItemLabel", () => {
    it("renders", () => {
      const component = shallow(
        <SidebarItemLabel icon={<PlaceholderIcon />}>
          Item label
        </SidebarItemLabel>
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe("SidebarSubMenu", () => {
    const onClickFn = jest.fn();
    // tslint:disable:jsx-wrap-multiline
    const subMenuItems = [
      <SidebarSubMenuItem key={0} onClick={onClickFn}>
        Item label
      </SidebarSubMenuItem>,
      <SidebarSubMenuItem key={1} onClick={onClickFn}>
        Item label
      </SidebarSubMenuItem>
    ];
    // tslint:enable
    const component = shallow(
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={<PlaceholderIcon />}>
            Item label
          </SidebarItemLabel>
        }
      >
        {subMenuItems}
      </SidebarSubMenu>
    );
    it("renders", () => {
      expect(toJson(component)).toMatchSnapshot();
    });
    it("makes a list of submenu items", () => {
      const instance = component.instance() as SidebarSubMenu;
      const subItemResult = instance.getSubItemList(subMenuItems);
      expect(subItemResult.props.children.length).toBe(2);
    });
  });

  describe("SidebarSubMenuItem", () => {
    it("renders", () => {
      const component = shallow(
        <SidebarItemLabel icon={<PlaceholderIcon />}>
          Item label
        </SidebarItemLabel>
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
