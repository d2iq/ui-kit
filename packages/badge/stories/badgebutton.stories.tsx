import * as React from "react";
import { Story, Meta } from "@storybook/react";

import { BadgeButton } from "../../index";
import { BadgeButtonProps } from "../components/badgeButton";

export default {
  title: "Graphic Elements/BadgeButton",
  component: BadgeButton,
  argTypes: {
    appearance: {
      options: [
        "default",
        "primary",
        "success",
        "warning",
        "danger",
        "outline"
      ],
      control: { type: "select" }
    }
  }
} as Meta;

BadgeButton.displayName = "Badge";
const Template: Story<BadgeButtonProps> = args => (
  <BadgeButton {...args}>Badge Button</BadgeButton>
);

export const Default = Template.bind({});
Default.args = { appearance: "default" };
