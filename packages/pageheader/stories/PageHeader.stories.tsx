import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { PageHeader, PageHeaderTabs } from "../index";
import { PrimaryButton, SecondaryButton, ResetButton } from "../../button";
import { SpacingBox } from "../../styleUtils/modifiers";
import { Tabs, TabItem, TabTitle } from "../../tabs";
import {
  DropdownMenu,
  DropdownSection,
  DropdownMenuItem
} from "../../dropdownMenu";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const readme = require("../README.md");
const action = () => alert("Action triggered");

storiesOf("Page structure|PageHeader", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
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
  ))
  .add("with overflow menu", () => (
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
  ))
  .add("without actions", () => (
    <PageHeader
      breadcrumbElements={[
        <div key="Universe">Universe</div>,
        <div key="MilkyWay">Milky Way</div>,
        <div key="Earth">Earth</div>
      ]}
    />
  ))
  .add("with children", () => (
    <PageHeader
      breadcrumbElements={[
        <div key="Universe">Universe</div>,
        <div key="MilkyWay">Milky Way</div>,
        <div key="Earth">Earth</div>
      ]}
    >
      <SpacingBox side="top" spacingSize="l">
        This content is PageHeader children
      </SpacingBox>
    </PageHeader>
  ))
  .add("with PageHeaderTabs", () => {
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
  });
