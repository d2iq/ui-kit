import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";

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
const Template: StoryFn<BadgeButtonProps> = args => (
  <BadgeButton {...args}>Badge Button</BadgeButton>
);

export const Default = {
  render: Template,
  args: { appearance: "default" }
};
