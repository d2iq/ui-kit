import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
  PrimaryDropdownButton,
  SecondaryDropdownButton,
  StandardDropdownButton,
  SuccessDropdownButton,
  WarningDropdownButton,
  DangerDropdownButton,
  OutlineDropdownButton
} from "../../index";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

export default {
  title: "Actions/Dropdown Button",
  component: StandardDropdownButton,
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    },
    iconStart: {
      options: Object.keys(SystemIcons),
      mapping: SystemIcons
    }
  },
  args: {
    children: "Dropdown Button"
  }
} as Meta;

const Template: StoryFn = args => (
  <StandardDropdownButton {...args}>{args.children}</StandardDropdownButton>
);

export const _StandardDropdownButton = {
  render: Template
};

export const _PrimaryDropdownButton = {
  render: args => (
    <PrimaryDropdownButton {...args}>{args.children}</PrimaryDropdownButton>
  )
};

export const _SecondaryDropdownButton = {
  render: args => (
    <SecondaryDropdownButton {...args}>{args.children}</SecondaryDropdownButton>
  )
};

export const _OutlineDropdownButton = {
  render: args => (
    <OutlineDropdownButton {...args}>{args.children}</OutlineDropdownButton>
  )
};

export const _SuccessDropdownButton = {
  render: args => (
    <SuccessDropdownButton {...args}>{args.children}</SuccessDropdownButton>
  )
};

export const _WarningDropdownButton = {
  render: args => (
    <WarningDropdownButton {...args}>{args.children}</WarningDropdownButton>
  )
};

export const _DangerDropdownButton = {
  render: args => (
    <DangerDropdownButton {...args}>{args.children}</DangerDropdownButton>
  )
};
