import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Badge } from "../../index";
import { BadgeProps } from "../components/badge";

export default {
  title: "Graphic Elements/Badge",
  component: Badge,
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

Badge.displayName = "Badge";
const Template: StoryFn<BadgeProps> = args => <Badge {...args}>Badge</Badge>;

export const Default = {
  render: Template,
  args: { appearance: "default" }
};
