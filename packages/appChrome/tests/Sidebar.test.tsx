import React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";

import {
  Sidebar,
  SidebarItem,
  SidebarItemLabel,
  SidebarSection,
  SidebarSubMenuItem
} from "../";
import {
  SidebarSubMenuComponent,
  getSubItemList
} from "../components/SidebarSubMenu";
import { ProductIcons } from "../../icons/dist/product-icons-enum";

expect.addSnapshotSerializer(createSerializer());

describe("Sidebar", () => {
  it("renders", () => {
    const component = create(<Sidebar isOpen={true}>Sidebar content</Sidebar>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("calls onOpen callback", () => {
    const onOpenFn = jest.fn();
    const { rerender } = render(
      <Sidebar isOpen={false} onOpen={onOpenFn}>
        Sidebar content
      </Sidebar>
    );
    expect(onOpenFn).not.toHaveBeenCalled();
    rerender(
      <Sidebar isOpen={true} onOpen={onOpenFn}>
        Sidebar content
      </Sidebar>
    );
    expect(onOpenFn).toHaveBeenCalled();
  });

  it("calls onClose callback", () => {
    const onCloseFn = jest.fn();
    const { rerender } = render(
      <Sidebar isOpen={true} onClose={console.log}>
        Sidebar content
      </Sidebar>
    );
    expect(onCloseFn).not.toHaveBeenCalled();
    rerender(
      <Sidebar isOpen={false} onClose={onCloseFn}>
        Sidebar content
      </Sidebar>
    );
    expect(onCloseFn).toHaveBeenCalled();
  });

  describe("SidebarSection", () => {
    it("renders", () => {
      const component = create(
        <SidebarSection label="Label">
          <div>Sidebar section content</div>
        </SidebarSection>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("SidebarItem", () => {
    it("renders", () => {
      const onClickFn = jest.fn();
      const component = create(
        <Sidebar isOpen={true}>
          <SidebarItem
            icon={ProductIcons.ComponentsInverse}
            onClick={onClickFn}
            url="http://google.com"
            openInNewTab={true}
          >
            Item label
          </SidebarItem>
        </Sidebar>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("SidebarItemLabel", () => {
    it("renders", () => {
      const component = create(
        <SidebarItemLabel icon={ProductIcons.ComponentsInverse}>
          Item label
        </SidebarItemLabel>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("SidebarSubMenu", () => {
    const onClickFn = jest.fn();
    /* eslint-disable react/jsx-wrap-multilines */
    const subMenuItems = [
      <SidebarSubMenuItem
        key={0}
        onClick={onClickFn}
        url="http://google.com"
        openInNewTab={true}
      >
        Item label
      </SidebarSubMenuItem>,
      <SidebarSubMenuItem
        key={1}
        onClick={onClickFn}
        url="http://google.com"
        openInNewTab={true}
      >
        Item label
      </SidebarSubMenuItem>
    ];
    /* eslint-enable react/jsx-wrap-multilines */
    const component = create(
      <SidebarSubMenuComponent
        label={
          <SidebarItemLabel icon={ProductIcons.ComponentsInverse}>
            Item label
          </SidebarItemLabel>
        }
      >
        {subMenuItems}
      </SidebarSubMenuComponent>
    );
    it("renders", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
    it("makes a list of submenu items", () => {
      const subItemResult = getSubItemList(subMenuItems);
      expect(subItemResult.props.children.length).toBe(2);
    });
  });

  describe("SidebarSubMenuItem", () => {
    it("renders", () => {
      const component = create(
        <SidebarItemLabel icon={ProductIcons.ComponentsInverse}>
          Item label
        </SidebarItemLabel>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
