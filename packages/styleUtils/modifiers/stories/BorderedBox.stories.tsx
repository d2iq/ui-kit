import * as React from "react";
import BorderedBox, { BorderedBoxProps } from "../components/BorderedBox";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Style Utilities/BorderedBox",
  component: BorderedBox,
  argTypes: {
    side: {
      options: ["all", "top", "right", "bottom", "left", "horiz", "vert"],
      control: {
        type: "select"
      },
      defaultValue: "all"
    },
    variant: {
      options: ["normal", "heavy"],
      defaultValue: "normal"
    },
    radius: {
      options: ["none", "small", "default"],
      control: {
        type: "select"
      }
    },
    bgColor: {
      control: { type: "color" }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<BorderedBoxProps> = args => (
  <BorderedBox side="all" {...args}>
    BorderedBox Content
  </BorderedBox>
);

export const Default = Template.bind({});
