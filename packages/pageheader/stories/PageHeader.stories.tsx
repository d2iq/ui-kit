import * as React from "react";

import { PageHeader, PageHeaderBody, PageHeaderTabs } from "../index";
import { PrimaryButton, SecondaryButton, ResetButton } from "../../button";
import { Tabs, TabItem, TabTitle } from "../../tabs";
import {
  DropdownMenu,
  DropdownSection,
  DropdownMenuItem
} from "../../dropdownMenu";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const action = () => alert("Action triggered");

export default {
  title: "Page Structure/Page Header",
  component: PageHeader
};

export const Default = () => (
  <PageHeader
    breadcrumbElements={[
      <div key="Universe">Universe</div>,
      <div key="MilkyWay">Milky Way</div>,
      <div key="Earth">Earth</div>
    ]}
    actions={[
      <SecondaryButton onClick={action} key="Action2">
        Secondary
      </SecondaryButton>,
      <PrimaryButton onClick={action} key="Action1">
        Primary
      </PrimaryButton>
    ]}
  />
);

export const WithOverflowMenu = () => (
  <PageHeader
    breadcrumbElements={[
      <div key="Universe">Universe</div>,
      <div key="MilkyWay">Milky Way</div>,
      <div key="Earth">Earth</div>
    ]}
    actions={[
      <SecondaryButton onClick={action} key="Action2">
        Secondary
      </SecondaryButton>,
      <PrimaryButton onClick={action} key="Action1">
        Primary
      </PrimaryButton>,
      <DropdownMenu
        key="OverflowMenu"
        trigger={
          <ResetButton>
            <Icon shape={SystemIcons.EllipsisVertical} />
          </ResetButton>
        }
      >
        <DropdownSection>
          <DropdownMenuItem key="overflowone" value="overflowone">
            Overflow One
          </DropdownMenuItem>
          <DropdownMenuItem key="overflowtwo" value="overflowtwo">
            Overflow Two
          </DropdownMenuItem>
          <DropdownMenuItem key="overflowthree" value="overflowthree">
            Overflow Three
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    ]}
  />
);

export const WithoutActions = () => (
  <PageHeader
    breadcrumbElements={[
      <div key="Universe">Universe</div>,
      <div key="MilkyWay">Milky Way</div>,
      <div key="Earth">Earth</div>
    ]}
  />
);

export const WithPageHeaderBody = () => (
  <PageHeader
    breadcrumbElements={[
      <div key="Universe">Universe</div>,
      <div key="MilkyWay">Milky Way</div>,
      <div key="Earth">Earth</div>
    ]}
  >
    <PageHeaderBody>
      This content is rendered in the PageHeaderBody component
    </PageHeaderBody>
  </PageHeader>
);

export const WithPageHeaderTabs = () => {
  const tabOnSelect = selectedTab => {
    alert(`${selectedTab} clicked`);
  };

  return (
    <PageHeader
      breadcrumbElements={[
        <div key="Universe">Universe</div>,
        <div key="MilkyWay">Milky Way</div>,
        <div key="Earth">Earth</div>
      ]}
    >
      <PageHeaderTabs>
        <Tabs selectedIndex={0} onSelect={tabOnSelect}>
          <TabItem>
            <TabTitle>Tab 1 Name</TabTitle>
            <div>First tab Content</div>
          </TabItem>
          <TabItem>
            <TabTitle>Tab 2 Name</TabTitle>
            Second Tab Content
          </TabItem>
        </Tabs>
      </PageHeaderTabs>
    </PageHeader>
  );
};
