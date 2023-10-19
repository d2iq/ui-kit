import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
  PrimaryButton,
  SecondaryButton,
  StandardButton,
  SuccessButton,
  DangerButton,
  WarningButton,
  OutlineButton
} from "../..";
import { action } from "@storybook/addon-actions";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ButtonProps } from "../components/ButtonBase";

export default {
  title: "Actions/Button",
  component: StandardButton,
  subComponents: {
    PrimaryButton,
    OutlineButton,
    SecondaryButton,
    SuccessButton,
    DangerButton,
    WarningButton
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

const Template: StoryFn<ButtonProps> = args => (
  <StandardButton {...args}>{args.children}</StandardButton>
);

export const Standard = {
  render: Template
};

export const _PrimaryButton = {
  render: args => <PrimaryButton {...args}>{args.children}</PrimaryButton>
};

export const _SecondaryButton = {
  render: args => <SecondaryButton {...args}>{args.children}</SecondaryButton>
};

export const _OutlineButton = {
  render: args => <OutlineButton {...args}>{args.children}</OutlineButton>
};

export const _SuccessButton = {
  render: args => <SuccessButton {...args}>{args.children}</SuccessButton>
};

export const _WarningButton = {
  render: args => <WarningButton {...args}>{args.children}</WarningButton>
};

export const _DangerButton = {
  render: args => <DangerButton {...args}>{args.children}</DangerButton>
};

export const WithIcons = {
  render: Template,

  args: {
    iconStart: SystemIcons.Close,
    iconEnd: SystemIcons.ArrowRight
  }
};

export const IconOnly = {
  render: Template,

  args: {
    iconStart: SystemIcons.Close,
    ariaLabel: "Close",
    children: ""
  }
};

export const WithOnFocusAndOnBlur = {
  render: Template,

  args: {
    onFocus: action("Button focused"),
    onBlur: action("Button blurred")
  }
};

export const UsedAsALink = {
  render: Template,

  args: {
    url: "www.d2iq.com"
  }
};
