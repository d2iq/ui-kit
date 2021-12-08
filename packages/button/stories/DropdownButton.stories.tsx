import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {
  PrimaryDropdownButton,
  SecondaryDropdownButton,
  StandardDropdownButton,
  SuccessDropdownButton,
  DangerDropdownButton
} from "../../index";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const shapes = [
  SystemIcons.CircleCheck,
  SystemIcons.Check,
  SystemIcons.Close,
  SystemIcons.Folder,
  SystemIcons.Gear,
  SystemIcons.Services,
  SystemIcons.Users
];

export default {
  title: "Actions/Dropdown Button",
  component: StandardDropdownButton,
  argTypes: {
    children: {
      defaultValue: "Dropdown Button",
      control: {
        type: "text"
      }
    },
    iconStart: {
      options: shapes
    }
  }
} as Meta;

const Template: Story = args => (
  <StandardDropdownButton {...args}>{args.children}</StandardDropdownButton>
);

export const _StandardDropdownButton = Template.bind({});

export const _PrimaryDropdownButton = args => (
  <PrimaryDropdownButton {...args}>{args.children}</PrimaryDropdownButton>
);

export const _SecondaryDropdownButton = args => (
  <SecondaryDropdownButton {...args}>{args.children}</SecondaryDropdownButton>
);

export const _SuccessDropdownButton = args => (
  <SuccessDropdownButton {...args}>{args.children}</SuccessDropdownButton>
);

export const _DangerDropdownButton = args => (
  <DangerDropdownButton {...args}>{args.children}</DangerDropdownButton>
);
