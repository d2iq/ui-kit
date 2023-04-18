import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {
  PrimaryDropdownButton,
  SecondaryDropdownButton,
  StandardDropdownButton,
  SuccessDropdownButton,
  WarningDropdownButton,
  DangerDropdownButton
} from "../../index";
import {
  systemIconLabels,
  systemIcons
} from "../../storybookHelpers/controlConstants";

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
      options: systemIcons,
      control: {
        type: "select"
      },
      mapping: systemIconLabels
    }
  },
  args: {
    children: "Dropdown Button"
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

export const _WarningDropdownButton = args => (
  <WarningDropdownButton {...args}>{args.children}</WarningDropdownButton>
);

export const _DangerDropdownButton = args => (
  <DangerDropdownButton {...args}>{args.children}</DangerDropdownButton>
);
