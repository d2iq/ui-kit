import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {
  PrimaryButton,
  SecondaryButton,
  StandardButton,
  SuccessButton,
  DangerButton
} from "../../";
import { action } from "@storybook/addon-actions";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ButtonProps } from "../components/ButtonBase";
import {
  systemIconLabels,
  systemIcons
} from "../../storybookHelpers/controlConstants";
export default {
  title: "Actions/Button",
  component: StandardButton,
  subComponents: {
    PrimaryButton,
    SecondaryButton,
    SuccessButton,
    DangerButton
  },
  decorators: [Story => <div style={{ margin: "0 3em" }}>{Story()}</div>],
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    },
    iconStart: {
      options: Object.keys(SystemIcons),
      mapping: SystemIcons
    },
    iconEnd: {
      options: Object.keys(SystemIcons),
      mapping: SystemIcons
    }
  },
  args: {
    children: "Button"
  }
} as Meta;

const Template: Story<ButtonProps> = args => (
  <StandardButton {...args}>{args.children}</StandardButton>
);

export const Standard = Template.bind({});

export const _PrimaryButton = args => (
  <PrimaryButton {...args}>{args.children}</PrimaryButton>
);

export const _SecondaryButton = args => (
  <SecondaryButton {...args}>{args.children}</SecondaryButton>
);

export const _SuccessButton = args => (
  <SuccessButton {...args}>{args.children}</SuccessButton>
);

export const _DangerButton = args => (
  <DangerButton {...args}>{args.children}</DangerButton>
);

export const WithIcons = Template.bind({});
WithIcons.args = {
  iconStart: SystemIcons.Close,
  iconEnd: SystemIcons.ArrowRight
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconStart: SystemIcons.Close,
  ariaLabel: "Close",
  children: ""
};

export const WithOnFocusAndOnBlur = Template.bind({});
WithOnFocusAndOnBlur.args = {
  onFocus: action("Button focused"),
  onBlur: action("Button blurred")
};

export const UsedAsALink = Template.bind({});
UsedAsALink.args = {
  url: "www.d2iq.com"
};
