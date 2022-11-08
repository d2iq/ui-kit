import * as React from "react";
import { Story, Meta } from "@storybook/react";
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
import { PageHeaderProps } from "../components/PageHeader";

const action = () => alert("Action triggered");

export default {
  title: "Page Structure/Page Header",
  component: PageHeader,
  args: {
    breadcrumbElements: [
      <div key="Universe">Universe</div>,
      <div key="MilkyWay">Milky Way</div>,
      <div key="Earth">Earth</div>
    ],
    actions: [
      <SecondaryButton onClick={action} key="Action2">
        Secondary
      </SecondaryButton>,
      <PrimaryButton onClick={action} key="Action1">
        Primary
      </PrimaryButton>
    ]
  }
} as Meta;

const Template: Story<PageHeaderProps> = args => <PageHeader {...args} />;

export const Default = Template.bind({});

export const WithOverflowMenu = Default.bind({});
WithOverflowMenu.args = {
  actions: [
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
  ]
};

export const WithoutActions = Default.bind({});
WithoutActions.args = { actions: [] };

export const WithPageHeaderBody = Default.bind({});
WithPageHeaderBody.args = {
  children: (
    <PageHeaderBody>
      This content is rendered in the PageHeaderBody component
    </PageHeaderBody>
  )
};

export const WithPageHeaderTabs = Default.bind({});
const tabOnSelect = selectedTab => {
  alert(`${selectedTab} clicked`);
};
WithPageHeaderTabs.args = {
  children: (
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
  )
};
